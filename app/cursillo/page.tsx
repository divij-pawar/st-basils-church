import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Heart, FileText, UserPlus, RotateCcw, Cross } from "lucide-react"
import { CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import Navbar from "@/components/Navbar"

export default function CursilloPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Replaced Navigation with Navbar from the target project */}
      <Navbar />
      <div className="pt-10"></div>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-card to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="h-12 w-12 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Cursillo Program
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A spiritual retreat weekend experience that deepens faith, builds community, and strengthens your
              relationship with Christ.
            </p>
          </div>
        </section>

        {/* What is Cursillo */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">What is Cursillo?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cursillo, meaning "little course" in Spanish, is a three-day spiritual retreat that offers
                  participants an intensive experience of Christian community, prayer, and spiritual growth within the
                  Orthodox tradition.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Through talks, small group discussions, liturgical worship, and fellowship, participants discover new
                  depths of faith and form lasting bonds with fellow believers. The weekend concludes with a commitment
                  to continue growing in faith through ongoing community support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    3-Day Retreat
                  </Badge>
                  <Badge variant="outline" className="border-accent text-accent">
                    Spiritual Growth
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    Community Building
                  </Badge>
                </div>
              </div>
              <Card className="p-8 border-border/50">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-semibold text-foreground">Weekend Schedule</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Friday Evening:</strong> Arrival, welcome, and opening liturgy
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Saturday:</strong> Talks, small groups, prayer, and fellowship
                      meals
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Sunday:</strong> Divine Liturgy, final talks, and sending
                      forth
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Weekends */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Upcoming Cursillo Weekends
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Men's Weekends */}
              <Card className="p-6 border-border/50">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl font-semibold text-foreground">Men's Weekends</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">Spring Retreat</p>
                      <p className="text-sm text-muted-foreground">March 15-17, 2024</p>
                    </div>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">Summer Retreat</p>
                      <p className="text-sm text-muted-foreground">June 21-23, 2024</p>
                    </div>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">Fall Retreat</p>
                      <p className="text-sm text-muted-foreground">September 13-15, 2024</p>
                    </div>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Women's Weekends */}
              <Card className="p-6 border-border/50">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-8 w-8 text-accent" />
                    <CardTitle className="text-2xl font-semibold text-foreground">Women's Weekends</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">Spring Retreat</p>
                      <p className="text-sm text-muted-foreground">April 12-14, 2024</p>
                    </div>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">Summer Retreat</p>
                      <p className="text-sm text-muted-foreground">July 19-21, 2024</p>
                    </div>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">Fall Retreat</p>
                      <p className="text-sm text-muted-foreground">October 11-13, 2024</p>
                    </div>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Forms */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Application Forms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <FileText className="h-12 w-12 text-primary mx-auto" />
                  <CardTitle className="text-xl font-semibold text-foreground">Participant Application</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="mb-6 leading-relaxed">
                    Apply to attend your first Cursillo weekend retreat experience.
                  </CardDescription>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/cursillo/apply">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <UserPlus className="h-12 w-12 text-secondary mx-auto" />
                  <CardTitle className="text-xl font-semibold text-foreground">Sponsor Application</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="mb-6 leading-relaxed">
                    Become a sponsor and help guide someone through their Cursillo journey.
                  </CardDescription>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                  >
                    <Link href="/cursillo/sponsor">Become a Sponsor</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <RotateCcw className="h-12 w-12 text-accent mx-auto" />
                  <CardTitle className="text-xl font-semibold text-foreground">Renewal Application</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="mb-6 leading-relaxed">
                    Return for a renewal weekend to deepen your Cursillo experience.
                  </CardDescription>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent/10 bg-transparent"
                  >
                    <Link href="/cursillo/renewal">Apply for Renewal</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Inspiring Talks</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hear from experienced Orthodox Christians about faith, grace, and living a Christ-centered life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-secondary rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Small Group Sharing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Connect with others in intimate groups where you can share your faith journey and listen to
                      others.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Liturgical Worship</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Participate in beautiful Orthodox liturgies, including the Divine Liturgy on Sunday morning.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Fellowship Meals</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Enjoy delicious meals together, building friendships and community in a relaxed atmosphere.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-secondary rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Personal Reflection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Take time for quiet prayer and reflection, allowing God to speak to your heart in the silence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Ongoing Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Connect with a community that continues beyond the weekend through regular gatherings and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Questions About Cursillo?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our Cursillo team is here to help answer any questions you may have about the program or application
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:cursillo@saintbasilseminary.org">Email Cursillo Team</Link>
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