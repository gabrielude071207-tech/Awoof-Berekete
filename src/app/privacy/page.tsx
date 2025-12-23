import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Awoof Berekete',
  description: 'Privacy policy for Awoof Berekete restaurant services.',
};

export default function PrivacyPage() {
  return (
    <main className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                When you order from Awoof Berekete, we collect information necessary to process and deliver your order, including your name, phone number, delivery address, and payment information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use your information to process orders, communicate with you about your order, and improve our services. We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this privacy policy, please contact us at info@awoofberekete.com or call 0803-456-7890.
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
