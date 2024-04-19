import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import {
  TuiCardModule,
  TuiHeaderModule,
  TuiSurfaceModule,
  TuiTitleModule,
} from "@taiga-ui/experimental";

@Component({
  selector: "credentials-form-wrapper",
  standalone: true,
  imports: [TuiSurfaceModule, TuiCardModule, TuiHeaderModule, TuiTitleModule],
  templateUrl: "./credentials-form-wrapper.component.html",
  styleUrl: "./credentials-form-wrapper.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CredentialsFormWrapperComponent {
  @Input({ required: true }) header: string = "";
}
