"use client"

import { useState } from "react"
import { Mail, Send, User, Phone, MessageSquare, Check, X, Loader2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [focusedField, setFocusedField] = useState("")

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
    
    if (submitError) {
      setSubmitError("")
    }
  }

  const handleSubmit = async () => {
    
    if (!validateForm()) return
    
    setIsLoading(true)
    setSubmitError("")
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // Log response details for debugging
      console.log("Response status:", response.status)
      console.log("Response headers:", response.headers)
      
      if (!response.ok) {
        const errorData = await response.text()
        console.error("API Error:", errorData)
        throw new Error(`Failed to send message: ${response.status} ${response.statusText}`)
      }

      const result = await response.json()
      console.log("Success:", result)
      
      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error("Full error details:", error)
      setSubmitError(`Failed to send message: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField("")
  }

  // Success State
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-6">
        <div className="text-center space-y-6 sm:space-y-8 max-w-md w-full">
          <div className="relative flex justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center transform transition-all duration-700 scale-110">
              <Check className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
            </div>
            <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full mx-auto opacity-20 animate-ping"></div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-wide">Message Sent</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed px-4">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-sm text-gray-500 hover:text-white transition-colors duration-200 underline underline-offset-4"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full mb-6 sm:mb-8">
              <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light tracking-tight mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <div className="w-16 sm:w-24 h-px bg-white mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Let's start a conversation. Whether you have a project in mind or just want to say hello.
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {/* Name Field */}
              <div className="group">
                <div className="flex items-center mb-3">
                  <User className={`w-4 h-4 sm:w-5 sm:h-5 mr-3 transition-colors duration-200 ${
                    focusedField === 'name' ? 'text-white' : 'text-gray-500'
                  }`} />
                  <label className="text-xs sm:text-sm font-medium text-gray-300 tracking-wide uppercase">
                    Full Name *
                  </label>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  placeholder="Enter your full name"
                  className="w-full bg-transparent border-0 border-b border-gray-700 pb-3 sm:pb-4 text-lg sm:text-xl text-white placeholder-gray-600 focus:border-white focus:outline-none transition-all duration-300"
                  required
                />
                {errors.name && (
                  <div className="flex items-center mt-2 text-red-400">
                    <X className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div className="group">
                <div className="flex items-center mb-3">
                  <Mail className={`w-4 h-4 sm:w-5 sm:h-5 mr-3 transition-colors duration-200 ${
                    focusedField === 'email' ? 'text-white' : 'text-gray-500'
                  }`} />
                  <label className="text-xs sm:text-sm font-medium text-gray-300 tracking-wide uppercase">
                    Email Address *
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-0 border-b border-gray-700 pb-3 sm:pb-4 text-lg sm:text-xl text-white placeholder-gray-600 focus:border-white focus:outline-none transition-all duration-300"
                  required
                />
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-400">
                    <X className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Phone Field */}
              <div className="group">
                <div className="flex items-center mb-3">
                  <Phone className={`w-4 h-4 sm:w-5 sm:h-5 mr-3 transition-colors duration-200 ${
                    focusedField === 'phone' ? 'text-white' : 'text-gray-500'
                  }`} />
                  <label className="text-xs sm:text-sm font-medium text-gray-300 tracking-wide uppercase">
                    Phone Number
                    <span className="text-gray-500 ml-2 font-normal normal-case">(Optional)</span>
                  </label>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  placeholder="+1 (555) 123-4567"
                  className="w-full bg-transparent border-0 border-b border-gray-700 pb-3 sm:pb-4 text-lg sm:text-xl text-white placeholder-gray-600 focus:border-white focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <div className="flex items-center mb-3">
                  <MessageSquare className={`w-4 h-4 sm:w-5 sm:h-5 mr-3 transition-colors duration-200 ${
                    focusedField === 'message' ? 'text-white' : 'text-gray-500'
                  }`} />
                  <label className="text-xs sm:text-sm font-medium text-gray-300 tracking-wide uppercase">
                    Your Message *
                  </label>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  placeholder="Tell us about your project, ideas, or just say hello..."
                  rows="5"
                  className="w-full bg-transparent border border-gray-700 rounded-lg p-4 sm:p-6 text-base sm:text-lg text-white placeholder-gray-600 focus:border-white focus:outline-none transition-all duration-300 resize-none"
                  required
                />
                {errors.message && (
                  <div className="flex items-center mt-2 text-red-400">
                    <X className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="flex items-center justify-center p-4 bg-red-900/20 border border-red-900/30 rounded-lg">
                  <X className="w-5 h-5 mr-2 text-red-400 flex-shrink-0" />
                  <span className="text-red-400 text-sm sm:text-base">{submitError}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6 sm:pt-8">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="group relative w-full bg-white text-black py-4 sm:py-6 px-6 sm:px-8 text-base sm:text-lg font-medium tracking-wide hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 sm:mt-16 pt-8 sm:pt-16 border-t border-gray-800/50">
            <p className="text-gray-500 text-xs sm:text-sm tracking-wide">
              We usually respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}