import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cross, BookOpen, Heart, GraduationCap, Clock, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
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
              <Link href="/programs" className="text-accent font-medium">
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
              <Button variant="default" size="sm">
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
            <GraduationCap className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Academic Programs</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Comprehensive theological education rooted in Orthodox tradition, preparing faithful servants for ministry
              in the contemporary world through rigorous academic study and spiritual formation.
            </p>
          </div>
        </div>
      </section>

      {/* Degree Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Degree Programs</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose from our comprehensive range of theological degrees designed for different stages of ministry
              preparation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Master of Divinity */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Primary Degree
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">3-4 Years</span>
                  </div>
                </div>
                <CardTitle className="text-foreground text-2xl">Master of Divinity (M.Div.)</CardTitle>
                <CardDescription className="text-muted-foreground">
                  The foundational degree for Orthodox pastoral ministry, combining theological depth with practical
                  preparation for parish leadership.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Core Curriculum:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Patristic Theology & Church History
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Biblical Studies & Exegesis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Liturgical Theology & Practice
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Pastoral Care & Counseling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Homiletics & Preaching
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <Button className="w-full">Learn More About M.Div.</Button>
                </div>
              </CardContent>
            </Card>

            {/* Bachelor of Theology */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Undergraduate
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">4 Years</span>
                  </div>
                </div>
                <CardTitle className="text-foreground text-2xl">Bachelor of Theology (B.Th.)</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Foundational theological education for those beginning their journey in Orthodox studies and ministry
                  preparation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Core Curriculum:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Introduction to Orthodox Theology
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Church History & Patristics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Biblical Languages (Greek & Hebrew)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Liturgical Studies
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Christian Ethics & Spirituality
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More About B.Th.
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Doctor of Ministry */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-accent text-accent">
                    Advanced Degree
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">3-5 Years</span>
                  </div>
                </div>
                <CardTitle className="text-foreground text-2xl">Doctor of Ministry (D.Min.)</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Advanced professional degree for experienced clergy seeking to deepen their pastoral and leadership
                  skills.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Specializations:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Parish Leadership & Administration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Spiritual Direction & Counseling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Liturgical Studies & Music
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Mission & Evangelism
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Orthodox Apologetics
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More About D.Min.
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Certificate Programs */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-secondary text-secondary">
                    Certificate
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">1-2 Years</span>
                  </div>
                </div>
                <CardTitle className="text-foreground text-2xl">Certificate Programs</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Focused studies for lay ministry, continuing education, and specialized Orthodox theological topics.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Available Certificates:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Orthodox Theology for Lay Ministry
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Iconography & Sacred Art
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Byzantine Chant & Liturgical Music
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Youth & Family Ministry
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Orthodox Spirituality & Monasticism
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full bg-transparent">
                    Explore Certificates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admissions Information */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Admissions Information</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Begin your journey in Orthodox theological education with our comprehensive admissions process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <Calendar className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Application Deadlines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Fall Semester</h4>
                  <p className="text-muted-foreground text-sm">Priority: March 15</p>
                  <p className="text-muted-foreground text-sm">Final: May 1</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Spring Semester</h4>
                  <p className="text-muted-foreground text-sm">Priority: October 15</p>
                  <p className="text-muted-foreground text-sm">Final: December 1</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Bachelor's degree (for M.Div.)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Letters of recommendation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Personal statement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Pastoral endorsement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Academic transcripts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Heart className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Financial Aid</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Merit-based scholarships
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Need-based grants
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Work-study programs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Parish sponsorship
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Payment plans available
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Academic Calendar 2024-2025</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Important dates for the current academic year
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Fall Semester 2024</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Orientation</span>
                  <span className="font-medium text-foreground">August 26-28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Classes Begin</span>
                  <span className="font-medium text-foreground">August 29</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Midterm Exams</span>
                  <span className="font-medium text-foreground">October 14-18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Final Exams</span>
                  <span className="font-medium text-foreground">December 9-13</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Graduation</span>
                  <span className="font-medium text-foreground">December 15</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Spring Semester 2025</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Classes Begin</span>
                  <span className="font-medium text-foreground">January 13</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Spring Break</span>
                  <span className="font-medium text-foreground">March 10-14</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Holy Week</span>
                  <span className="font-medium text-foreground">April 14-20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Final Exams</span>
                  <span className="font-medium text-foreground">May 5-9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Commencement</span>
                  <span className="font-medium text-foreground">May 11</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">Ready to Begin Your Journey?</h3>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Take the first step toward Orthodox theological education and ministry preparation. Our admissions team is
              ready to guide you through the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/contact">Contact Admissions</Link>
              </Button>
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
                  <Link href="/admissions" className="hover:text-accent transition-colors">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-accent transition-colors">
                    Events
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
