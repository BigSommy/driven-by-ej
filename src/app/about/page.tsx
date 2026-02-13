export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">About Driven by EJ</h1>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Helping Nigerians buy reliable cars without pressure or scams
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg border border-navy/10 p-8 mb-8 overflow-hidden">
          <h2 className="text-2xl font-bold text-navy mb-6">Our Story</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Founder Image */}
            <div className="w-full md:w-1/3 shrink-0">
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg border-2 border-gold/20">
                {/* User: Save your founder photo as public/founder.png */}
                <img
                  src="/founder.png"
                  alt="EJ, Founder of Driven by EJ"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center text-sm font-medium text-navy mt-3">EJ, Founder</p>
            </div>

            {/* Story Text */}
            <div className="prose prose-lg max-w-none text-slate space-y-4">
              <p>
                Driven by EJ started from a genuine love for cars, but also from a deeper concern.
              </p>
              <p>
                I watched too many people work hard, save their money, and end up buying the wrong cars. Some were misled by dishonest dealers. Others bought vehicles that looked good at first but came with hidden faults that drained their finances later. Buying a car became stressful instead of exciting.
              </p>
              <p>
                I knew it didn't have to be that way.
              </p>
              <p>
                This business was built to create a better experience, one rooted in transparency, proper inspection, and honest communication. Every car is presented clearly, with no hidden issues and no unnecessary pressure. The goal is to help clients make confident decisions, not rushed ones.
              </p>
              <p>
                At Driven by EJ, It's about protecting buyers from costly mistakes, reducing the stress of ownership, and making the journey to owning a reliable vehicle smooth and straightforward.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-gold via-gold to-gold-dark text-navy rounded-lg p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg font-medium leading-relaxed">
            To make car ownership accessible to every Nigerian through verified vehicles, transparent pricing, and flexible payment plans that actually work.
          </p>
        </div>

        {/* Trust Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-navy/10 p-6 text-center">
            <div className="text-4xl font-bold text-gold mb-2">100+</div>
            <div className="text-navy font-medium">Cars Delivered</div>
            <div className="text-sm text-slate mt-1">Happy customers driving their dream cars</div>
          </div>

          <div className="bg-white rounded-lg border border-navy/10 p-6 text-center">
            <div className="text-4xl font-bold text-gold mb-2">4+</div>
            <div className="text-navy font-medium">Years Experience</div>
            <div className="text-sm text-slate mt-1">Trusted since 2020</div>
          </div>

          <div className="bg-white rounded-lg border border-navy/10 p-6 text-center">
            <div className="text-4xl font-bold text-gold mb-2">100%</div>
            <div className="text-navy font-medium">Verified Cars</div>
            <div className="text-sm text-slate mt-1">Every vehicle inspected before sale</div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg border border-navy/10 p-8">
          <h2 className="text-2xl font-bold text-navy mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                <span className="text-gold">✓</span> Verified Cars Only
              </h3>
              <p className="text-sm text-slate">
                Every car is thoroughly inspected before we list it. No surprises, no hidden issues.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                <span className="text-gold">✓</span> Flexible Payment Plans
              </h3>
              <p className="text-sm text-slate">
                50% deposit, balance spread over 3-6 months for foreign used cars. Drive now, pay later.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                <span className="text-gold">✓</span> Fast WhatsApp Support
              </h3>
              <p className="text-sm text-slate">
                Questions? We're always available on WhatsApp to help you make the right decision.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                <span className="text-gold">✓</span> Nationwide Delivery
              </h3>
              <p className="text-sm text-slate">
                We deliver your car anywhere in Nigeria. From Lagos to Abuja to Port Harcourt.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Ready to Buy Your Car?</h3>
          <a
            href="https://wa.me/2348127230704"
            className="inline-block rounded-full bg-gold px-8 py-4 font-semibold text-white hover:bg-gold-dark transition-all hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
