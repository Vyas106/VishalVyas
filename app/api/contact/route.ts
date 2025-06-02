import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

function createEmailTemplate(name: string, email: string, phone: string, message: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .container {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 10px;
          border: 1px solid #e0e0e0;
        }
        h1 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
        }
        .field {
          margin-bottom: 20px;
          background: white;
          padding: 15px;
          border-radius: 5px;
          border-left: 4px solid #3498db;
        }
        .label {
          font-weight: bold;
          color: #34495e;
          font-size: 14px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .value {
          font-size: 16px;
          color: #2c3e50;
        }
        .message-field {
          border-left-color: #e74c3c;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 New Contact Form Submission</h1>
        <div class="field">
          <div class="label">👤 Full Name</div>
          <div class="value">${name}</div>
        </div>
        <div class="field">
          <div class="label">📧 Email Address</div>
          <div class="value">${email}</div>
        </div>
        <div class="field">
          <div class="label">📱 Phone Number</div>
          <div class="value">${phone || "Not provided"}</div>
        </div>
        <div class="field message-field">
          <div class="label">💬 Message</div>
          <div class="value">${message.replace(/\n/g, '<br>')}</div>
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
        <p style="font-size: 12px; color: #7f8c8d; text-align: center;">
          This email was sent from your website contact form at ${new Date().toLocaleString()}
        </p>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: Request) {
  console.log("🚀 Contact API route called")
  
  try {
    // Parse request body
    const body = await request.json()
    console.log("📝 Received form data:", { ...body, message: body.message?.substring(0, 50) + "..." })
    
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      console.error("❌ Missing required fields")
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.error("❌ Invalid email format")
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error("❌ Missing email configuration")
      return NextResponse.json(
        { error: "Server configuration error - missing email credentials" },
        { status: 500 }
      )
    }

    console.log("📧 Creating email transporter...")
    
    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
      console.log("✅ Email transporter verified successfully")
    } catch (verifyError) {
      console.error("❌ Email transporter verification failed:", verifyError)
      return NextResponse.json(
        { error: "Email configuration error - please check your credentials" },
        { status: 500 }
      )
    }

    // Prepare email options
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: "vyasvishal.dev@gmail.com",
      subject: `🚀 New Contact Form Submission from ${name}`,
      html: createEmailTemplate(name, email, phone, message),
      replyTo: email, // Allow direct reply to the sender
    }

    console.log("📤 Sending email...")
    
    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("✅ Email sent successfully:", info.messageId)

    return NextResponse.json({ 
      message: "Email sent successfully",
      messageId: info.messageId 
    })

  } catch (error) {
    console.error("❌ Error in contact API:", error)
    
    // Return more specific error messages
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { error: "Email authentication failed - please check your email credentials" },
        { status: 500 }
      )
    }
    
    if (error.code === 'ENOTFOUND') {
      return NextResponse.json(
        { error: "Email server not found - please check your internet connection" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    )
  }
}