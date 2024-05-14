import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HomepageComponent } from "./homepage.component";

describe("HomepageComponent", () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    // Mock IntersectionObserver
    class MockIntersectionObserver {
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = jest.fn();
    }

    // Assign the mock to the window object with the correct type signature
    window.IntersectionObserver = MockIntersectionObserver as any;

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatButtonModule,
        MatDividerModule,
        HomepageComponent // Import HomepageComponent directly as it is standalone
      ],
      declarations: [
        // Removed HomepageComponent from declarations as it is standalone
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
