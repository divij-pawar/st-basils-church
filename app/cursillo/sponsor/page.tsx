"use client"

import type React from "react"
import { useState } from "react"
// Replaced Navigation with Navbar from the target project
import Navbar from "@/components/Navbar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
// Added Cross to the import list for the custom footer
import { UserPlus, Cross } from "lucide-react"
// Added Link for the custom footer
import Link from "next/link"

export default function SponsorApplicationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    parish: "",
    cursilloDate: "",
    experience: "",
    commitment: "",
    availability: "",
    agreement: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sponsor application submitted:", formData)
    alert("Thank you for your interest in becoming a sponsor! We will contact you soon.")
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-10"></div>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-card to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <UserPlus className="h-12 w-12 text-secondary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Become a Cursillo Sponsor
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Help guide others on their spiritual journey by becoming a Cursillo sponsor.
            </p>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 border-border/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                {/* Church Information */}
                <div>
                  <Label htmlFor="parish" className="text-foreground">
                    Parish Name *
                  </Label>
                  <Input
                    id="parish"
                    value={formData.parish}
                    onChange={(e) => handleInputChange("parish", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>

                {/* Cursillo Experience */}
                <div>
                  <Label htmlFor="cursilloDate" className="text-foreground">
                    When did you attend your Cursillo weekend? *
                  </Label>
                  <Input
                    id="cursilloDate"
                    value={formData.cursilloDate}
                    onChange={(e) => handleInputChange("cursilloDate", e.target.value)}
                    placeholder="Month and Year (e.g., March 2020)"
                    required
                    className="mt-1"
                  />
                </div>

                {/* Experience and Commitment */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="experience" className="text-foreground">
                      Describe your Cursillo experience and how it has impacted your faith journey *
                    </Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      placeholder="Share how Cursillo has influenced your spiritual life and why you want to help others experience it..."
                      required
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="commitment" className="text-foreground">
                      What does being a sponsor mean to you? *
                    </Label>
                    <Textarea
                      id="commitment"
                      value={formData.commitment}
                      onChange={(e) => handleInputChange("commitment", e.target.value)}
                      placeholder="Describe your understanding of the sponsor role and your commitment to supporting candidates..."
                      required
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="availability" className="text-foreground">
                      What is your availability for sponsor training and weekend participation? *
                    </Label>
                    <Textarea
                      id="availability"
                      value={formData.availability}
                      onChange={(e) => handleInputChange("availability", e.target.value)}
                      placeholder="Please describe your availability for sponsor training sessions and weekend retreats..."
                      required
                      className="mt-1"
                      rows={3}
                    />
                  </div>
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
                    I understand the responsibilities of being a Cursillo sponsor, including attending sponsor training,
                    supporting candidates before and during their weekend, and participating in ongoing Cursillo
                    community activities. I commit to fulfilling these responsibilities with dedication and love. *
                  </Label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    disabled={!formData.agreement}
                  >
                    Submit Sponsor Application
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Thank you for your interest in becoming a sponsor. We will review your application and contact you
                    about next steps.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </section>
      </main>
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