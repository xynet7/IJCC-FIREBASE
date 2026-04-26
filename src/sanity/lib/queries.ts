import { groq } from 'next-sanity';

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    contactEmail,
    phoneNumber,
    address
  }
`;

export const MEMBERSHIP_PRICING_QUERY = groq`
  *[_type == "membershipPricing"] | order(price asc) {
    _id,
    tierName,
    price,
    currency,
    duration,
    benefits
  }
`;

export const EVENTS_QUERY = groq`
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    date,
    time,
    location,
    description,
    registrationLink,
    "imageUrl": image.asset->url
  }
`;

export const MEMBERS_QUERY = groq`
  *[_type == "member"] | order(name asc) {
    _id,
    name,
    role,
    category,
    bio,
    "imageUrl": image.asset->url
  }
`;

export const GALLERY_QUERY = groq`
  *[_type == "galleryImage"] | order(_createdAt desc) {
    _id,
    title,
    "imageUrl": image.asset->url
  }
`;
