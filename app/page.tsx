import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cross, BookOpen, Users, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card orthodox-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Cross className="h-8 w-8 text-accent" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Saint Basil Seminary</h1>
                <p className="text-sm text-muted-foreground">Orthodox Theological Education</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#programs" className="text-foreground hover:text-accent transition-colors">
                Programs
              </a>
              <a href="#events" className="text-foreground hover:text-accent transition-colors">
                Events
              </a>
              <a href="#news" className="text-foreground hover:text-accent transition-colors">
                News
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </a>
              <Button variant="default" size="sm">
                Donate
              </Button>
            </nav>
          </div>
        </div>
      </header>

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
              <Button size="lg" className="text-lg px-8 shadow-lg">
                Learn About Our Programs
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 shadow-lg"
              >
                Visit Our Campus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 stained-glass-mission">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Fostering spiritual depth, intellectual excellence, and pastoral care in the Orthodox tradition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-border">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Theological Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Comprehensive curriculum rooted in Orthodox theology, patristics, and liturgical studies
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <Cross className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Spiritual Formation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Daily liturgical life, prayer, and spiritual direction in the Orthodox tradition
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Community Life</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Brotherhood of learning, worship, and service in preparation for ministry
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-foreground">Pastoral Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Training in pastoral ministry, counseling, and serving Orthodox communities
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-card orthodox-border">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">Join Our Sacred Mission</h3>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Whether you're called to ordained ministry or seeking to deepen your Orthodox faith, Saint Basil Seminary
              offers a transformative educational experience rooted in centuries of tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Schedule a Visit
              </Button>
            </div>
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
                  <a href="#about" className="hover:text-accent transition-colors drop-shadow-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-accent transition-colors drop-shadow-sm">
                    Academic Programs
                  </a>
                </li>
                <li>
                  <a href="#admissions" className="hover:text-accent transition-colors drop-shadow-sm">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-accent transition-colors drop-shadow-sm">
                    Events
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
