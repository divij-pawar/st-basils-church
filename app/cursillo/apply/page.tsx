"use client"

import type React from "react"
import { useState } from "react"
// Replaced Navigation with Navbar from the target project
import Navbar from "@/components/Navbar"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
// Added Cross to the import list for the custom footer
import { FileText, Cross } from "lucide-react"
// Added Link for the custom footer
import Link from "next/link"

export default function CursilloApplicationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    parish: "",
    priest: "",
    preferredWeekend: "",
    emergencyContact: "",
    emergencyPhone: "",
    dietaryRestrictions: "",
    medicalConditions: "",
    motivation: "",
    sponsor: "",
    agreement: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your application! We will contact you soon.")
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
            <FileText className="h-12 w-12 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Cursillo Application
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Begin your spiritual journey with our Cursillo retreat weekend experience.
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

                {/* Address */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Address</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address" className="text-foreground">
                        Street Address *
                      </Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-foreground">
                          City *
                        </Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-foreground">
                          State *
                        </Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => handleInputChange("state", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode" className="text-foreground">
                          Zip Code *
                        </Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange("zipCode", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Church Information */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Church Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div>
                      <Label htmlFor="priest" className="text-foreground">
                        Parish Priest *
                      </Label>
                      <Input
                        id="priest"
                        value={formData.priest}
                        onChange={(e) => handleInputChange("priest", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Weekend Preference */}
                <div>
                  <Label htmlFor="preferredWeekend" className="text-foreground">
                    Preferred Weekend *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("preferredWeekend", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a weekend" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="men-march">Men's Weekend - March 15-17, 2024</SelectItem>
                      <SelectItem value="women-april">Women's Weekend - April 12-14, 2024</SelectItem>
                      <SelectItem value="men-june">Men's Weekend - June 21-23, 2024</SelectItem>
                      <SelectItem value="women-july">Women's Weekend - July 19-21, 2024</SelectItem>
                      <SelectItem value="men-september">Men's Weekend - September 13-15, 2024</SelectItem>
                      <SelectItem value="women-october">Women's Weekend - October 11-13, 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Emergency Contact */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="emergencyContact" className="text-foreground">
                        Emergency Contact Name *
                      </Label>
                      <Input
                        id="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone" className="text-foreground">
                        Emergency Contact Phone *
                      </Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Health Information */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Health Information</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="dietaryRestrictions" className="text-foreground">
                        Dietary Restrictions or Allergies
                      </Label>
                      <Textarea
                        id="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                        placeholder="Please list any dietary restrictions, food allergies, or special meal requirements..."
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="medicalConditions" className="text-foreground">
                        Medical Conditions or Medications
                      </Label>
                      <Textarea
                        id="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                        placeholder="Please list any medical conditions or medications we should be aware of..."
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Statement */}
                <div>
                  <Label htmlFor="motivation" className="text-foreground">
                    Why do you want to attend Cursillo? *
                  </Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="Please share your motivation for attending Cursillo and what you hope to gain from this experience..."
                    required
                    className="mt-1"
                    rows={4}
                  />
                </div>

                {/* Sponsor Information */}
                <div>
                  <Label htmlFor="sponsor" className="text-foreground">
                    Sponsor Name (if applicable)
                  </Label>
                  <Input
                    id="sponsor"
                    value={formData.sponsor}
                    onChange={(e) => handleInputChange("sponsor", e.target.value)}
                    placeholder="Name of the person who invited you or is sponsoring your application"
                    className="mt-1"
                  />
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
                    I understand that Cursillo is a three-day spiritual retreat experience and I commit to attending the
                    entire weekend. I also understand that there may be a modest fee to cover meals and materials, and
                    that financial assistance is available if needed. *
                  </Label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    disabled={!formData.agreement}
                  >
                    Submit Application
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    After submitting your application, you will receive a confirmation email with next steps.
                  </p>
                </div>
              </form>
            </Card>
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