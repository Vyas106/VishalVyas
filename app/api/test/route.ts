import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ 
    message: "API is working!",
    timestamp: new Date().toISOString(),
    environment: {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPassword: !!process.env.EMAIL_APP_PASSWORD,
      nodeEnv: process.env.NODE_ENV
    }
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    return NextResponse.json({ 
      message: "POST request received successfully",
      receivedData: body,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to parse JSON body" },
      { status: 400 }
    )
  }
}