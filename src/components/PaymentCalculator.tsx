"use client";
import { useMemo, useState } from "react";

type Props = { price: number };

export default function PaymentCalculator({ price }: Props) {
  const [depositPercent, setDepositPercent] = useState(50);
  const [months, setMonths] = useState(6);

  const numbers = useMemo(() => {
    const deposit = Math.round((depositPercent / 100) * price);
    const balance = price - deposit;
    const monthly = Math.ceil(balance / months);
    return { deposit, balance, monthly };
  }, [depositPercent, months, price]);

  return (
    <div className="rounded-lg border border-navy/20 bg-cream p-6">
      <h3 className="text-lg font-bold text-navy mb-4">Payment Calculator</h3>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-navy mb-2 block">
            Deposit: {depositPercent}%
          </label>
          <input
            type="range"
            min={10}
            max={80}
            value={depositPercent}
            onChange={(e) => setDepositPercent(Number(e.target.value))}
            className="w-full h-2 bg-navy/10 rounded-lg appearance-none cursor-pointer accent-gold"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-navy mb-2 block">
            Months: {months}
          </label>
          <input
            type="range"
            min={1}
            max={12}
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full h-2 bg-navy/10 rounded-lg appearance-none cursor-pointer accent-gold"
          />
        </div>

        <div className="mt-6 pt-6 border-t border-navy/10 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate">Deposit:</span>
            <span className="font-semibold text-navy">₦{numbers.deposit.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate">Balance:</span>
            <span className="font-semibold text-navy">₦{numbers.balance.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-lg pt-2 border-t border-navy/10">
            <span className="font-bold text-navy">Monthly Payment:</span>
            <span className="font-bold text-gold">₦{numbers.monthly.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
