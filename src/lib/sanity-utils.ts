import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

const CARS_QUERY = `*[
  _type == "car"
  && defined(slug.current)
  && status == "available"
]|order(publishedAt desc)[0...12]{
    _id, 
    title, 
    slug, 
    price, 
    year, 
    mileage, 
    condition, 
    mainImage,
    "imageUrl": mainImage.asset->url
}`;

export async function getCars() {
    return client.fetch<SanityDocument[]>(CARS_QUERY);
}

const FEATURED_CARS_QUERY = `*[
  _type == "car"
  && defined(slug.current)
  && isFeatured == true
  && status == "available"
]|order(publishedAt desc)[0...6]{
    _id, 
    title, 
    slug, 
    price, 
    year, 
    mileage, 
    condition, 
    mainImage,
    "imageUrl": mainImage.asset->url
}`;

export async function getFeaturedCars() {
    return client.fetch<SanityDocument[]>(FEATURED_CARS_QUERY);
}
