import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
// Assuming StageType is defined in the types directory, the correct relative path needs to be used
import { StageType } from "../../../types";

@Component({
  selector: "app-hero-stage",
  templateUrl: "./hero-stage.component.html",
  styleUrls: ["./hero-stage.component.scss"],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class HeroStageComponent {
  @Input()
  stage!: StageType | null;
}
