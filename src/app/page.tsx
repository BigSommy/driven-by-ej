import Link from "next/link";
import { fetchFeaturedCars, fetchWeeklyDeals } from "../lib/sanityClient";
import CarCard from "../components/CarCard";
import DealsCarousel from "../components/DealsCarousel";

// Revalidate every 60 seconds (or set to 0 for no cache during development)
export const revalidate = 60;

export default async function Home() {
  const featuredCars = await fetchFeaturedCars();
  const weeklyDeals = await fetchWeeklyDeals();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#051118] text-cream overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#051118] via-[#051118]/90 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#0E2A3A]/40 to-transparent"></div>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 pt-12 pb-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* Text Content - Spans 6 cols (reduced from 7 for balance) */}
            <div className="lg:col-span-6 max-w-3xl pt-10 lg:pt-0 relative z-20">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white tracking-tight">
                Buy Reliable Cars From EJ <br />
                <span className="text-gold">Without Stress.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light">
                Verified vehicles. Transparent pricing. Flexible payment plans.
                Experience the new standard of car buying in Nigeria.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-all hover:scale-105 shadow-lg shadow-gold/20"
                >
                  View Available Cars
                </Link>
                <a
                  href="https://wa.me/2348127230704"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all hover:border-slate-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2 text-[#25D366]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  </span>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Hero Image - Spans 6 cols (increased from 5) with larger max-width */}
            <div className="lg:col-span-6 relative mt-8 lg:mt-0">
              {/* Increased max-width to 700px and adjust aspect ratio wrapper */}
              <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto lg:mr-0 pl-0 lg:pl-10">
                {/* Decorative Circle Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gold/5 rounded-full blur-3xl"></div>

                <img
                  src="/hero-image.png"
                  alt="Luxury SUV"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 origin-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy From Driven by EJ */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Why Buy From Driven by EJ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trust Point 1 */}
            <div className="text-center group hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white shadow-sm border border-navy/5 flex items-center justify-center group-hover:shadow-md transition-shadow">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">Verified Cars</h3>
              <p className="text-sm text-slate leading-relaxed">Every car is inspected and verified before listing</p>
            </div>

            {/* Trust Point 2 */}
            <div className="text-center group hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white shadow-sm border border-navy/5 flex items-center justify-center group-hover:shadow-md transition-shadow">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">Flexible Payments</h3>
              <p className="text-sm text-slate leading-relaxed">50% deposit, balance spread over 3-6 months</p>
            </div>

            {/* Trust Point 3 */}
            <div className="text-center group hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white shadow-sm border border-navy/5 flex items-center justify-center group-hover:shadow-md transition-shadow">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">No Hidden Issues</h3>
              <p className="text-sm text-slate leading-relaxed">Transparent condition reports and honest pricing</p>
            </div>

            {/* Trust Point 4 */}
            <div className="text-center group hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white shadow-sm border border-navy/5 flex items-center justify-center group-hover:shadow-md transition-shadow">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">Nationwide Delivery</h3>
              <p className="text-sm text-slate leading-relaxed">We deliver your car anywhere in Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Deals Carousel */}
      {weeklyDeals.length > 0 && <DealsCarousel deals={weeklyDeals} />}

      {/* Featured Cars */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Featured Cars
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Browse our selection of verified cars with flexible payment options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCars.map((car: any) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/cars"
              className="inline-block rounded-full bg-navy px-8 py-3 font-semibold text-white hover:bg-navy/90 transition-all shadow-lg hover:shadow-xl"
            >
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-gold via-gold to-gold-dark text-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Drive Your Dream Car?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Chat with us on WhatsApp now to discuss payment plans and delivery options
          </p>
          <a
            href="https://wa.me/2348127230704"
            className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-gold hover:bg-cream transition-all hover:scale-105 shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Chatting on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
