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
    <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-montserrat font-bold text-2xl text-primary">
            {price}
          </span>
          <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
            <a href="https://wa.me/2348034567890" target="_blank" rel="noopener noreferrer">
              Add to Order
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
