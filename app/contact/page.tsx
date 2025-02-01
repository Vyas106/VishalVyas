import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container max-w-2xl mx-auto py-12">
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  )
}

