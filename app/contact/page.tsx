import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cross, MapPin, Phone, Mail, Clock, Users, BookOpen, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Contact Us</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              We welcome your inquiries about our programs, admissions process, or any questions about Orthodox
              theological education. Our team is here to help guide your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're interested in our academic programs, planning a visit, or seeking spiritual guidance,
                  we're here to assist you. Our admissions team and faculty are available to answer your questions about
                  Orthodox theological education.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Seminary Address</h4>
                        <p className="text-muted-foreground">
                          123 Seminary Lane
                          <br />
                          Orthodox City, OC 12345
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Phone Numbers</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Main Office: (555) 123-4567</p>
                          <p>Admissions: (555) 123-4568</p>
                          <p>Student Services: (555) 123-4569</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Email Addresses</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>General: info@saintbasilseminary.edu</p>
                          <p>Admissions: admissions@saintbasilseminary.edu</p>
                          <p>Academic Affairs: academic@saintbasilseminary.edu</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                          <p>Saturday: 10:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed (Liturgy at 9:00 AM)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Send Us a Message</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Inquiry Type *</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select an option</option>
                      <option value="admissions">Admissions Information</option>
                      <option value="programs">Academic Programs</option>
                      <option value="visit">Campus Visit</option>
                      <option value="financial">Financial Aid</option>
                      <option value="spiritual">Spiritual Direction</option>
                      <option value="general">General Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Please share your questions or tell us how we can help you..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="mt-1 h-4 w-4 text-accent border-border rounded focus:ring-ring"
                    />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      I would like to receive updates about seminary news, events, and programs
                    </label>
                  </div>

                  <Button size="lg" className="w-full text-lg">
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy and will never share your information with third parties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Department Contacts</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Connect directly with specific departments for specialized assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border text-center">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Admissions Office</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Application process, requirements, and enrollment information
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">admissions@saintbasilseminary.edu</p>
                  <p className="text-muted-foreground">(555) 123-4568</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Academic Affairs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Curriculum, course schedules, and academic policies
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">academic@saintbasilseminary.edu</p>
                  <p className="text-muted-foreground">(555) 123-4570</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Student Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Housing, financial aid, and student life support
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">students@saintbasilseminary.edu</p>
                  <p className="text-muted-foreground">(555) 123-4569</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <Cross className="h-10 w-10 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Spiritual Direction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Pastoral care, spiritual guidance, and confession
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">spiritual@saintbasilseminary.edu</p>
                  <p className="text-muted-foreground">(555) 123-4571</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Visit Our Campus</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Located in the heart of Orthodox City, our beautiful campus welcomes visitors for tours, liturgical
              services, and special events
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-0">
                {/* Placeholder for embedded map */}
                <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">Interactive Campus Map</h4>
                    <p className="text-muted-foreground">123 Seminary Lane, Orthodox City, OC 12345</p>
                    <Button className="mt-4">Get Directions</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Campus Tours</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    Schedule a guided tour of our facilities including the chapel, library, classrooms, and dormitories.
                  </CardDescription>
                  <Button variant="outline" className="bg-transparent">
                    Schedule Tour
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Parking & Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    Free parking available on campus. All buildings are wheelchair accessible with designated parking
                    spaces.
                  </CardDescription>
                  <Button variant="outline" className="bg-transparent">
                    Accessibility Info
                  </Button>
                </CardContent>
              </Card>
            </div>
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
                  <Link href="/contact" className="hover:text-accent transition-colors">
                    Contact
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
