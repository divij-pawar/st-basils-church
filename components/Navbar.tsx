"use client"

import { useState } from "react"
import { Cross, Menu } from "lucide-react"
import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-card/90 backdrop-blur-sm shadow-sm">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/cursillo" className="text-foreground hover:text-accent transition-colors">
              Cursillo
            </Link>
            <Link href="/events" className="text-foreground hover:text-accent transition-colors">
              Event Rentals
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/donate" passHref>
              <Button variant="default" size="sm">
                Donate
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-foreground" /> 
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-card/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 md:hidden transition-transform duration-300 ease-in-out">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Cross className="h-6 w-6 text-foreground" />
          </Button>
          <nav className="flex flex-col items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/cursillo" className="text-2xl font-bold text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Cursillo
            </Link>
            <Link href="/events" className="text-2xl font-bold text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Event Rentals
            </Link>
            <Link href="/about" className="text-2xl font-bold text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/donate" passHref>
              <Button variant="default" size="lg" className="mt-8" onClick={() => setIsMobileMenuOpen(false)}>
                Donate
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}