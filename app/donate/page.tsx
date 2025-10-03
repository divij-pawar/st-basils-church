import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cross, Heart, BookOpen, Users, Building, GraduationCap, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Cross className="h-8 w-8 text-accent" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Saint Basil Seminary</h1>
                <p className="text-sm text-muted-foreground">Orthodox Theological Education</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/programs" className="text-foreground hover:text-accent transition-colors">
                Programs
              </Link>
              <Link href="/events" className="text-foreground hover:text-accent transition-colors">
                Events
              </Link>
              <Link href="/news" className="text-foreground hover:text-accent transition-colors">
                News
              </Link>
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <Button variant="default" size="sm" className="bg-accent text-accent-foreground">
                Donate
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Support Our Sacred Mission</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Your generous support helps us prepare faithful servants for Orthodox ministry and preserve the sacred
              traditions of theological education for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Your Impact</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See how your donation directly supports our mission of Orthodox theological education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border text-center">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Student Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Support deserving students who demonstrate financial need and academic excellence in their theological
                  studies.
                </CardDescription>
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm font-medium text-foreground">$500 supports one student for a semester</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Library & Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Expand our theological library with rare manuscripts, patristic texts, and modern Orthodox
                  scholarship.
                </CardDescription>
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm font-medium text-foreground">$250 purchases essential theological texts</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Campus Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Maintain and improve our chapel, classrooms, dormitories, and other facilities essential for seminary
                  life.
                </CardDescription>
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm font-medium text-foreground">$1,000 supports facility maintenance</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Faculty Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Attract and retain distinguished Orthodox theologians and provide resources for their scholarly work.
                </CardDescription>
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm font-medium text-foreground">$2,000 supports faculty development</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Make a Donation</h3>
              <p className="text-lg text-muted-foreground text-pretty">
                Choose your donation amount and help us continue our sacred mission
              </p>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground text-center">Secure Donation Form</CardTitle>
                <CardDescription className="text-muted-foreground text-center">
                  All donations are processed securely and are tax-deductible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Amount */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Donation Amount</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <Button variant="outline" className="bg-transparent">
                      $50
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      $100
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      $250
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      $500
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-foreground">$</span>
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      className="flex-1 px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                {/* Donation Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Donation Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="bg-transparent">
                      One-time
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      Monthly
                    </Button>
                  </div>
                </div>

                {/* Designation */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Designation (Optional)</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">General Fund</option>
                    <option value="scholarships">Student Scholarships</option>
                    <option value="library">Library & Resources</option>
                    <option value="facilities">Campus Facilities</option>
                    <option value="faculty">Faculty Support</option>
                    <option value="chapel">Chapel Restoration</option>
                  </select>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Share why you're supporting Saint Basil Seminary..."
                  />
                </div>

                {/* Security Features */}
                <div className="bg-accent/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-medium text-foreground">Secure & Encrypted</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your donation is processed through our secure payment system. All personal and financial information
                    is encrypted and protected.
                  </p>
                </div>

                <Button size="lg" className="w-full text-lg">
                  Complete Donation
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Saint Basil Seminary is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the
                  full extent allowed by law. Tax ID: 12-3456789
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Other Ways to Support</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore additional opportunities to support our mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Legacy Giving</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Include Saint Basil Seminary in your will or estate planning to create a lasting impact on Orthodox
                  theological education.
                </CardDescription>
                <Button variant="outline" className="bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Heart className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Memorial Gifts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Honor the memory of a loved one with a meaningful gift that supports future Orthodox clergy and
                  scholars.
                </CardDescription>
                <Button variant="outline" className="bg-transparent">
                  Make Memorial Gift
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Corporate Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Partner with us through corporate sponsorships, matching gift programs, or employee volunteer
                  opportunities.
                </CardDescription>
                <Button variant="outline" className="bg-transparent">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <Link href="/donate" className="hover:text-accent transition-colors">
                    Donate
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
