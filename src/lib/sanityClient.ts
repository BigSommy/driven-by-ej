import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export type Car = {
  _id: string;
  slug: string;
  title: string;
  brand?: string;
  model?: string;
  price: number;
  year: number;
  mileage: number;
  engine: string;
  condition: string;
  mainImage?: any;
  images?: any[];
  description?: string;
  features?: string[];
  isFeatured?: boolean;
  status: string;
  dealTag?: string;
  dealEndsAt?: string;
};

const CAR_QUERY = `*[_type == "car" && status == "available"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  brand,
  model,
  price,
  year,
  mileage,
  engine,
  condition,
  mainImage,
  images,
  description,
  features,
  isFeatured,
  status
}`;

const CAR_BY_SLUG_QUERY = `*[_type == "car" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  brand,
  model,
  price,
  year,
  mileage,
  engine,
  condition,
  mainImage,
  images,
  description,
  features,
  isFeatured,
  status
}`;

const FEATURED_CARS_QUERY = `*[_type == "car" && isFeatured == true && status == "available"] | order(_createdAt desc) [0...6] {
  _id,
  title,
  "slug": slug.current,
  brand,
  model,
  price,
  year,
  mileage,
  engine,
  condition,
  mainImage,
  images,
  description,
  features,
  isFeatured,
  status
}`;

export async function fetchCars(): Promise<Car[]> {
  try {
    const cars = await client.fetch<Car[]>(CAR_QUERY);
    return cars.map(transformCar);
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
}

export async function fetchCarBySlug(slug: string): Promise<Car | null> {
  try {
    const car = await client.fetch<Car>(CAR_BY_SLUG_QUERY, { slug });
    return car ? transformCar(car) : null;
  } catch (error) {
    console.error("Error fetching car by slug:", error);
    return null;
  }
}

export async function fetchFeaturedCars(): Promise<Car[]> {
  try {
    const cars = await client.fetch<Car[]>(FEATURED_CARS_QUERY);
    return cars.map(transformCar);
  } catch (error) {
    console.error("Error fetching featured cars:", error);
    return [];
  }
}

// Transform Sanity car data to include image URLs
function transformCar(car: Car): Car {
  return {
    ...car,
    images: car.mainImage
      ? [urlForImage(car.mainImage).width(800).height(600).url()]
      : car.images?.map((img) => urlForImage(img).width(800).height(600).url()) || [],
  };
}

// Review types and queries
export type Review = {
  _id: string;
  name: string;
  rating: number;
  message: string;
  carBought?: {
    title: string;
    slug: string;
  };
  submittedAt: string;
};

const APPROVED_REVIEWS_QUERY = `*[_type == "review" && approved == true] | order(submittedAt desc) {
  _id,
  name,
  rating,
  message,
  submittedAt,
  "carBought": carBought->{
    title,
    "slug": slug.current
  }
}`;

export async function fetchApprovedReviews(): Promise<Review[]> {
  try {
    const reviews = await client.fetch<Review[]>(APPROVED_REVIEWS_QUERY);
    return reviews;
  } catch (error) {
    console.error("Error fetching approved reviews:", error);
    return [];
  }
}

// Car of the Week query - fetch up to 3 deals
const WEEKLY_DEALS_QUERY = `*[_type == "car" && isCarOfTheWeek == true && status == "available" && (!defined(dealEndsAt) || dealEndsAt > now())] | order(_createdAt desc) [0...3] {
  _id,
  title,
  "slug": slug.current,
  brand,
  model,
  price,
  year,
  mileage,
  engine,
  condition,
  mainImage,
  images,
  description,
  features,
  dealTag,
  dealEndsAt,
  status
}`;

export async function fetchWeeklyDeals(): Promise<Car[]> {
  try {
    const cars = await client.fetch<Car[]>(WEEKLY_DEALS_QUERY);
    return cars.map(transformCar);
  } catch (error) {
    console.error("Error fetching weekly deals:", error);
    return [];
  }
}

// Keep backward compatibility
export async function fetchCarOfTheWeek(): Promise<Car | null> {
  try {
    const deals = await fetchWeeklyDeals();
    return deals.length > 0 ? deals[0] : null;
  } catch (error) {
    console.error("Error fetching car of the week:", error);
    return null;
  }
}
