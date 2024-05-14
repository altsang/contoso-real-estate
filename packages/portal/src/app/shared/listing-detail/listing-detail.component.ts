import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Listing } from "../../../types"; // Corrected import for Listing

@Component({
  selector: "app-listing-detail",
  templateUrl: "./listing-detail.component.html",
  styleUrls: ["./listing-detail.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class ListingDetailComponent {
  @Input() listing!: Listing;
}
