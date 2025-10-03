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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Cross, Lightbulb } from "lucide-react"
// The target project has a different footer
import Link from "next/link"

export default function PrayerPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    prayerRequest: "",
    requestType: "",
    urgent: false,
    anonymous: false,
    updates: true,
    shareWithCommunity: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Prayer request submitted:", formData)
    alert("Thank you for your prayer request. Our prayer team will lift up your intentions in prayer.")
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Replaced Navigation with Navbar from the target project */}
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-card to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Cross className="h-12 w-12 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Prayer Line
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Submit your prayer requests to our faithful community of prayer warriors who will lift up your intentions
              before God.
            </p>
          </div>
        </section>

        {/* About Prayer Ministry */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Prayer Ministry</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Saint Basil Seminary Prayer Line is a sacred ministry where our community comes together to
                  intercede for those in need. Our dedicated prayer team, consisting of seminary students, faculty, and
                  faithful parishioners, commits to praying for each request with love and devotion.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you're facing illness, family challenges, spiritual struggles, or simply need prayers of
                  thanksgiving, we are here to support you through the power of prayer and the grace of our Lord Jesus
                  Christ.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4 text-accent" />
                    <span>Confidential & Compassionate</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Community Support</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Cross className="h-4 w-4 text-secondary" />
                    <span>Orthodox Tradition</span>
                  </div>
                </div>
              </div>
              <Card className="p-8 border-border/50">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-semibold text-foreground">How It Works</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Submit:</strong> Share your prayer request using the form
                      below
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Pray:</strong> Our prayer team receives and prays for your
                      intentions
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Support:</strong> Ongoing prayers and spiritual support from
                      our community
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Prayer Request Form */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Submit a Prayer Request
            </h2>
            <Card className="p-8 border-border/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
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
                        Email Address (Optional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Provide email if you'd like prayer updates</p>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number (Optional)
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
                </div>

                {/* Prayer Request Type */}
                <div>
                  <Label htmlFor="requestType" className="text-foreground">
                    Type of Prayer Request
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("requestType", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select the type of prayer request" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healing">Healing & Health</SelectItem>
                      <SelectItem value="family">Family & Relationships</SelectItem>
                      <SelectItem value="spiritual">Spiritual Growth & Guidance</SelectItem>
                      <SelectItem value="financial">Financial Difficulties</SelectItem>
                      <SelectItem value="grief">Grief & Loss</SelectItem>
                      <SelectItem value="thanksgiving">Thanksgiving & Praise</SelectItem>
                      <SelectItem value="guidance">Life Decisions & Guidance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Prayer Request Details */}
                <div>
                  <Label htmlFor="prayerRequest" className="text-foreground">
                    Prayer Request Details *
                  </Label>
                  <Textarea
                    id="prayerRequest"
                    value={formData.prayerRequest}
                    onChange={(e) => handleInputChange("prayerRequest", e.target.value)}
                    placeholder="Please share your prayer request. Be as specific or general as you feel comfortable. Our prayer team will handle your request with care and confidentiality."
                    required
                    className="mt-1"
                    rows={5}
                  />
                </div>

                {/* Prayer Options */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Prayer Options</h3>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="urgent"
                      checked={formData.urgent}
                      onCheckedChange={(checked) => handleInputChange("urgent", checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="urgent" className="text-sm text-foreground leading-relaxed">
                      <strong>Urgent Prayer Request</strong> - Please prioritize this request for immediate prayer
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="anonymous"
                      checked={formData.anonymous}
                      onCheckedChange={(checked) => handleInputChange("anonymous", checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="anonymous" className="text-sm text-foreground leading-relaxed">
                      <strong>Anonymous Request</strong> - Keep my identity confidential when sharing with prayer team
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="shareWithCommunity"
                      checked={formData.shareWithCommunity}
                      onCheckedChange={(checked) => handleInputChange("shareWithCommunity", checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="shareWithCommunity" className="text-sm text-foreground leading-relaxed">
                      <strong>Share with Prayer Community</strong> - Include this request in our community prayer list
                      (general details only)
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="updates"
                      checked={formData.updates}
                      onCheckedChange={(checked) => handleInputChange("updates", checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="updates" className="text-sm text-foreground leading-relaxed">
                      <strong>Prayer Updates</strong> - I would like to receive follow-up prayers and spiritual
                      encouragement (email required)
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Submit Prayer Request
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Your prayer request will be handled with complete confidentiality and Christian love.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </section>

        {/* Prayer Guidelines */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Prayer Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-border/50">
                <CardHeader className="p-0 mb-4">
                  <Lightbulb className="h-8 w-8 text-secondary mb-4" />
                  <CardTitle className="text-xl font-semibold text-foreground">What We Pray For</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Physical, emotional, and spiritual healing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>Family relationships and reconciliation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Guidance in life decisions and spiritual growth</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Comfort in times of grief and loss</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>Thanksgiving and praise for God's blessings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 border-border/50">
                <CardHeader className="p-0 mb-4">
                  <Heart className="h-8 w-8 text-accent mb-4" />
                  <CardTitle className="text-xl font-semibold text-foreground">Our Commitment</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Complete confidentiality and respect for your privacy</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>Daily prayers by our dedicated prayer team</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Orthodox Christian prayers and intercessions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Follow-up prayers and spiritual support when requested</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>Inclusion in our liturgical prayers when appropriate</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact for Urgent Needs */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Urgent Prayer Needs</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              For immediate prayer needs or pastoral care, please don't hesitate to contact us directly. Our clergy and
              prayer team are available to provide spiritual support during times of crisis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="tel:+15551234567">Call Prayer Line: (555) 123-4567</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:prayers@saintbasilseminary.org">Email: prayers@saintbasilseminary.org</a>
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