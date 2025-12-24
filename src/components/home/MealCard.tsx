import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface MealCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

export default function MealCard({ title, description, price, imageSrc, imageAlt }: MealCardProps) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-primary/10">
      {/* Gold accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-gradient-to-b from-card to-background/50">
        <h3 className="font-playfair font-semibold text-xl text-foreground mb-3 tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-primary/10">
          <span className="font-playfair font-bold text-2xl text-primary tracking-tight">
            {price}
          </span>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-foreground font-medium shadow-md" asChild>
            <a href="https://wa.me/2348034567890" target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
