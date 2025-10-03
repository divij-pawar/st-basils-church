import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cross, Calendar, Clock, MapPin, Users, BookOpen, Heart } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
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
              <Link href="/events" className="text-accent font-medium">
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
            <Calendar className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Events & Calendar</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Join us for liturgical celebrations, theological lectures, and community gatherings that enrich our
              seminary life and deepen our Orthodox faith.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Mark your calendar for these special occasions in our seminary community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Event */}
            <Card className="border-border lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Featured Event
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">December 15, 2024</span>
                  </div>
                </div>
                <CardTitle className="text-foreground text-2xl">
                  Annual Theological Symposium: "The Fathers and Modern Challenges"
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  A three-day symposium featuring renowned Orthodox theologians discussing how patristic wisdom
                  addresses contemporary issues facing the Church.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>December 15-17, 9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>Seminary Chapel & Conference Hall</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-accent" />
                    <span>Open to Public</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="mr-4">Register Now</Button>
                  <Button variant="outline" className="bg-transparent">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Regular Events */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Liturgical
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">December 8, 2024</span>
                  </div>
                </div>
                <CardTitle className="text-foreground">Feast of the Immaculate Conception</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Divine Liturgy followed by festive meal and theological reflection on the Theotokos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Seminary Chapel</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Add to Calendar
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-accent text-accent">
                    Lecture
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">December 12, 2024</span>
                  </div>
                </div>
                <CardTitle className="text-foreground">Guest Lecture: Metropolitan Kallistos</CardTitle>
                <CardDescription className="text-muted-foreground">
                  "Prayer and Contemplation in the Orthodox Tradition" - An evening with His Eminence Metropolitan
                  Kallistos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>7:00 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Seminary Auditorium</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  RSVP Required
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-secondary text-secondary">
                    Community
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">December 20, 2024</span>
                  </div>
                </div>
                <CardTitle className="text-foreground">Christmas Carol Service</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Traditional Orthodox Christmas carols and readings, followed by fellowship and refreshments.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>6:00 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Seminary Chapel</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Open to All
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-accent text-accent">
                    Academic
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">January 15, 2025</span>
                  </div>
                </div>
                <CardTitle className="text-foreground">Spring Semester Orientation</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Welcome new students and returning students for the spring semester with liturgy and academic
                  briefings.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Seminary Campus</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Students Only
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regular Schedule */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Regular Schedule</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our weekly rhythm of prayer, study, and community life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardHeader>
                <Cross className="h-8 w-8 text-accent mb-4" />
                <CardTitle className="text-foreground">Daily Liturgical Life</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm">
                <div className="flex justify-between">
                  <span>Morning Prayer</span>
                  <span className="font-medium">7:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Divine Liturgy (Wed, Fri, Sun)</span>
                  <span className="font-medium">8:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Vespers</span>
                  <span className="font-medium">6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Compline</span>
                  <span className="font-medium">9:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-accent mb-4" />
                <CardTitle className="text-foreground">Weekly Lectures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm">
                <div className="flex justify-between">
                  <span>Patristics Seminar</span>
                  <span className="font-medium">Tuesdays 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Biblical Studies</span>
                  <span className="font-medium">Thursdays 10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Pastoral Theology</span>
                  <span className="font-medium">Fridays 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Guest Lectures</span>
                  <span className="font-medium">Monthly</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Heart className="h-8 w-8 text-accent mb-4" />
                <CardTitle className="text-foreground">Community Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm">
                <div className="flex justify-between">
                  <span>Community Dinner</span>
                  <span className="font-medium">Sundays 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Study Groups</span>
                  <span className="font-medium">Wednesdays 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Spiritual Direction</span>
                  <span className="font-medium">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Recreation Time</span>
                  <span className="font-medium">Saturdays 3:00 PM</span>
                </div>
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
