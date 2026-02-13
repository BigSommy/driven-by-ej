"use client";

import { useState, useEffect } from "react";
import { fetchCars, type Car } from "../../lib/sanityClient";
import CarCard from "../../components/CarCard";

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");

  // Fetch cars on mount
  useEffect(() => {
    async function loadCars() {
      const data = await fetchCars();
      setCars(data);
      setFilteredCars(data);
      setLoading(false);
    }
    loadCars();
  }, []);

  // Apply filters whenever filter state changes
  useEffect(() => {
    let result = [...cars];

    // Filter by brand
    if (selectedBrand !== "all") {
      result = result.filter((car) =>
        car.brand?.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    // Filter by price range
    if (selectedPriceRange !== "all") {
      result = result.filter((car) => {
        const price = car.price;
        switch (selectedPriceRange) {
          case "under-3m":
            return price < 3000000;
          case "3m-5m":
            return price >= 3000000 && price <= 5000000;
          case "5m-8m":
            return price > 5000000 && price <= 8000000;
          case "above-8m":
            return price > 8000000;
          default:
            return true;
        }
      });
    }

    // Filter by condition
    if (selectedCondition !== "all") {
      result = result.filter((car) =>
        car.condition?.toLowerCase() === selectedCondition.toLowerCase()
      );
    }

    setFilteredCars(result);
  }, [selectedBrand, selectedPriceRange, selectedCondition, cars]);

  // Get unique brands from cars
  const brands = Array.from(new Set(cars.map((car) => car.brand).filter(Boolean)));

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-navy text-lg">Loading cars...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">Available Cars</h1>
          <p className="text-slate text-lg">
            Browse our selection of verified foreign used and Nigerian used cars with flexible payment options
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 p-4 bg-white rounded-lg border border-navy/10">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-sm font-medium text-navy">Filters:</span>

            {/* Brand Filter */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-2 rounded-lg border border-navy/20 text-sm bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="all">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 rounded-lg border border-navy/20 text-sm bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="all">All Budgets</option>
              <option value="under-3m">Under ₦3M</option>
              <option value="3m-5m">₦3M - ₦5M</option>
              <option value="5m-8m">₦5M - ₦8M</option>
              <option value="above-8m">Above ₦8M</option>
            </select>

            {/* Condition Filter */}
            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="px-4 py-2 rounded-lg border border-navy/20 text-sm bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="all">All Conditions</option>
              <option value="foreign">Foreign Used</option>
              <option value="nigerian">Nigerian Used</option>
              <option value="new">Brand New</option>
            </select>

            {/* Results Count */}
            <span className="ml-auto text-sm text-slate">
              {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'} found
            </span>
          </div>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate text-lg mb-4">No cars match your filters</p>
            <button
              onClick={() => {
                setSelectedBrand("all");
                setSelectedPriceRange("all");
                setSelectedCondition("all");
              }}
              className="inline-block rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-navy/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
