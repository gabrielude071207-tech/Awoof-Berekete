'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const menuCategories = {
  rice: {
    name: 'Rice Dishes',
    items: [
      { name: 'Jollof Rice', description: 'Party-style jollof rice' },
      { name: 'Fried Rice', description: 'Fried rice with herbs and vegetables' },
      { name: 'Coconut Rice', description: 'Fragrant coconut-infused rice' },
      { name: 'White Rice', description: 'Fluffy steamed white rice' },
      { name: 'Ofada Rice', description: 'Local Nigerian rice with ofada sauce' },
      { name: 'Village Rice', description: 'Traditional village-style rice' },
    ],
  },
  soups: {
    name: 'Soups & Sauces',
    items: [
      { name: 'Seafood Okro', description: 'Okro soup with assorted seafood' },
      { name: 'Efo Riro', description: 'Spinach stew with assorted meat' },
      { name: 'Egusi Soup', description: 'Melon seed soup with meat and fish' },
      { name: 'Ofada Sauce', description: 'Spicy local sauce with peppers' },
      { name: 'Egg Sauce', description: 'Nigerian-style egg sauce' },
      { name: 'Bitterleaf Soup', description: 'Traditional bitterleaf soup' },
      { name: 'Oha Soup', description: 'Oha leaf soup with assorted meat' },
      { name: 'Edika Ikong', description: 'Vegetable soup with assorted meat' },
    ],
  },
  swallow: {
    name: 'Swallow',
    items: [
      { name: 'Pounded Yam', description: 'Smooth pounded yam' },
      { name: 'Eba (Garri)', description: 'Cassava flour swallow' },
      { name: 'Fufu', description: 'Fermented cassava swallow' },
      { name: 'Amala', description: 'Yam flour swallow' },
      { name: 'Wheat', description: 'Wheat flour swallow' },
      { name: 'Semovita', description: 'Semolina swallow' },
    ],
  },
  protein: {
    name: 'Proteins',
    items: [
      { name: 'Pomfret Fresh Fish', description: 'Grilled or fried pomfret' },
      { name: 'Turkey', description: 'Grilled or fried turkey' },
      { name: 'Panla (Hake)', description: 'Dried and fried panla' },
      { name: 'Titus Fish', description: 'Fried mackerel' },
      { name: 'Croaker Fish', description: 'Fresh croaker fish' },
      { name: 'Chicken', description: 'Grilled or fried chicken' },
      { name: 'Beef', description: 'Tender beef chunks' },
      { name: 'Goat Meat (Asun)', description: 'Spicy grilled goat meat' },
      { name: 'Shaki (Tripe)', description: 'Cow tripe' },
      { name: 'Pomo (Cow Skin)', description: 'Soft cow skin' },
      { name: 'Gizzard', description: 'Chicken gizzard' },
    ],
  },
  african: {
    name: 'African Specialties',
    items: [
      { name: 'Edika Ikong with Assorted Meat', description: 'Special vegetable soup' },
      { name: 'Party Jollof Rice', description: 'Smoky party-style jollof' },
      { name: 'Beans Pottage', description: 'Beans cooked with palm oil and spices' },
      { name: 'Asaro (Yam Pottage)', description: 'Mashed yam with peppers' },
      { name: 'Peppered Prawn', description: 'Spicy prawn in pepper sauce' },
    ],
  },
  continental: {
    name: 'Continental Dishes',
    items: [
      { name: 'Chinese Egg Rice', description: 'Egg rice with vegetables' },
      { name: 'Spaghetti Napolitana', description: 'Spicy vegetable sauce pasta' },
      { name: 'Spicy Grilled Gizzard', description: 'Hot and spicy gizzard' },
    ],
  },
  breakfast: {
    name: 'Breakfast',
    items: [
      { name: 'African Egg Sauce', description: 'Egg sauce with tomatoes and peppers' },
      { name: 'Boiled Yam', description: 'Fresh boiled yam' },
      { name: 'Spicy Fish Sauce', description: 'Fish in pepper sauce' },
      { name: 'Seven-Spirited Moi-Moi', description: 'Moi moi with 7 different proteins' },
      { name: 'Fried Plantain (Dodo)', description: 'Sweet fried plantains' },
      { name: 'Akara (Bean Cakes)', description: 'Fried bean fritters' },
    ],
  },
  snacks: {
    name: 'Snacks & Pastries',
    items: [
      { name: 'Doughnut', description: 'Freshly baked doughnuts' },
      { name: 'Chicken Pie', description: 'Savory chicken pie' },
      { name: 'Meat Pie', description: 'Nigerian meat pie' },
      { name: 'Sausage Roll', description: 'Baked sausage roll' },
      { name: 'Bread Roll', description: 'Soft bread roll' },
      { name: 'Puff Puff', description: 'Sweet fried dough balls' },
    ],
  },
  drinks: {
    name: 'Drinks & Beverages',
    items: [
      { name: 'Cola', description: 'Coca-Cola, Pepsi, Fanta' },
      { name: 'Zobo', description: 'Hibiscus drink' },
      { name: 'Chapman', description: 'Nigerian cocktail drink' },
      { name: 'Malt', description: 'Malta Guinness, Amstel' },
      { name: 'Fruit Juices', description: 'Orange, Mango, Guava' },
      { name: 'Smoothies', description: 'Fresh fruit smoothies' },
      { name: 'Yoghurt Drink', description: 'Flavored yoghurt' },
      { name: 'Bitter Lemon', description: 'Schweppes Bitter Lemon' },
      { name: 'Apple Drink', description: 'Apple-flavored drink' },
    ],
  },
  extras: {
    name: 'Extras & Sides',
    items: [
      { name: 'Coleslaw', description: 'Fresh vegetable coleslaw' },
      { name: 'Fried Plantain (Dodo)', description: 'Sweet fried plantains' },
      { name: 'Moi-Moi', description: 'Steamed bean pudding' },
      { name: 'Nigerian Salad', description: 'Mixed vegetable salad' },
    ],
  },
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('rice');

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Our Full Menu
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our wide variety of authentic Nigerian and continental dishes
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            {/* Category Tabs */}
            <div className="mb-8 overflow-x-auto">
              <TabsList className="inline-flex w-full md:w-auto min-w-full md:min-w-0 bg-muted p-1 rounded-lg">
                <TabsTrigger value="rice" className="flex-1 md:flex-initial">Rice</TabsTrigger>
                <TabsTrigger value="soups" className="flex-1 md:flex-initial">Soups</TabsTrigger>
                <TabsTrigger value="swallow" className="flex-1 md:flex-initial">Swallow</TabsTrigger>
                <TabsTrigger value="protein" className="flex-1 md:flex-initial">Proteins</TabsTrigger>
                <TabsTrigger value="african" className="flex-1 md:flex-initial">African</TabsTrigger>
                <TabsTrigger value="continental" className="flex-1 md:flex-initial">Continental</TabsTrigger>
                <TabsTrigger value="breakfast" className="flex-1 md:flex-initial">Breakfast</TabsTrigger>
                <TabsTrigger value="snacks" className="flex-1 md:flex-initial">Snacks</TabsTrigger>
                <TabsTrigger value="drinks" className="flex-1 md:flex-initial">Drinks</TabsTrigger>
                <TabsTrigger value="extras" className="flex-1 md:flex-initial">Extras</TabsTrigger>
              </TabsList>
            </div>

            {/* Category Content */}
            {Object.entries(menuCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="max-w-5xl mx-auto">
                  <h2 className="font-montserrat font-bold text-3xl text-foreground mb-8">
                    {category.name}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors"
                      >
                        <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://wa.me/2348034567890" target="_blank" rel="noopener noreferrer">
                            Order Now
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Call us or send a WhatsApp message to place your order. We're ready to serve you!
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
