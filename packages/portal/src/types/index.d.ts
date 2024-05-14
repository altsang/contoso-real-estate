export interface User {
  id: string;
  name: string;
  email?: string;
  address?: string;
  photo: string;
  role: UserRole;
  auth?: {
    provider: AuthProvider;
    lastLogin: string;
  };
}

export interface UserClientPrincipal {
  userId: string;
  userDetails: string;
  userRoles: string[];
  claims: { typ: string; val: string }[];
  identityProvider: string;
}

export type AuthProvider = "aad" | "github" | "google" | "facebook";
export type UserRole = "guest" | "renter" | "admin";

export interface Listing {
  // we will add attributes so we don't have to write a new component for search
  attributes?: ListingAttributes;
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  bathrooms: number;
  bedrooms: number;
  description: string;
  type: string;
  isFeatured: boolean;
  isRecommended: boolean;
  photos: string[];
  capacity: number;
  ammenities: string[];
  reviews_stars: number;
  reviews_number: number;
  address: string[];
  fees: string[];
  $$isFavorited?: boolean;
}

export interface ListingAttributes {
  // we will add attributes so we don't have to write a new component for search
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  bathrooms: number;
  bedrooms: number;
  description: string;
  type: string;
  isFeatured: boolean;
  isRecommended: boolean;
  photos: string;
  capacity: number;
  ammenities: string;
  reviews_stars: number;
  reviews_number: number;
  address: string;
  fees: string;
  $$isFavorited?: boolean;
}

export interface Reviews {
  id: string;
  createdAt: string;
  rating: number;
  review: string;
  user: User;
}

export interface StageType {
  title: string;
  subtitle?: string;
  label?: string;
  url?: string;
  img: string;
}

export interface Address {
  buildingNumber: string;
  city: string;
  country: string;
  state: string;
  street: string;
  zipCode: string;
  position: string;
}

export interface Reservation {
  id: string;
  userId: string;
  listingId: string;
  title: string;
  guests: number;
  from: Date;
  to: Date;
  status: "pending" | "active" | "cancelled" | "archived";
  createdAt: Date;
}

export interface ReservationRequest {
  userId: string;
  listingId: string | undefined;
  from: string;
  to: string;
  guests: number;
}

export interface Payment {
  id: string;
  userId: string;
  reservationId: string;
  provider: "stripe" | "paypal";
  status: "pending" | "declined" | "completed" | "cancelled";
  amount: number;
  currency: string;
  createdAt: Date;
}

export interface CheckoutSession {
  sessionUrl: string;
}

export type CheckoutResult = "error" | "success" | "cancel";

export interface SearchResult {
  listings: CleanResults;
}

export interface CleanResults {
  data: Listing[];
}

export interface ListingsResult {
  attributes: Listing;
}
