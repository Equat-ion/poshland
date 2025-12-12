"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/logo.avif" alt="Poshkraft" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/collections" className="text-sm tracking-wide hover:text-accent transition-colors">
              Collections
            </Link>
            <Link href="/craft" className="text-sm tracking-wide hover:text-accent transition-colors">
              Our Craft
            </Link>
            <Link href="/heritage" className="text-sm tracking-wide hover:text-accent transition-colors">
              Heritage
            </Link>
            <Link href="/journal" className="text-sm tracking-wide hover:text-accent transition-colors">
              Journal
            </Link>
            <Link href="/contact" className="text-sm tracking-wide hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-6">
              <Link href="/collections" className="text-lg tracking-wide hover:text-accent transition-colors">
                Collections
              </Link>
              <Link href="/craft" className="text-lg tracking-wide hover:text-accent transition-colors">
                Our Craft
              </Link>
              <Link href="/heritage" className="text-lg tracking-wide hover:text-accent transition-colors">
                Heritage
              </Link>
              <Link href="/journal" className="text-lg tracking-wide hover:text-accent transition-colors">
                Journal
              </Link>
              <Link href="/contact" className="text-lg tracking-wide hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
