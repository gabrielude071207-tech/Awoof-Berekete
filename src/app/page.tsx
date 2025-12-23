import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import MealCard from '@/components/home/MealCard';
import { ChefHat, Clock, Star, Leaf } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/90 via-primary to-accent overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="text-white space-y-6">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Authentic Nigerian Flavors,
                <br />
                Delivered Fresh to Your Door
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl">
                Experience the taste of Lagos with our signature rice packs, soups, and continental dishes. Ready in 30 minutes!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" variant="secondary" asChild className="bg-white hover:bg-white/90 text-primary font-semibold">
                  <Link href="/menu">
                    View Our Menu
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                  <a href="https://wa.me/2348034567890" target="_blank" rel="noopener noreferrer">
                    Order Now via WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/generated/hero-nigerian-plate.png"
                alt="Delicious Nigerian plate with jollof rice, chicken, and plantains"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rice Packs Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Featured Rice Packs
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Perfectly cooked, generously portioned, and bursting with authentic Nigerian flavors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <MealCard
              title="Coconut Rice Special"
              description="Fragrant coconut-infused rice served with crispy fish, plantains, and spicy pepper sauce"
              price="₦2,500"
              imageSrc="/images/generated/coconut-rice-special.png"
              imageAlt="Coconut Rice Special with fish and plantains"
            />
            <MealCard
              title="Native Jollof Combo"
              description="Our famous party jollof with tender beef, eggs, and sides of fried plantains"
              price="₦3,200"
              imageSrc="/images/generated/native-jollof-combo.png"
              imageAlt="Native Jollof Combo with beef and eggs"
            />
            <MealCard
              title="Classic White Rice & Stew"
              description="Perfectly cooked white rice with rich tomato stew, chicken, beef, and moi moi"
              price="₦2,800"
              imageSrc="/images/generated/white-rice-stew.png"
              imageAlt="Classic White Rice with Stew"
            />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/rice-packs">
                View All Rice Packs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose Awoof Berekete?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're committed to serving you the best Nigerian meals with exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <ChefHat className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                20+ Years Experience
              </h3>
              <p className="text-muted-foreground">
                Authentic recipes passed down through generations of Nigerian cooking excellence
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Clock className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                Fast Delivery
              </h3>
              <p className="text-muted-foreground">
                Ready in 30 minutes or less. Hot, fresh meals delivered right to your door
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Star className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                5-Star Rated
              </h3>
              <p className="text-muted-foreground">
                Loved by over 10,000 Lagos customers for our consistent quality and taste
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Leaf className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                Fresh Daily
              </h3>
              <p className="text-muted-foreground">
                We cook fresh every single day using locally sourced, premium ingredients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Hungry? Let's Feed You!
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Order now and enjoy authentic Nigerian flavors delivered fresh to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white hover:bg-white/90 text-primary font-semibold">
              <Link href="/menu">
                Browse Full Menu
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <a href="tel:08034567890">
                Call to Order: 0803-456-7890
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
