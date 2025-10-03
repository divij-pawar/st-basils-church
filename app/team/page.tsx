import Navbar from "@/components/Navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cross, Briefcase, GraduationCap, Phone, Mail } from "lucide-react"
import Link from "next/link"

// Define a type for team members to ensure data consistency
interface TeamMember {
  name: string
  title: string
  bio: string
  contact: {
    email?: string
    phone?: string
  }
  icon: "briefcase" | "graduation-cap" // Use a string literal union for icon types
}

// Dummy data for team members
const teamMembers: TeamMember[] = [
  {
    name: "Rev. Dr. David Miller",
    title: "President & Dean of the Seminary",
    bio: "Dr. Miller is a respected theologian and scholar, dedicated to guiding the seminary's mission of spiritual and academic excellence.",
    contact: {
      email: "dmiller@saintbasilseminary.edu",
      phone: "(555) 123-4567",
    },
    icon: "briefcase",
  },
  {
    name: "Dr. Elena Petrova",
    title: "Head of Academic Programs",
    bio: "With a Ph.D. in Patristics, Dr. Petrova oversees the curriculum, ensuring it remains deeply rooted in the traditions of the Church Fathers.",
    contact: {
      email: "epetrova@saintbasilseminary.edu",
    },
    icon: "graduation-cap",
  },
  {
    name: "Fr. Alex White",
    title: "Director of Spiritual Formation",
    bio: "Fr. White provides pastoral care and spiritual direction, fostering a vibrant prayer life for all students and faculty.",
    contact: {
      phone: "(555) 987-6543",
    },
    icon: "briefcase",
  },
  {
    name: "Deacon Samuel Green",
    title: "Registrar & Admissions Director",
    bio: "Deacon Green manages all aspects of student admissions and academic records, guiding prospective students through their journey.",
    contact: {
      email: "sgreen@saintbasilseminary.edu",
      phone: "(555) 456-7890",
    },
    icon: "graduation-cap",
  },
]

// Mapping string icons to Lucide components
const iconMap = {
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
}

export default function TeamListPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Our dedicated team of clergy, faculty, and staff are committed to the spiritual and academic formation of
            our students.
          </p>
        </div>
      </section>

      ---

      {/* Team Members Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = iconMap[member.icon]
              return (
                <Card key={index} className="text-center p-6 border-border">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-accent mx-auto mb-4" />
                    <CardTitle className="text-foreground">{member.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{member.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 text-pretty mb-4">{member.bio}</p>
                    {member.contact.email && (
                      <Link
                        href={`mailto:${member.contact.email}`}
                        className="flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors mb-2"
                      >
                        <Mail className="h-4 w-4" />
                        <span>{member.contact.email}</span>
                      </Link>
                    )}
                    {member.contact.phone && (
                      <Link
                        href={`tel:${member.contact.phone}`}
                        className="flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{member.contact.phone}</span>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      ---

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