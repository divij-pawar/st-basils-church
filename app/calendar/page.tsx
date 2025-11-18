"use client"

import { useState } from "react"
// Use the Navbar component from the target project
import Navbar from "@/components/Navbar"
// The target project uses different imports for its UI components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Cross, BookOpen, Heart } from "lucide-react"
// The target project has a different footer
import Link from "next/link"

// Sample events data
const events = [
  {
    id: 1,
    title: "Divine Liturgy",
    date: "2024-03-03",
    time: "9:00 AM",
    type: "liturgy",
    location: "Seminary Chapel",
    description: "Sunday Divine Liturgy celebrated by Archbishop Michael",
    recurring: "Weekly on Sundays",
  },
  {
    id: 2,
    title: "Patristic Theology Lecture",
    date: "2024-03-05",
    time: "2:00 PM",
    type: "academic",
    location: "Lecture Hall A",
    description: "Dr. Elena Papadopoulos presents on the Cappadocian Fathers",
    capacity: "50 attendees",
  },
  {
    id: 3,
    title: "Men's Cursillo Weekend",
    date: "2024-03-15",
    time: "6:00 PM",
    type: "cursillo",
    location: "Seminary Retreat Center",
    description: "Three-day spiritual retreat weekend for men",
    endDate: "2024-03-17",
    endTime: "3:00 PM",
  },
  {
    id: 4,
    title: "Community Prayer Service",
    date: "2024-03-20",
    time: "7:00 PM",
    type: "prayer",
    location: "Seminary Chapel",
    description: "Evening prayer service open to the community",
    recurring: "Monthly",
  },
  {
    id: 5,
    title: "Orthodox Studies Conference",
    date: "2024-04-12",
    time: "9:00 AM",
    type: "conference",
    location: "Main Auditorium",
    description: "Annual conference featuring renowned Orthodox scholars",
    endDate: "2024-04-14",
    endTime: "5:00 PM",
    capacity: "200 attendees",
  },
  {
    id: 6,
    title: "Women's Cursillo Weekend",
    date: "2024-04-12",
    time: "6:00 PM",
    type: "cursillo",
    location: "Seminary Retreat Center",
    description: "Three-day spiritual retreat weekend for women",
    endDate: "2024-04-14",
    endTime: "3:00 PM",
  },
  {
    id: 7,
    title: "Vespers Service",
    date: "2024-03-09",
    time: "6:00 PM",
    type: "liturgy",
    location: "Seminary Chapel",
    description: "Saturday evening Vespers service",
    recurring: "Weekly on Saturdays",
  },
  {
    id: 8,
    title: "Seminary Open House",
    date: "2024-04-20",
    time: "10:00 AM",
    type: "community",
    location: "Seminary Campus",
    description: "Tour the seminary, meet faculty, and learn about our programs",
    endTime: "4:00 PM",
  },
]

const eventTypes = [
  { value: "all", label: "All Events", icon: Calendar, color: "bg-primary" },
  { value: "liturgy", label: "Liturgical Services", icon: Cross, color: "bg-accent" },
  { value: "academic", label: "Academic Events", icon: BookOpen, color: "bg-secondary" },
  { value: "cursillo", label: "Cursillo Programs", icon: Heart, color: "bg-primary" },
  { value: "prayer", label: "Prayer Services", icon: Cross, color: "bg-accent" },
  { value: "conference", label: "Conferences", icon: Users, color: "bg-secondary" },
  { value: "community", label: "Community Events", icon: Users, color: "bg-primary" },
]

export default function CalendarPage() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedMonth, setSelectedMonth] = useState("2024-03")

  const filteredEvents = events.filter((event) => {
    const matchesType = selectedType === "all" || event.type === selectedType
    const matchesMonth = event.date.startsWith(selectedMonth)
    return matchesType && matchesMonth
  })

  const getEventTypeInfo = (type: string) => {
    return eventTypes.find((t) => t.value === type) || eventTypes[0]
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Replaced Navigation with Navbar from the target project */}
      <Navbar />
      <div className="pt-10"></div>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-card to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calendar className="h-12 w-12 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Calendar of Events
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us for liturgical services, academic lectures, spiritual retreats, and community gatherings.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-card border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Event Type Filter */}
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <Button
                      key={type.value}
                      variant={selectedType === type.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type.value)}
                      className={
                        selectedType === type.value
                          ? `${type.color} text-white hover:opacity-90`
                          : "border-border hover:bg-accent/10"
                      }
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {type.label}
                    </Button>
                  )
                })}
              </div>

              {/* Month Filter */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedMonth("2024-03")}
                  className={selectedMonth === "2024-03" ? "bg-primary text-primary-foreground" : ""}
                >
                  March 2024
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedMonth("2024-04")}
                  className={selectedMonth === "2024-04" ? "bg-primary text-primary-foreground" : ""}
                >
                  April 2024
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Events Found</h3>
                <p className="text-muted-foreground">Try selecting a different filter or month.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredEvents.map((event) => {
                  const typeInfo = getEventTypeInfo(event.type)
                  const TypeIcon = typeInfo.icon
                  return (
                    <Card key={event.id} className="p-6 border-border/50">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Event Icon and Type */}
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 ${typeInfo.color}/20 rounded-lg flex items-center justify-center`}>
                            <TypeIcon className={`h-8 w-8 text-${typeInfo.color.split("-")[1]}`} />
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="flex-grow">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="flex-grow">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                                <Badge
                                  variant="outline"
                                  className={`border-${typeInfo.color.split("-")[1]} text-${typeInfo.color.split("-")[1]}`}
                                >
                                  {typeInfo.label}
                                </Badge>
                              </div>

                              <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>

                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-2">
                                  <Calendar className="h-4 w-4 text-accent" />
                                  <span>{formatDate(event.date)}</span>
                                  {event.endDate && <span> - {formatDate(event.endDate)}</span>}
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Clock className="h-4 w-4 text-accent" />
                                  <span>
                                    {event.time}
                                    {event.endTime && ` - ${event.endTime}`}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="h-4 w-4 text-accent" />
                                  <span>{event.location}</span>
                                </div>
                                {event.capacity && (
                                  <div className="flex items-center space-x-2">
                                    <Users className="h-4 w-4 text-accent" />
                                    <span>{event.capacity}</span>
                                  </div>
                                )}
                              </div>

                              {event.recurring && (
                                <div className="mt-2">
                                  <Badge variant="secondary" className="text-xs">
                                    {event.recurring}
                                  </Badge>
                                </div>
                              )}
                            </div>

                            {/* Action Button */}
                            <div className="flex-shrink-0">
                              {event.type === "cursillo" ? (
                                <Button asChild className="bg-primary hover:bg-primary/90">
                                  <Link href="/cursillo">Register</Link>
                                </Button>
                              ) : event.capacity ? (
                                <Button asChild variant="outline">
                                  <Link href="/contact">RSVP</Link>
                                </Button>
                              ) : (
                                <Button asChild variant="outline">
                                  <Link href="/contact">More Info</Link>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Subscribe to our newsletter to receive updates about upcoming events, special services, and community
              activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/contact">Subscribe to Newsletter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Events Team</Link>
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