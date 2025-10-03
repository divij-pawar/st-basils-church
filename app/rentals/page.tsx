"use client"

import type React from "react"
import { useState } from "react"
// Use the Navbar component from the target project
import Navbar from "@/components/Navbar"
// The target project uses different imports for its UI components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Building, Users, Cross } from "lucide-react"
// The target project has a different footer
import Link from "next/link"

const facilities = [
  {
    id: "chapel",
    name: "Seminary Chapel",
    capacity: "150 seated",
    description: "Beautiful Orthodox chapel perfect for weddings, memorial services, and religious ceremonies",
    features: ["Sacred iconography", "Professional sound system", "Bridal preparation room", "Parking for 50 cars"],
    pricing: "$800/day",
    image: "/orthodox-chapel-interior.png",
  },
  {
    id: "auditorium",
    name: "Main Auditorium",
    capacity: "200 seated",
    description: "Modern auditorium ideal for conferences, lectures, concerts, and large gatherings",
    features: ["Audio/visual equipment", "Stage lighting", "Green rooms", "Accessible seating"],
    pricing: "$600/day",
    image: "/modern-auditorium.png",
  },
  {
    id: "hall",
    name: "Fellowship Hall",
    capacity: "120 seated, 180 standing",
    description: "Versatile space perfect for receptions, banquets, meetings, and social events",
    features: ["Full commercial kitchen", "Tables and chairs included", "Dance floor area", "Bar setup available"],
    pricing: "$400/day",
    image: "/fellowship-hall-reception.png",
  },
  {
    id: "classroom",
    name: "Conference Rooms",
    capacity: "25-50 per room",
    description: "Professional meeting spaces ideal for corporate retreats, workshops, and seminars",
    features: ["Projector and screen", "Whiteboard", "WiFi included", "Coffee service available"],
    pricing: "$150/day per room",
    image: "/conference-room-meeting.png",
  },
  {
    id: "grounds",
    name: "Seminary Grounds",
    capacity: "Up to 300 guests",
    description: "Beautiful outdoor spaces perfect for weddings, festivals, and community gatherings",
    features: ["Landscaped gardens", "Covered pavilion", "Ample parking", "Restroom facilities"],
    pricing: "$300/day",
    image: "/seminary-grounds-garden.png",
  },
]

export default function RentalsPage() {
  const [selectedFacility, setSelectedFacility] = useState("")
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    expectedAttendance: "",
    setupRequirements: "",
    cateringNeeds: "",
    additionalServices: [] as string[],
    eventDescription: "",
    previousRental: false,
    agreement: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Rental application submitted:", { selectedFacility, ...formData })
    alert("Thank you for your rental inquiry! We will contact you within 24 hours to discuss your event.")
  }

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter((s) => s !== service)
        : [...prev.additionalServices, service],
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Replaced Navigation with Navbar from the target project */}
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-card to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Building className="h-12 w-12 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Event Rentals
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Host your special event in our beautiful and sacred spaces, perfect for weddings, conferences, and
              community gatherings.
            </p>
          </div>
        </section>

        {/* Available Facilities */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Available Facilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Explore our versatile spaces designed to accommodate a wide range of events
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {facilities.map((facility) => (
                <Card key={facility.id} className="overflow-hidden border-border/50">
                  <div className="aspect-video bg-muted">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <CardTitle className="text-xl font-semibold text-foreground">{facility.name}</CardTitle>
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        {facility.pricing}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground/80">{facility.capacity}</span>
                    </div>
                    <CardDescription className="text-foreground/80 mb-4 leading-relaxed">{facility.description}</CardDescription>
                    <div className="space-y-2 mb-4">
                      {facility.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-foreground/70">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => {
                        setSelectedFacility(facility.id)
                        document.getElementById("rental-form")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Request This Facility
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Policies */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Rental Policies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Important information regarding booking, payments, and event guidelines
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-border/50">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-semibold text-foreground">Booking Requirements</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 text-foreground/80 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Advance booking required (minimum 30 days)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>50% deposit required to secure booking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Proof of liability insurance required</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Security deposit may be required</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>Final payment due 7 days before event</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 border-border/50">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-semibold text-foreground">Event Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 text-foreground/80 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Events must align with seminary values</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>No alcohol in chapel or sacred spaces</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Setup and cleanup included in rental</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Decorations must be approved in advance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>Parking available on-site</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Rental Application Form */}
        <section id="rental-form" className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Rental Application Form
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Fill out the form below to submit your inquiry for an event rental
              </p>
            </div>
            <Card className="p-8 border-border/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Facility Selection */}
                <div>
                  <Label htmlFor="facility" className="text-foreground text-lg font-semibold">
                    Requested Facility *
                  </Label>
                  <Select value={selectedFacility} onValueChange={setSelectedFacility}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select the facility you'd like to rent" />
                    </SelectTrigger>
                    <SelectContent>
                      {facilities.map((facility) => (
                        <SelectItem key={facility.id} value={facility.id}>
                          {facility.name} - {facility.pricing}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Organization Information */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Organization Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="organizationName" className="text-foreground">
                        Organization/Group Name *
                      </Label>
                      <Input
                        id="organizationName"
                        value={formData.organizationName}
                        onChange={(e) => handleInputChange("organizationName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactName" className="text-foreground">
                        Primary Contact Name *
                      </Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange("contactName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
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
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Event Details</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="eventType" className="text-foreground">
                        Type of Event *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("eventType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="memorial">Memorial Service</SelectItem>
                          <SelectItem value="conference">Conference/Seminar</SelectItem>
                          <SelectItem value="reception">Reception/Banquet</SelectItem>
                          <SelectItem value="meeting">Meeting/Workshop</SelectItem>
                          <SelectItem value="concert">Concert/Performance</SelectItem>
                          <SelectItem value="community">Community Gathering</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="eventDate" className="text-foreground">
                          Event Date *
                        </Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => handleInputChange("eventDate", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="startTime" className="text-foreground">
                          Start Time *
                        </Label>
                        <Input
                          id="startTime"
                          type="time"
                          value={formData.startTime}
                          onChange={(e) => handleInputChange("startTime", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="endTime" className="text-foreground">
                          End Time *
                        </Label>
                        <Input
                          id="endTime"
                          type="time"
                          value={formData.endTime}
                          onChange={(e) => handleInputChange("endTime", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="expectedAttendance" className="text-foreground">
                        Expected Attendance *
                      </Label>
                      <Input
                        id="expectedAttendance"
                        type="number"
                        value={formData.expectedAttendance}
                        onChange={(e) => handleInputChange("expectedAttendance", e.target.value)}
                        placeholder="Number of expected guests"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Additional Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Audio/Visual Equipment",
                      "Catering Kitchen Access",
                      "Setup/Breakdown Service",
                      "Security Service",
                      "Parking Attendant",
                      "Cleaning Service",
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-3">
                        <Checkbox
                          id={service}
                          checked={formData.additionalServices.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <Label htmlFor={service} className="text-sm text-foreground">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="setupRequirements" className="text-foreground">
                      Setup Requirements
                    </Label>
                    <Textarea
                      id="setupRequirements"
                      value={formData.setupRequirements}
                      onChange={(e) => handleInputChange("setupRequirements", e.target.value)}
                      placeholder="Describe any special setup needs, decorations, or arrangements..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="cateringNeeds" className="text-foreground">
                      Catering and Food Service Needs
                    </Label>
                    <Textarea
                      id="cateringNeeds"
                      value={formData.cateringNeeds}
                      onChange={(e) => handleInputChange("cateringNeeds", e.target.value)}
                      placeholder="Describe catering plans, kitchen usage, or food service requirements..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="eventDescription" className="text-foreground">
                      Event Description *
                    </Label>
                    <Textarea
                      id="eventDescription"
                      value={formData.eventDescription}
                      onChange={(e) => handleInputChange("eventDescription", e.target.value)}
                      placeholder="Provide a detailed description of your event, its purpose, and any special considerations..."
                      required
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                </div>

                {/* Previous Experience */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="previousRental"
                    checked={formData.previousRental}
                    onCheckedChange={(checked) => handleInputChange("previousRental", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="previousRental" className="text-sm text-foreground leading-relaxed">
                    I have previously rented facilities from Saint Basil Seminary
                  </Label>
                </div>

                {/* Agreement */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreement}
                    onCheckedChange={(checked) => handleInputChange("agreement", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="agreement" className="text-sm text-foreground leading-relaxed">
                    I agree to the rental policies and understand that this application is subject to approval. I will
                    provide proof of liability insurance and comply with all seminary guidelines for events. *
                  </Label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    disabled={!formData.agreement || !selectedFacility}
                  >
                    Submit Rental Application
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    We will review your application and contact you within 24 hours to discuss availability and next
                    steps.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Questions About Rentals?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our events team is here to help you plan the perfect event at Saint Basil Seminary. Contact us for more
              information about availability, pricing, or special requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="tel:+15551234567">Call: (555) 123-4567</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:events@saintbasilseminary.org">Email Events Team</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Replaced Footer with the one from the target project */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Cross className="h-6 w-6 text-accent" />
                <h4 className="text-lg font-bold">Saint Basil Seminary</h4>
              </div>
              <p className="text-primary-foreground/80 text-pretty">
                Preparing faithful servants for Orthodox ministry through theological education and spiritual formation.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-accent transition-colors">
                    Academic Programs
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-accent transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-accent transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="text-primary-foreground/80 space-y-2">
                <p>123 Seminary Lane</p>
                <p>Orthodox City, OC 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@saintbasilseminary.edu</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Saint Basil Seminary. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}