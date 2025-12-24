import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Order - Awoof Berekete | Easy Ordering Process',
  description: 'Learn how to order from Awoof Berekete: browse menu, call or WhatsApp, choose delivery or pickup, and enjoy fresh Nigerian meals in minutes.',
};

const orderSteps = [
  {
    number: '01',
    title: 'Browse Our Menu',
    description: 'Explore our full menu and choose your favorite Nigerian dishes. From jollof rice to soups, we have something for everyone.',
    icon: '📋',
  },
  {
    number: '02',
    title: 'Place Your Order',
    description: 'Call us at 0803-456-7890 or send a WhatsApp message with your order. Our friendly staff will confirm your selections.',
    icon: '📞',
  },
  {
    number: '03',
    title: 'Choose Delivery or Pickup',
    description: 'Select delivery to your location or pickup from our restaurant at 181 Akowonjo Road, Lagos. We will give you an estimated time.',
    icon: '🚗',
  },
  {
    number: '04',
    title: 'Enjoy Your Meal!',
    description: 'Receive your hot, fresh meal and enjoy authentic Nigerian flavors. Save our number for next time!',
    icon: '🍽️',
  },
];

const orderingOptions = [
  {
    title: 'Call to Order',
    description: 'Speak directly with our team. Quick, easy, and personal service.',
    icon: Phone,
    action: 'Call Now: 0803-456-7890',
    href: 'tel:08034567890',
    color: 'bg-primary',
  },
  {
    title: 'WhatsApp Order',
    description: 'Send us a message on WhatsApp. Convenient and fast response.',
    icon: MessageCircle,
    action: 'Chat on WhatsApp',
    href: 'https://wa.me/2348034567890',
    color: 'bg-[#25D366]',
  },
  {
    title: 'Visit Us',
    description: 'Come to our restaurant for dine-in or takeaway.',
    icon: MapPin,
    action: '181 Akowonjo Road, Lagos',
    href: '/contact',
    color: 'bg-accent',
  },
];

export default function HowToOrderPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              How to Order Your Meal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              It's easy to enjoy Awoof Berekete's delicious meals. Follow these simple steps!
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {orderSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-montserrat font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4 ml-8">{step.icon}</div>

                  <h3 className="font-montserrat font-bold text-2xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ordering Options Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
              Choose Your Ordering Method
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {orderingOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-border"
                  >
                    <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {option.description}
                    </p>
                    <Button asChild className="w-full" style={{color: 'black'}}>
                      <a
                        href={option.href}
                        target={option.href.startsWith('http') ? '_blank' : undefined}
                        rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {option.action}
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-xl border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-montserrat font-bold text-2xl text-foreground mb-2">
                  Operating Hours
                </h2>
                <p className="text-muted-foreground mb-4">
                  We're here to serve you fresh meals throughout the week
                </p>
              </div>
            </div>

            <div className="space-y-3 ml-16">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="font-semibold text-foreground">Monday - Friday</span>
                <span className="text-muted-foreground">8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="font-semibold text-foreground">Saturday</span>
                <span className="text-muted-foreground">9:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="font-semibold text-foreground">Sunday</span>
                <span className="text-muted-foreground">10:00 AM - 9:00 PM</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Last orders are accepted 30 minutes before closing time. Delivery times may vary during peak hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  Do you offer delivery?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We deliver throughout Lagos mainland. Delivery usually takes 30-45 minutes depending on your location. Delivery fees may apply based on distance.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-muted-foreground">
                  We accept cash on delivery and bank transfers. For large orders or catering, we may require advance payment.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  Can I customize my order?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! Let us know your preferences when ordering. We can adjust spice levels, add extra protein, or create custom combinations.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  Do you cater for events?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide catering services for all types of events. Contact us at least 48 hours in advance to discuss your menu and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait! Call us now or send a WhatsApp message to start enjoying delicious Nigerian meals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white hover:bg-white/90 text-primary font-semibold">
              <Link href="/menu">
                Browse Menu First
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white hover:bg-white/10" style={{color: 'black'}}>
              <a href="https://wa.me/2348034567890" target="_blank" rel="noopener noreferrer">
                Order Now on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
