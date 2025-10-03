import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cross, BookOpen, Users, Heart, History, Award, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cross className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">About Saint Basil Seminary</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              For over a century, Saint Basil Seminary has been a beacon of Orthodox theological education, preparing
              faithful servants to carry forward the sacred traditions of the Eastern Orthodox Church.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <History className="h-8 w-8 text-accent" />
                <h3 className="text-3xl font-bold text-foreground">Our History</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1923 by His Eminence Archbishop Basil of blessed memory, Saint Basil Seminary was
                  established to meet the growing need for Orthodox clergy in North America. What began as a small
                  theological school with twelve students has grown into a respected institution of higher learning.
                </p>
                <p>
                  Throughout the decades, our seminary has remained steadfast in its commitment to Orthodox tradition
                  while adapting to serve the contemporary needs of the Church. We have graduated over 800 clergy who
                  now serve parishes, monasteries, and missions across the globe.
                </p>
                <p>
                  Today, Saint Basil Seminary continues to be guided by the same principles that inspired its founding:
                  unwavering faithfulness to Orthodox doctrine, excellence in theological education, and deep commitment
                  to spiritual formation.
                </p>
              </div>
            </div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <Award className="h-6 w-6 text-accent" />
                  Seminary Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">1923</h4>
                  <p className="text-muted-foreground">Seminary founded by Archbishop Basil</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">1945</h4>
                  <p className="text-muted-foreground">First Master of Divinity program established</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">1967</h4>
                  <p className="text-muted-foreground">Library and chapel construction completed</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">1989</h4>
                  <p className="text-muted-foreground">Doctoral programs in theology launched</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">2023</h4>
                  <p className="text-muted-foreground">Centennial celebration and campus expansion</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission & Values</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Rooted in the apostolic tradition and guided by the Holy Spirit, we prepare faithful servants for ministry
              in the Orthodox Church
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <Cross className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Orthodox Tradition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Faithful preservation and transmission of the apostolic faith as received through the Eastern Orthodox
                  Church's sacred tradition and liturgical life.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Rigorous theological education combining patristic wisdom with contemporary scholarship, preparing
                  students for intellectual and pastoral leadership.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Heart className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Spiritual Formation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Holistic development through prayer, liturgical participation, spiritual direction, and ascetical
                  practices rooted in Orthodox monasticism.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Community Life</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Brotherhood in Christ fostered through shared worship, study, and service, preparing students for
                  pastoral ministry and community leadership.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Globe className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Global Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Commitment to serving Orthodox communities worldwide and engaging in ecumenical dialogue while
                  maintaining Orthodox identity and witness.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Award className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-foreground">Pastoral Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Practical training in pastoral care, liturgical leadership, preaching, and administration to serve the
                  contemporary needs of the Church.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Seminary Leadership</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our faculty and administration bring decades of pastoral, academic, and spiritual experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Cross className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-foreground">His Grace Bishop Michael</CardTitle>
                <CardDescription className="text-muted-foreground">Seminary President</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Doctor of Theology, former monastery abbot, and pastoral leader with over 30 years of experience in
                  Orthodox theological education.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-foreground">Fr. Dr. John Chrysostom</CardTitle>
                <CardDescription className="text-muted-foreground">Academic Dean</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Professor of Patristics and Systematic Theology, published author on Eastern Orthodox doctrine and
                  contemporary theological issues.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-foreground">Fr. Dr. Basil Athanasius</CardTitle>
                <CardDescription className="text-muted-foreground">Dean of Students</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Spiritual director and professor of Pastoral Theology, specializing in Orthodox spirituality and
                  contemporary pastoral challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">Join Our Sacred Tradition</h3>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Discover how Saint Basil Seminary can prepare you for faithful service in the Orthodox Church through our
              comprehensive programs and spiritual formation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Link href="/programs">Explore Programs</Link>
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
