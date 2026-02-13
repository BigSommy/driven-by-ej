import Image from "next/image";
import { fetchCarBySlug } from "../../../lib/sanityClient";
import PaymentCalculator from "../../../components/PaymentCalculator";
import Link from "next/link";

type Props = { params: { slug: string } };

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;
  const car = await fetchCarBySlug(slug);

  if (!car) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Car Not Found</h2>
          <p className="text-slate mb-6">The car you're looking for doesn't exist or has been sold.</p>
          <Link
            href="/cars"
            className="inline-block rounded-full bg-gold px-6 py-3 font-semibold text-white hover:bg-gold-dark transition-colors"
          >
            Back to Cars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div>
            <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white border border-navy/10">
              <Image
                src={car.images?.[0] || "/placeholder-car.svg"}
                alt={car.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Car Details */}
          <div>
            <div className="bg-white rounded-lg border border-navy/10 p-6">
              <h1 className="text-3xl font-bold text-navy mb-3">{car.title}</h1>

              <div className="flex items-center gap-3 text-sm text-slate mb-6">
                <span className="bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">
                  {car.condition}
                </span>
                <span>{car.year}</span>
                <span>•</span>
                <span>{car.mileage}</span>
                <span>•</span>
                <span>{car.engine}</span>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-navy mb-2">
                  ₦{car.price.toLocaleString()}
                </div>
                <div className="text-gold font-medium">
                  Pay from ₦{Math.ceil((car.price * 0.5) / 6).toLocaleString()}/month
                </div>
              </div>

              <a
                href={`https://wa.me/2348127230704?text=Hi EJ, I'm interested in the ${encodeURIComponent(car.title)}`}
                className="block w-full text-center rounded-lg bg-[#25D366] px-6 py-4 font-semibold text-white hover:bg-[#20BA5A] transition-colors mb-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Chat on WhatsApp
              </a>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="font-bold text-navy mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-slate">Condition:</span>
                    <div className="font-medium text-navy">{car.condition}</div>
                  </div>
                  <div>
                    <span className="text-slate">Year:</span>
                    <div className="font-medium text-navy">{car.year}</div>
                  </div>
                  <div>
                    <span className="text-slate">Engine:</span>
                    <div className="font-medium text-navy">{car.engine}</div>
                  </div>
                  <div>
                    <span className="text-slate">Mileage:</span>
                    <div className="font-medium text-navy">{car.mileage}</div>
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-cream p-4 rounded-lg text-sm">
                <p className="text-navy">
                  <strong>🚚 Nationwide Delivery Available</strong>
                </p>
                <p className="text-slate mt-1">
                  We can deliver this car to any location in Nigeria. Contact us for delivery details.
                </p>
              </div>
            </div>

            {/* Payment Calculator */}
            <div className="mt-6">
              <PaymentCalculator price={car.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
