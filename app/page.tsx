import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cross, BookOpen, Users, Heart, Calendar } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background" id="home">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 stained-glass-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Cross className="h-16 w-16 text-accent mx-auto mb-6 drop-shadow-lg" />
            <h2 className="text-5xl font-bold text-white mb-6 text-balance drop-shadow-lg">
              Rooted in Sacred Tradition, Preparing Servants of Christ
            </h2>
            <p className="text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow-md">
              Saint Basil Seminary is committed to theological education and spiritual formation in the sacred
              traditions of the Eastern Orthodox Church, preparing faithful servants for ministry in the modern world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 shadow-lg" asChild>
                <Link href="/cursillo">Learn About Our Programs</Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 shadow-lg"
                asChild
              >
                <Link href="/events">Visit Our Campus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs - Updated to new content */}
      <section id="academic-programs" className="py-16 stained-glass-mission">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cursillo Card */}
            <Link href="/cursillo" passHref>
              <Card className="text-center border-border hover:bg-accent/10 transition-colors cursor-pointer">
                <CardHeader>
                  <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-foreground">Cursillo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    A three-day spiritual retreat that deepens faith, builds community, and strengthens your relationship
                    with Christ.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            {/* Events Card */}
            <Link href="/events" passHref>
              <Card className="text-center border-border hover:bg-accent/10 transition-colors cursor-pointer">
                <CardHeader>
                  <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-foreground">Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Join us for liturgical celebrations, theological lectures, and community gatherings.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            {/* Prayer Line Card */}
            <Link href="/prayer" passHref>
              <Card className="text-center border-border hover:bg-accent/10 transition-colors cursor-pointer">
                <CardHeader>
                  <Cross className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-foreground">Prayer Line</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Submit prayer requests for yourself, loved ones, or specific needs to be lifted up in prayer by our
                    community.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            {/* Team List Card */}
            <Link href="/team" passHref>
              <Card className="text-center border-border hover:bg-accent/10 transition-colors cursor-pointer">
                <CardHeader>
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-foreground">Team List</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Meet the dedicated team of clergy, faculty, and staff who guide and support our seminary community.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="stained-glass-footer text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Cross className="h-6 w-6 text-accent drop-shadow-md" />
                <h4 className="text-lg font-bold drop-shadow-md">Saint Basil Seminary</h4>
              </div>
              <p className="text-white/90 text-pretty drop-shadow-sm">
                Preparing faithful servants for Orthodox ministry through theological education and spiritual formation.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4 drop-shadow-md">Quick Links</h5>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="/about-us" className="hover:text-accent transition-colors drop-shadow-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/cursillo" className="hover:text-accent transition-colors drop-shadow-sm">
                    Cursillo
                  </a>
                </li>
                <li>
                  <a href="/event-rentals" className="hover:text-accent transition-colors drop-shadow-sm">
                    Events Rentals
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 drop-shadow-md">Contact</h5>
              <div className="text-white/80 space-y-2">
                <p className="drop-shadow-sm">123 Seminary Lane</p>
                <p className="drop-shadow-sm">Orthodox City, OC 12345</p>
                <p className="drop-shadow-sm">Phone: (555) 123-4567</p>
                <p className="drop-shadow-sm">Email: info@saintbasilseminary.edu</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p className="drop-shadow-sm">&copy; 2024 Saint Basil Seminary. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}