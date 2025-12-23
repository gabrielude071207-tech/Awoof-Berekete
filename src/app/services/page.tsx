import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Smile, Home, Clock, Utensils, Truck, Package, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Awoof Berekete | Dining, Delivery & Catering in Lagos',
  description: 'Discover our services: dine-in with cozy ambiance, fast delivery, outdoor catering, and well-packaged takeaway. Fresh, delicious Nigerian meals delivered with exceptional service.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: Smile,
      title: 'Friendly, Warm Reception',
      description: 'Our staff greets you with genuine Nigerian hospitality. From the moment you walk in or call, you are treated like family.',
    },
    {
      icon: Home,
      title: 'Cozy Ambiance',
      description: 'Enjoy your meal in a comfortable, welcoming environment. Perfect for solo dining, family meals, or catching up with friends.',
    },
    {
      icon: Clock,
      title: 'Prompt & Efficient Service',
      description: 'We value your time. Orders are prepared quickly without compromising on quality. Most meals ready in 30 minutes or less.',
    },
    {
      icon: Utensils,
      title: 'Hot, Fresh, Delicious Meals',
      description: 'Every dish is prepared fresh daily using premium ingredients. We cook with love and authentic Nigerian recipes.',
    },
    {
      icon: Users,
      title: 'Outdoor Catering',
      description: 'Planning an event? We cater weddings, birthdays, corporate events, and more. Bring authentic Nigerian flavors to your celebration.',
    },
    {
      icon: Truck,
      title: 'Outdoor Delivery',
      description: 'Cannot come to us? We will come to you! Fast, reliable delivery throughout Lagos. Order via phone or WhatsApp.',
    },
    {
      icon: Package,
      title: 'Well-Packaged Takeaway',
      description: 'Taking your meal to go? We package everything securely in food-safe containers that keep your food hot and fresh.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Experience exceptional dining, delivery, and catering services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Featured Service Callouts */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Catering CTA */}
            <div className="bg-gradient-to-br from-primary to-accent text-white p-8 rounded-xl">
              <h3 className="font-montserrat font-bold text-2xl mb-4">
                Event Catering Services
              </h3>
              <p className="text-white/90 mb-6">
                Make your next event unforgettable with our professional catering. We handle everything from small gatherings to large celebrations with authentic Nigerian cuisine.
              </p>
              <ul className="space-y-2 mb-6 text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Weddings, birthdays, and anniversaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Corporate events and meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Customizable menus to fit your budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Professional setup and service staff available</span>
                </li>
              </ul>
              <Button variant="secondary" size="lg" asChild className="bg-white hover:bg-white/90 text-primary">
                <a href="https://wa.me/2348034567890?text=Hi! I'd like to inquire about catering services" target="_blank" rel="noopener noreferrer">
                  Request Catering Quote
                </a>
              </Button>
            </div>

            {/* Delivery CTA */}
            <div className="bg-muted p-8 rounded-xl border border-border">
              <h3 className="font-montserrat font-bold text-2xl text-foreground mb-4">
                Fast & Reliable Delivery
              </h3>
              <p className="text-muted-foreground mb-6">
                Enjoy Awoof Berekete from the comfort of your home or office. We deliver hot, fresh meals throughout Lagos with care and speed.
              </p>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Delivery within 45 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Coverage across Lagos mainland</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Secure, heat-sealed packaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Order via phone or WhatsApp</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <a href="tel:08034567890">
                    Call to Order
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/2348034567890" target="_blank" rel="noopener noreferrer">
                    Order WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
            Experience Our Service Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether dining in, taking away, or ordering delivery, we're here to serve you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/menu">
                View Our Menu
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
