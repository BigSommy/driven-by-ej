import AdvancedCalculator from "../../components/AdvancedCalculator";

export default function PaymentPlanPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">How Our Payment Plans Work</h1>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Simple, transparent, and designed to get you driving quickly
          </p>
        </div>

        {/* Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg border border-navy/10 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-gold">1</span>
            </div>
            <h3 className="font-bold text-navy mb-2">Choose a Car</h3>
            <p className="text-sm text-slate">Browse and select your dream car</p>
          </div>

          <div className="bg-white rounded-lg border border-navy/10 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-gold">2</span>
            </div>
            <h3 className="font-bold text-navy mb-2">Pay Deposit</h3>
            <p className="text-sm text-slate">Place 50% deposit to reserve</p>
          </div>

          <div className="bg-white rounded-lg border border-navy/10 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-gold">3</span>
            </div>
            <h3 className="font-bold text-navy mb-2">Drive Home</h3>
            <p className="text-sm text-slate">Take your car immediately</p>
          </div>

          <div className="bg-white rounded-lg border border-navy/10 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-gold">4</span>
            </div>
            <h3 className="font-bold text-navy mb-2">Complete Balance</h3>
            <p className="text-sm text-slate">Pay remaining over 3-6 months</p>
          </div>
        </div>

        {/* Payment Structure */}
        <div className="bg-white rounded-lg border border-navy/10 p-8 mb-8">
          <h2 className="text-2xl font-bold text-navy mb-6">Payment Structure</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-gold font-bold">50%</span>
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">Initial Deposit</h3>
                <p className="text-slate">
                  Pay 50% of the car price upfront to reserve your vehicle. This secures the car for you immediately.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-gold font-bold">3-6</span>
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">Foreign Used Cars</h3>
                <p className="text-slate">
                  Balance spread over <strong>3 to 6 months</strong> depending on your preference and agreement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-gold font-bold">2w</span>
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">Nigerian Used Cars</h3>
                <p className="text-slate">
                  Balance spread over <strong>2 weeks</strong> for faster completion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-gradient-to-br from-navy to-navy/90 text-cream rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">What You Need</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-gold">✓</span>
              <span>Valid ID (National ID, Driver's License, or International Passport)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold">✓</span>
              <span>Signed payment agreement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold">✓</span>
              <span>Initial 50% deposit</span>
            </li>
          </ul>
        </div>

        {/* Calculator Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Calculate Your Plan</h2>
          <AdvancedCalculator />
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg border border-navy/10 p-8 mb-8">
          <h2 className="text-2xl font-bold text-navy mb-6">Common Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-navy mb-2">Can I negotiate the payment terms?</h3>
              <p className="text-slate">Yes! Chat with us on WhatsApp to discuss flexible options that work for you.</p>
            </div>
            <div>
              <h3 className="font-bold text-navy mb-2">What happens if I miss a payment?</h3>
              <p className="text-slate">We'll work with you to find a solution. Communication is key, just reach out to us.</p>
            </div>
            <div>
              <h3 className="font-bold text-navy mb-2">Is there interest on installments?</h3>
              <p className="text-slate">Contact us directly to discuss the terms. We aim to keep things simple and fair.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Ready to Get Started?</h3>
          <p className="text-slate mb-6">Chat with us to confirm details and discuss your payment plan</p>
          <a
            href="https://wa.me/2348127230704"
            className="inline-block rounded-full bg-gold px-8 py-4 font-semibold text-white hover:bg-gold-dark transition-all hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
