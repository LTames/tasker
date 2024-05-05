import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TuiButtonModule } from "@taiga-ui/experimental";

@Component({
  selector: "home-page",
  standalone: true,
  imports: [TuiButtonModule, RouterLink],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
