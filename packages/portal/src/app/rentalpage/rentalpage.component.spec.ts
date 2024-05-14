import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MatMenuModule } from "@angular/material/menu";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RentalpageComponent } from "./rentalpage.component";
import { BehaviorSubject } from "rxjs";
import { Listing } from "../../types"; // Corrected import path for Listing type

describe("RentalpageComponent", () => {
  let component: RentalpageComponent;
  let fixture: ComponentFixture<RentalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'rental/:id', component: RentalpageComponent }
        ]),
        CommonModule,
        MatMenuModule,
        NoopAnimationsModule, // Added NoopAnimationsModule to imports for testing animations
        RentalpageComponent // Moved RentalpageComponent to imports as it is a standalone component
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(RentalpageComponent);
    component = fixture.componentInstance;
    // Mock the listing data expected by the component using a BehaviorSubject
    component.listing = new BehaviorSubject<Listing>({
      id: '123',
      title: 'Test Listing',
      slug: 'test-listing',
      createdAt: '2021-01-01T00:00:00Z',
      bathrooms: 1,
      bedrooms: 2,
      description: 'A description of the test listing',
      type: 'Test Type',
      isFeatured: false,
      isRecommended: false,
      photos: ['photo1.jpg'],
      capacity: 4,
      ammenities: ['Amenity1'], // Corrected spelling to match the Listing interface
      reviews_stars: 3,
      reviews_number: 5,
      address: ['123 Test St'],
      fees: ['1000', '150', '500', '0', '0', 'USD$'], // Updated fees array with valid string values and added currency code and symbol
      $$isFavorited: false
    });
    fixture.detectChanges(); // Trigger initial data binding
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
