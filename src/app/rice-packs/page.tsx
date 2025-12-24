import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rice Packs - Awoof Berekete | Jollof Rice & Nigerian Rice Meals',
  description: 'Explore our signature rice packs: Jollof Rice with Chicken or Beef, Coconut Rice Special, and Classic White Rice & Stew. Perfectly portioned, delicious Nigerian meals.',
};

const ricePacks = [
  {
    title: 'Jollof Rice & Chicken',
    description: 'Savory jollof rice served with tender chicken, cooked with authentic Nigerian spices. Our signature dish that keeps customers coming back!',
    price: '₦2,500',
    imageSrc: '/images/generated/native-jollof-combo.png',
    features: [
      'Party-style jollof rice',
      'Juicy grilled or fried chicken',
      'Perfectly seasoned with Nigerian spices',
      'Large portion size',
    ],
  },
  {
    title: 'Jollof Rice & Beef',
    description: 'Flavorful jollof rice paired with succulent beef for the perfect meal. Rich, smoky, and incredibly satisfying.',
    price: '₦2,800',
    imageSrc: '/images/generated/native-jollof-combo.png',
    features: [
      'Smoky party jollof rice',
      'Tender beef chunks',
      'Authentic Lagos-style preparation',
      'Generous serving',
    ],
  },
  {
    title: 'Jollof Rice & Chicken + Dodo (Plantain)',
    description: 'Enjoy jollof rice with chicken and perfectly fried plantains. The ultimate Nigerian comfort food combination.',
    price: '₦3,000',
    imageSrc: '/images/generated/coconut-rice-special.png',
    features: [
      'Signature jollof rice',
      'Grilled/fried chicken',
      'Sweet fried plantains (dodo)',
      'Complete balanced meal',
    ],
  },
  {
    title: 'Jollof Rice & Beef + Dodo (Plantain)',
    description: 'A delightful combination of jollof rice, tender beef, and fried plantains. Everything you love in one plate!',
    price: '₦3,200',
    imageSrc: '/images/generated/coconut-rice-special.png',
    features: [
      'Rich jollof rice',
      'Succulent beef pieces',
      'Crispy fried plantains',
      'Full, satisfying portion',
    ],
  },
  {
    title: 'Coconut Rice Special',
    description: 'Fragrant coconut-infused rice served with crispy fish, plantains, and spicy pepper sauce. A tropical Nigerian delight.',
    price: '₦2,500',
    imageSrc: '/images/generated/coconut-rice-special.png',
    features: [
      'Coconut-flavored rice',
      'Crispy fried fish (tilapia or croaker)',
      'Fried plantains',
      'Side of pepper sauce',
    ],
  },
  {
    title: 'Classic White Rice & Stew',
    description: 'Perfectly cooked white rice with rich tomato stew, chicken, beef, and moi moi. A timeless Nigerian favorite.',
    price: '₦2,800',
    imageSrc: '/images/generated/white-rice-stew.png',
    features: [
      'Fluffy white rice',
      'Rich tomato stew',
      'Chicken and beef',
      'Nigerian moi moi (bean pudding)',
    ],
  },
];

export default function RicePacksPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Rice Pack Varieties
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Perfectly cooked, generously portioned, and bursting with authentic Nigerian flavors
            </p>
          </div>
        </div>
      </section>

      {/* Rice Packs Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {ricePacks.map((pack, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
              >
                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={pack.imageSrc}
                    alt={pack.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-montserrat font-bold text-2xl text-foreground">
                      {pack.title}
                    </h3>
                    <span className="font-montserrat font-bold text-2xl text-primary whitespace-nowrap ml-4">
                      {pack.price}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {pack.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {pack.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90" asChild>
                    <a href="https://wa.me/2348034567890" target="_blank" rel="noopener noreferrer">
                      Order Now
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Rice Packs Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl text-center text-foreground mb-12">
              Why Our Rice Packs Are Special
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍚</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                  Premium Rice
                </h3>
                <p className="text-muted-foreground text-sm">
                  We use only the finest long-grain rice, perfectly cooked every time
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-white mb-2">
                  Authentic Flavors
                </h3>
                <p className="text-muted-foreground text-sm">
                  Traditional Nigerian spices and cooking methods for genuine taste
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💪</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                  Generous Portions
                </h3>
                <p className="text-muted-foreground text-sm">
                  Filling, satisfying meals that give you great value for money
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
            Can't Decide? Try Our Combo!
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Call us for custom combinations or catering packages for your events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white hover:bg-white/90 text-primary font-semibold">
              <a href="tel:08034567890">
                Call: 0803-456-7890
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white hover:bg-white/10" style={{color: 'black'}}>
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
