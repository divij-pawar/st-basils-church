import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cross, Calendar, User, BookOpen, Award, Globe, Heart } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-10"></div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Seminary News & Updates</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Stay informed about theological writings, faculty achievements, student accomplishments, and important
              developments in our seminary community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Featured Article
                  </Badge>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>December 1, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Fr. Dr. John Chrysostom</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-foreground text-3xl mb-4">
                  The Role of Patristic Wisdom in Contemporary Theological Education
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                  In an age of rapid technological advancement and shifting cultural paradigms, the question arises: how
                  do we maintain the integrity of Orthodox theological education while remaining relevant to
                  contemporary needs? This reflection explores how the wisdom of the Church Fathers continues to
                  illuminate our path forward in theological formation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Church Fathers, those luminous figures who shaped Orthodox theology in the first eight centuries,
                  offer us not merely historical curiosities but living wisdom that speaks directly to the challenges
                  facing theological education today. Their approach to learning—integrating rigorous intellectual
                  inquiry with deep spiritual practice—provides a model that transcends temporal boundaries...
                </p>
                <Button>Read Full Article</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Recent News</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Latest updates from our seminary community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Faculty News
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>November 28, 2024</span>
                  </div>
                </div>
                <CardTitle className="text-foreground">
                  Fr. Dr. Basil Athanasius Receives Prestigious Theology Award
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Our Dean of Students has been honored with the International Orthodox Theology Prize for his
                  groundbreaking work on contemporary pastoral challenges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Award className="h-4 w-4 text-accent" />
                  <span>International Orthodox Theology Prize 2024</span>
                </div>
                <Button variant="outline" className="bg-transparent">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-accent text-accent">
                    Student Achievement
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>November 25, 2024</span>
                  </div>
                </div>
                <CardTitle className="text-foreground">Seminary Students Win National Theology Competition</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Three of our M.Div. students placed first in the annual North American Orthodox Theology Student
                  Competition with their paper on liturgical theology.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <User className="h-4 w-4 text-accent" />
                  <span>Michael Petrov, Anna Dimitriou, James Kostas</span>
                </div>
                <Button variant="outline" className="bg-transparent">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-secondary text-secondary">
                    Campus News
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>November 20, 2024</span>
                  </div>
                </div>
                <CardTitle className="text-foreground">
                  New Library Wing Opens with Rare Manuscript Collection
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  The newly constructed library wing houses over 500 rare Orthodox manuscripts and patristic texts,
                  making it one of the largest collections in North America.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <BookOpen className="h-4 w-4 text-accent" />
                  <span>500+ Rare Manuscripts & Texts</span>
                </div>
                <Button variant="outline" className="bg-transparent">
                  Virtual Tour
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-accent text-accent">
                    Global Outreach
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>November 15, 2024</span>
                  </div>
                </div>
                <CardTitle className="text-foreground">
                  Seminary Partners with Orthodox Universities Worldwide
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  New partnerships established with theological institutions in Greece, Romania, and Serbia to enhance
                  student exchange and collaborative research programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Globe className="h-4 w-4 text-accent" />
                  <span>International Partnership Program</span>
                </div>
                <Button variant="outline" className="bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Theological Reflections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Theological Reflections</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Insights and writings from our faculty and students on Orthodox theology and contemporary issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardHeader>
                <Cross className="h-8 w-8 text-accent mb-4" />
                <CardTitle className="text-foreground">The Liturgy as Theological Education</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Exploring how participation in the Divine Liturgy serves as the foundation of all theological learning
                  in the Orthodox tradition.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <User className="h-4 w-4" />
                  <span>Fr. Dr. Michael Stavros</span>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Read Article
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Heart className="h-8 w-8 text-accent mb-4" />
                <CardTitle className="text-foreground">Pastoral Care in the Digital Age</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Examining how Orthodox pastoral principles adapt to serve communities in an increasingly connected yet
                  isolated world.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <User className="h-4 w-4" />
                  <span>Fr. Dr. Basil Athanasius</span>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Read Article
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-accent mb-4" />
                <CardTitle className="text-foreground">Patristic Hermeneutics Today</CardTitle>
                <CardDescription className="text-muted-foreground">
                  How the interpretive methods of the Church Fathers continue to illuminate Scripture for contemporary
                  believers and scholars.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <User className="h-4 w-4" />
                  <span>Dr. Maria Paleologou</span>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">Stay Connected</h3>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Subscribe to our newsletter to receive the latest news, theological reflections, and updates from Saint
              Basil Seminary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button>Subscribe</Button>
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
