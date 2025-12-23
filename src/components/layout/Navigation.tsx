'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/rice-packs', label: 'Rice Packs' },
  { href: '/menu', label: 'Full Menu' },
  { href: '/how-to-order', label: 'How to Order' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/images/mockups/projectlogo.png"
              alt="Awoof Berekete Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-xl text-foreground">Awoof</span>
              <span className="font-montserrat font-bold text-xl text-foreground -mt-1">Berekete</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:08034567890" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Us: 0803-456-7890
              </a>
            </Button>
            <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
              <a href="https://wa.me/2348034567890" target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:08034567890" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Us: 0803-456-7890
                  </a>
                </Button>
                <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                  <a href="https://wa.me/2348034567890" target="_blank" rel="noopener noreferrer">
                    Order on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
