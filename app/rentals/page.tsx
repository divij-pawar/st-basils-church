"use client"

import type React from "react"

import { useState } from "react"
import Navbar  from "@/components/Navbar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Users, BookOpen, Heart, Building } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    department: "",
    message: "",
    preferredContact: "email",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We will respond within 24 hours.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/20 via-background to-secondary/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Mail className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Contact Us
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We welcome your questions, prayer requests, and inquiries about our programs and services.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <Card className="p-6 border-border/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Phone</h3>
                        <p className="text-foreground/80 mb-1">(555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Monday - Friday, 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Email</h3>
                        <p className="text-foreground/80 mb-1">info@saintbasilseminary.org</p>
                        <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Address</h3>
                        <p className="text-foreground/80 mb-1">123 Seminary Way</p>
                        <p className="text-foreground/80 mb-1">Orthodox City, OC 12345</p>
                        <p className="text-sm text-muted-foreground">Visitor parking available</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Office Hours</h3>
                        <div className="text-foreground/80 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                          <p>Saturday: 10:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed (Liturgy at 9:00 AM)</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8 border-border/50">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-foreground">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-foreground">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="department" className="text-foreground">
                        Department
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("department", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select the relevant department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admissions">Admissions</SelectItem>
                          <SelectItem value="academics">Academic Affairs</SelectItem>
                          <SelectItem value="cursillo">Cursillo Program</SelectItem>
                          <SelectItem value="events">Events & Rentals</SelectItem>
                          <SelectItem value="donations">Donations & Development</SelectItem>
                          <SelectItem value="prayer">Prayer Line</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-foreground">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief description of your inquiry"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please provide details about your inquiry..."
                        required
                        className="mt-1"
                        rows={5}
                      />
                    </div>

                    <div>
                      <Label htmlFor="preferredContact" className="text-foreground">
                        Preferred Contact Method
                      </Label>
                      <Select
                        value={formData.preferredContact}
                        onValueChange={(value) => handleInputChange("preferredContact", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="either">Either Email or Phone</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-3xl font-bold text-center text-foreground mb-12">Department Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center border-border/50">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Admissions</h3>
                <p className="text-sm text-foreground/80 mb-3">Academic program inquiries and applications</p>
                <p className="text-sm text-muted-foreground">admissions@saintbasilseminary.org</p>
              </Card>

              <Card className="p-6 text-center border-border/50">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Cursillo</h3>
                <p className="text-sm text-foreground/80 mb-3">Retreat weekends and spiritual programs</p>
                <p className="text-sm text-muted-foreground">cursillo@saintbasilseminary.org</p>
              </Card>

              <Card className="p-6 text-center border-border/50">
                <Building className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Events</h3>
                <p className="text-sm text-foreground/80 mb-3">Facility rentals and event planning</p>
                <p className="text-sm text-muted-foreground">events@saintbasilseminary.org</p>
              </Card>

              <Card className="p-6 text-center border-border/50">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Prayer Line</h3>
                <p className="text-sm text-foreground/80 mb-3">Prayer requests and spiritual support</p>
                <p className="text-sm text-muted-foreground">prayers@saintbasilseminary.org</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-3xl font-bold text-center text-foreground mb-12">Visit Us</h2>
            <Card className="overflow-hidden border-border/50">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Seminary Location</h3>
                  <p className="text-foreground/80 mb-4">123 Seminary Way, Orthodox City, OC 12345</p>
                  <Button asChild variant="outline">
                    <a
                      href="https://maps.google.com/?q=123+Seminary+Way+Orthodox+City+OC+12345"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">Parking</h4>
                <p className="text-sm text-foreground/80">Free parking available on-site for visitors and events</p>
              </div>
              <div>
                <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">Accessibility</h4>
                <p className="text-sm text-foreground/80">All facilities are wheelchair accessible with ramps</p>
              </div>
              <div>
                <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">Public Transit</h4>
                <p className="text-sm text-foreground/80">Bus routes 15 and 23 stop within walking distance</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
