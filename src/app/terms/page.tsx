import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Awoof Berekete',
  description: 'Terms of service for Awoof Berekete restaurant.',
};

export default function TermsPage() {
  return (
    <main className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-foreground mb-4">
                Service Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                By ordering from Awoof Berekete, you agree to these terms of service. We reserve the right to refuse service, modify prices, or change our menu without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-foreground mb-4">
                Order and Delivery
              </h2>
              <p className="text-muted-foreground mb-4">
                Orders are prepared fresh and delivered based on availability. Delivery times are estimates and may vary during peak hours. We are not responsible for delays beyond our control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-foreground mb-4">
                Payment and Refunds
              </h2>
              <p className="text-muted-foreground mb-4">
                Payment is due upon delivery or pickup. We accept cash and bank transfers. Refunds are provided for orders that do not meet our quality standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                For questions about these terms, contact us at info@awoofberekete.com or call 0803-456-7890.
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
