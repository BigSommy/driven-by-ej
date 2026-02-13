import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-navy/10 bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <div className="mb-4 h-12 w-40 relative">
              <img src="/logo.png" alt="Driven by EJ" className="h-full w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm text-cream/80 leading-relaxed">
              Buy reliable cars with simple installment plans. No pressure, no scams, honest car deals only.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-semibold mb-3 text-gold">Quick Links</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/cars" className="text-cream/80 hover:text-gold transition-colors">
                Browse Cars
              </Link>
              <Link href="/payment-plan" className="text-cream/80 hover:text-gold transition-colors">
                Payment Plans
              </Link>
              <Link href="/about" className="text-cream/80 hover:text-gold transition-colors">
                About Us
              </Link>
              <Link href="/testimonials" className="text-cream/80 hover:text-gold transition-colors">
                Testimonials
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <div className="font-semibold mb-3 text-gold">Get in Touch</div>
            <div className="flex flex-col gap-3 text-sm text-cream/80">
              <a
                href="https://wa.me/2348127230704"
                className="hover:text-gold transition-colors flex items-center gap-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </span>
                +234 812 723 0704
              </a>
              <a
                href="https://tiktok.com/@drivenbyej24"
                className="hover:text-gold transition-colors flex items-center gap-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                </span>
                @drivenbyej24
              </a>
              <div className="mt-4 pt-4 border-t border-cream/10 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <span className="text-xs font-medium">100+ Cars Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-xs font-medium">Trusted Since 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-cream/20 text-center text-xs text-cream/60">
          <p>&copy; {new Date().getFullYear()} Driven by EJ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
