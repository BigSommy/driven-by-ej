"use client";

import { useState } from "react";
import Link from "next/link";

export default function LeaveReviewPage() {
    const [formData, setFormData] = useState({
        name: "",
        rating: 5,
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", rating: 5, message: "" });
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Something went wrong");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to submit review. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-cream">
            <div className="mx-auto max-w-2xl px-4 py-12">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-navy mb-4">Leave a Review</h1>
                    <p className="text-slate text-lg">
                        Share your experience with Driven by EJ
                    </p>
                </div>

                {status === "success" ? (
                    <div className="bg-white rounded-lg border border-navy/10 p-8 text-center">
                        <div className="text-6xl mb-4">✅</div>
                        <h2 className="text-2xl font-bold text-navy mb-3">Thank You!</h2>
                        <p className="text-slate mb-6">
                            Your review has been submitted and will appear on our testimonials page after approval.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link
                                href="/testimonials"
                                className="inline-block rounded-full bg-gold px-6 py-3 font-semibold text-white hover:bg-gold-dark transition-colors"
                            >
                                View Testimonials
                            </Link>
                            <button
                                onClick={() => setStatus("idle")}
                                className="inline-block rounded-full border border-navy px-6 py-3 font-semibold text-navy hover:bg-navy/5 transition-colors"
                            >
                                Submit Another
                            </button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-navy/10 p-8">
                        {/* Name */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-navy mb-2">
                                Your Name *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-cream/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-navy transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Rating */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-navy mb-2">
                                Rating *
                            </label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, rating: star })}
                                        className="text-3xl transition-all hover:scale-110"
                                    >
                                        {star <= formData.rating ? "⭐" : "☆"}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-navy mb-2">
                                Your Review *
                            </label>
                            <textarea
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-cream/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-navy transition-all resize-none"
                                rows={5}
                                minLength={10}
                                maxLength={500}
                                placeholder="Tell us about your experience..."
                            />
                            <div className="text-xs text-slate mt-1">
                                {formData.message.length}/500 characters
                            </div>
                        </div>

                        {/* Error Message */}
                        {status === "error" && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                {errorMessage}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-4 bg-navy text-white font-bold rounded-full hover:bg-navy/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? "Submitting..." : "Submit Review"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
