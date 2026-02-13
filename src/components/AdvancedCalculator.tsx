"use client";

import { useState, useEffect } from "react";

type CarType = "foreign" | "nigerian";

export default function AdvancedCalculator() {
    const [carType, setCarType] = useState<CarType>("foreign");
    const [price, setPrice] = useState<number>(5000000); // Default 5M
    const [duration, setDuration] = useState<number>(6);

    // Constants
    const DEPOSIT_PERCENT = 0.5; // 50% for both now
    const MIN_DURATION_FOREIGN = 3;
    const MAX_DURATION_FOREIGN = 6;

    // Derived state
    const isForeign = carType === "foreign";
    const depositPercent = DEPOSIT_PERCENT;

    // Reset duration when switching types
    useEffect(() => {
        if (isForeign) {
            setDuration(Math.max(duration, MIN_DURATION_FOREIGN));
        }
    }, [carType, duration, isForeign]);

    const depositAmount = price * depositPercent;
    const balance = price - depositAmount;

    // Calculate payments
    const monthlyPayment = isForeign ? (duration > 0 ? balance / duration : 0) : balance;

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-navy/5 overflow-hidden">
            <div className="bg-navy p-6 text-center">
                <h3 className="text-xl font-bold text-white">Payment Calculator</h3>
                <p className="text-cream/80 text-sm">Estimate your payment plan</p>
            </div>

            <div className="p-6 md:p-8 space-y-8">
                {/* Toggle Car Type */}
                <div className="flex bg-cream rounded-lg p-1 relative">
                    <button
                        onClick={() => setCarType("foreign")}
                        className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${carType === "foreign"
                            ? "bg-white text-navy shadow-sm"
                            : "text-slate/70 hover:text-navy"
                            }`}
                    >
                        Foreign Used
                    </button>
                    <button
                        onClick={() => setCarType("nigerian")}
                        className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${carType === "nigerian"
                            ? "bg-white text-navy shadow-sm"
                            : "text-slate/70 hover:text-navy"
                            }`}
                    >
                        Nigerian Used
                    </button>
                </div>

                {/* Info Text */}
                <div className="bg-blue-50 text-navy/80 text-sm p-4 rounded-lg border border-blue-100 italic">
                    {isForeign
                        ? "Balance spread over 3 to 6 months depending on your preference and agreement."
                        : "Balance spread over 2 weeks for faster completion."}
                </div>

                {/* Price Input */}
                <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                        Vehicle Price
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate font-semibold">
                            ₦
                        </span>
                        <input
                            type="text"
                            value={price.toLocaleString()}
                            onChange={(e) => {
                                const val = parseInt(e.target.value.replace(/,/g, ""), 10);
                                setPrice(isNaN(val) ? 0 : val);
                            }}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-navy/10 bg-cream/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-navy font-bold text-lg transition-all"
                        />
                    </div>
                    <div className="mt-2 text-xs text-slate">
                        Min Deposit: <span className="font-bold text-gold">{depositPercent * 100}%</span> for {isForeign ? "Foreign" : "Nigerian"} Used
                    </div>
                </div>

                {/* Duration Slider - Only for Foreign Used */}
                {isForeign && (
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-navy">Duration</label>
                            <span className="text-sm font-bold text-gold">{duration} Months</span>
                        </div>
                        <input
                            type="range"
                            min={MIN_DURATION_FOREIGN}
                            max={MAX_DURATION_FOREIGN}
                            step="1"
                            value={duration}
                            onChange={(e) => setDuration(parseInt(e.target.value))}
                            className="w-full h-2 bg-cream rounded-lg appearance-none cursor-pointer accent-gold"
                        />
                        <div className="flex justify-between text-xs text-slate mt-2">
                            <span>{MIN_DURATION_FOREIGN} Months</span>
                            <span>{MAX_DURATION_FOREIGN} Months</span>
                        </div>
                    </div>
                )}

                {/* Results */}
                <div className="bg-[#FAF9F5] rounded-xl p-6 border border-navy/5 space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-navy/5">
                        <span className="text-slate text-sm">Initial Deposit ({depositPercent * 100}%)</span>
                        <span className="text-xl font-bold text-navy">{formatCurrency(depositAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                        <span className="text-slate text-sm">
                            {isForeign ? "Monthly Payment" : "Balance (Due in 2 Weeks)"}
                        </span>
                        <span className="text-2xl font-bold text-gold">{formatCurrency(monthlyPayment)}</span>
                    </div>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-center text-slate/60">
                    * This calculator is for estimation purposes only. Final terms may vary based on specific vehicle assessment.
                </p>

                <a
                    href={`https://wa.me/2348127230704?text=Hi, I'm interested in a payment plan for a ${carType} used car priced around ${formatCurrency(price)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-navy text-white text-center font-bold rounded-full hover:bg-navy/90 transition-all shadow-lg hover:shadow-xl"
                >
                    Discuss This Plan on WhatsApp
                </a>
            </div>
        </div>
    );
}
