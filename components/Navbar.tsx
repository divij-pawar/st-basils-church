import { Cross } from "lucide-react"
import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="border-b border-border bg-card orthodox-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Cross className="h-8 w-8 text-accent" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Saint Basil Seminary</h1>
              <p className="text-sm text-muted-foreground">Orthodox Theological Education</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="/cursillo" className="text-foreground hover:text-accent transition-colors">
              Cursillo
            </a>
            <a href="/events" className="text-foreground hover:text-accent transition-colors">
              Event Rentals
            </a>
            <a href="/about" className="text-foreground hover:text-accent transition-colors">
              About Us
            </a>
          <Link href="/donate" passHref>
            <Button variant="default" size="sm">
              Donate
            </Button>
          </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
