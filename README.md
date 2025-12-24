# Awoof Berekete

A modern Nigerian restaurant website showcasing authentic Nigerian cuisine with online ordering capabilities.

## About

Awoof Berekete is a premium Nigerian restaurant offering authentic traditional dishes. This website provides customers with an easy way to browse our menu, learn about our services, and place orders via phone or WhatsApp.

## Features

- **Full Menu System** - Browse 50+ dishes across 10 categories (Soups, Rice, Swallow, Proteins, Sides, Drinks, etc.)
- **Featured Rice Packs** - Specialty rice dishes with professional food photography
- **Online Ordering** - Direct integration with WhatsApp and phone ordering
- **Responsive Design** - Mobile-first design with hamburger navigation
- **Location & Contact** - Embedded Google Maps and contact form
- **About & Services** - Restaurant story, chef information, and catering services

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

## Pages

1. **Home** - Hero section, featured meals, why choose us
2. **About** - Restaurant story, chef profile, values
3. **Services** - Catering, delivery, custom packages
4. **Rice Packs** - Featured rice dishes with photography
5. **Menu** - Complete menu with 10+ categories
6. **How to Order** - Step-by-step ordering guide
7. **Contact** - Contact form and location map
8. **Legal** - Privacy policy and terms of service

## Getting Started

### Prerequisites
- Node.js 20+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/gabrielude071207-tech/Awoof-Berekete.git
cd Awoof-Berekete
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                      # Next.js app directory (pages)
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── rice-packs/          # Rice packs showcase
│   ├── menu/                # Full menu
│   ├── how-to-order/        # Ordering guide
│   ├── contact/             # Contact page
│   └── legal/               # Privacy & terms
├── components/              # React components
│   ├── ui/                 # shadcn/ui components
│   ├── Navigation.tsx      # Header navigation
│   ├── Footer.tsx          # Footer with links
│   └── WhatsAppFloat.tsx   # Floating WhatsApp button
└── lib/                    # Utilities and data
    ├── menu-data.ts        # Menu items and categories
    └── utils.ts            # Helper functions
```

## Menu Categories

- Soups (Egusi, Banga, Bitter Leaf, Okro, Ogbono, Efo Riro, Oha)
- Rice Dishes (Jollof, Fried Rice, Coconut Rice, Ofada, Native, White Rice)
- Swallow (Eba, Pounded Yam, Semovita, Fufu, Amala, Wheat)
- Proteins (Goat Meat, Beef, Chicken, Fish, Snails, Cow Leg, Shaki)
- Sides (Plantain, Moi Moi, Akara, Puff Puff, Peppered Snails)
- Drinks (Chapman, Zobo, Palm Wine, Soft Drinks, Fresh Juice)
- Appetizers & More

## Contact Integration

- **Phone Orders:** +234 803 456 7890
- **WhatsApp Orders:** Direct messaging integration
- **Location:** Google Maps embedded for directions

## Deployment

This project is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any hosting platform supporting Next.js**

## License

MIT License

---

Built with Next.js 15 and TypeScript. Showcasing authentic Nigerian cuisine with modern web technology.
