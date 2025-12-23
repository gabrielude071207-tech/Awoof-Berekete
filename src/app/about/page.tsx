import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Award, Heart, Users, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Awoof Berekete | Authentic Nigerian Restaurant in Lagos',
  description: 'Learn about Awoof Berekete, a five-star quick-service restaurant serving fresh, tasty, and nutritious Nigerian meals at affordable prices in Lagos.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              About Awoof Berekete
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Serving Lagos with love, flavor, and tradition since 2003
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/generated/hero-nigerian-plate.png"
                alt="Awoof Berekete restaurant"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  <strong className="text-foreground">Awoof Berekete</strong> is a five-star quick-service restaurant dedicated to serving fresh, tasty, and nutritious meals every day at affordable prices. Located at 181 Akowonjo Road in Lagos, we've become a beloved fixture in the community.
                </p>
                <p>
                  We combine quality, taste, and pocket-friendliness, offering a wide variety of meals tailored for every taste. From our signature jollof rice and authentic Nigerian soups to continental dishes, we bring you the best of both worlds.
                </p>
                <p>
                  Our passion is simple: to make sure every customer leaves satisfied, well-fed, and eager to return. Whether you're dining in, taking away, or ordering delivery, we guarantee the same exceptional quality and warm service.
                </p>
              </div>

              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 mt-4">
                <Link href="/menu">
                  Explore Our Menu
                </Link>
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Value 1 */}
            <div className="text-center bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                Quality First
              </h3>
              <p className="text-muted-foreground">
                We use only premium, locally-sourced ingredients to create meals that exceed expectations
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                Made with Love
              </h3>
              <p className="text-muted-foreground">
                Every dish is prepared with care, following authentic recipes passed down through generations
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                Community Focused
              </h3>
              <p className="text-muted-foreground">
                We're proud to serve our Lagos community and be a part of your daily life
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                Always Improving
              </h3>
              <p className="text-muted-foreground">
                We continuously refine our menu and service to give you the best experience
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-montserrat font-bold text-5xl mb-2">20+</div>
                <p className="text-white/90 text-lg">Years of Experience</p>
              </div>
              <div>
                <div className="font-montserrat font-bold text-5xl mb-2">10,000+</div>
                <p className="text-white/90 text-lg">Happy Customers</p>
              </div>
              <div>
                <div className="font-montserrat font-bold text-5xl mb-2">50+</div>
                <p className="text-white/90 text-lg">Menu Items</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
            Ready to Experience Our Flavors?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their daily meals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/menu">
                Browse Our Menu
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/2348034567890" target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
