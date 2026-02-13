import Link from "next/link";
import { fetchApprovedReviews } from "../../lib/sanityClient";

export default async function TestimonialsPage() {
  const reviews = await fetchApprovedReviews();

  const renderStars = (rating: number) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">What Our Customers Say</h1>
          <p className="text-lg text-slate max-w-2xl mx-auto mb-6">
            Real reviews from real customers who trusted us with their car purchase
          </p>
          <Link
            href="/leave-review"
            className="inline-block rounded-full bg-gold px-6 py-3 font-semibold text-white hover:bg-gold-dark transition-colors"
          >
            Leave a Review
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg border border-navy/10 p-6 text-center">
            <div className="text-4xl font-bold text-gold mb-2">{reviews.length}+</div>
            <div className="text-navy font-medium">Happy Customers</div>
          </div>
          <div className="bg-white rounded-lg border border-navy/10 p-6 text-center">
            <div className="text-4xl font-bold text-gold mb-2">4.9</div>
            <div className="text-navy font-medium">Average Rating</div>
          </div>
          <div className="bg-white rounded-lg border border-navy/10 p-6 text-center">
            <div className="text-4xl font-bold text-gold mb-2">100%</div>
            <div className="text-navy font-medium">Verified Reviews</div>
          </div>
        </div>

        {/* Reviews Grid */}
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white rounded-lg border border-navy/10 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{renderStars(review.rating)}</div>
                </div>
                <p className="text-slate mb-4 leading-relaxed">{review.message}</p>
                <div className="border-t border-navy/10 pt-4">
                  <div className="font-semibold text-navy">{review.name}</div>
                  {review.carBought && (
                    <div className="text-sm text-gold mt-1">
                      Bought: {review.carBought.title}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate text-lg mb-6">No reviews yet. Be the first to leave one!</p>
            <Link
              href="/leave-review"
              className="inline-block rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-navy/90 transition-colors"
            >
              Leave a Review
            </Link>
          </div>
        )}

        {/* Trust Section */}
        <div className="mt-16 bg-navy rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-cream mb-6 max-w-2xl mx-auto">
            Experience stress-free car buying with flexible payment plans and nationwide delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cars"
              className="inline-block rounded-full bg-gold px-8 py-4 font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Browse Cars
            </Link>
            <a
              href="https://wa.me/2348127230704"
              className="inline-flex items-center justify-center rounded-full border border-cream px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
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
      </div>
    </div>
  );
}
