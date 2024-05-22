import { Injectable, inject } from "@angular/core";
import { WindowService } from "../core/window/window.service";
import { RealtimeService } from "./realtime.service";
import { Listing, ReservationRequest, CheckoutSession } from "../../types"; // Corrected import for Listing, ReservationRequest, and CheckoutSession

@Injectable({
  providedIn: "root",
})
export class ListingService {
  private windowService = inject(WindowService);
  private realtimeService = inject(RealtimeService);

  async getListings({ limit = 10, offset = 0 } = {}): Promise<Listing[]> {
    try {
      const resource = await fetch(`/api/listings?limit=${limit}&offset=${offset}`).then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Error while fetching all listings");
      });
      return resource;
    } catch (error) {
      console.error("Error fetching listings:", error);
      // Return mock data or an empty array when running locally
      return [];
    }
  }

  async getFeaturedListings({ limit = 10, offset = 0 } = {}): Promise<Listing[]> {
    try {
      // TODO: prevent loading the same listings multiple times when we hit the end of the list
      const resource = await fetch(`/api/listings?limit=${limit}&offset=${offset}&featured=true`).then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Error while fetching featured listings");
      });
      return resource;
    } catch (error) {
      console.error("Error fetching featured listings:", error);
      // Return mock data or an empty array when running locally
      return [];
    }
  }

  async getListingById(id: string): Promise<Listing | undefined> {
    try {
      const resource = await fetch(`/api/listings/${id}`).then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Error while fetching requested listing");
      });
      return resource;
    } catch (error) {
      console.error("Error fetching listing by ID:", error);
      // Return undefined when running locally
      return undefined;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async share(platform: string, listing: Listing) {
    const rent = listing.fees.at(0);
    const currency = listing.fees.at(-1);
    const currentWindowUrl = window.location.href;
    const socialMediaUrls = {
      twitter:
        `http://twitter.com/share?text=Checkout+this+cool+apartment+I+found+in+${listing.address.at(
          4,
        )}+on+Contoso+Rental+at+${currency}${rent}/month` +
        `&url=` +
        currentWindowUrl +
        `&hashtags=renting,apartment`,
      facebook:
        `https://www.facebook.com/sharer/sharer.php?title=Checkout+this+cool+apartment+I+found+in+${listing.address.at(
          4,
        )}+on+Contoso+Rental+at+${currency}${rent}/month` +
        `&u=` +
        currentWindowUrl,
    };
    const { twitter, facebook } = socialMediaUrls;
    if (platform && platform === "facebook") {
      const shareUrl = facebook;
      this.windowService.nativeWindow().open(shareUrl);
    } else if (platform && platform === "twitter") {
      const shareUrl = twitter;
      this.windowService.nativeWindow().open(shareUrl);
    }
  }

  async reserve(reservationDetails: ReservationRequest): Promise<CheckoutSession> {
    console.log("reservationDetails = ", reservationDetails)
    const resource = await fetch(`/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationDetails),
    });
    const checkoutSession = await resource.json();
    if (resource.status !== 200) {
      throw new Error(checkoutSession.error);
    }
    const listing = await this.getListingById(reservationDetails.listingId ?? "");
    if (listing) {
      this.realtimeService.broadcastCheckoutNotification(listing, reservationDetails.from, reservationDetails.to);
    }
    else {
      console.log(`Invalid reservationDetails.listingId = ${reservationDetails.listingId}`);
    }
    return checkoutSession;
  }
}
