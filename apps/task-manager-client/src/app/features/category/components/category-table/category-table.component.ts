import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { Category, CategoryOperationStatus } from "../../interfaces/category";
import { TuiTableModule } from "@taiga-ui/addon-table";
import { TuiLetModule } from "@taiga-ui/cdk";
import {
  AsyncPipe,
  JsonPipe,
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
} from "@angular/common";
import {
  TuiButtonGroupModule,
  TuiButtonModule,
  TuiButtonVerticalModule,
  TuiCardModule,
  TuiSurfaceModule,
} from "@taiga-ui/experimental";
import {
  TuiHintModule,
  TuiLoaderModule,
  TuiScrollbarModule,
  TuiSvgModule,
} from "@taiga-ui/core";

@Component({
  selector: "category-table",
  standalone: true,
  imports: [
    TuiTableModule,
    TuiLetModule,
    NgFor,
    TuiButtonModule,
    TuiButtonVerticalModule,
    TuiButtonGroupModule,
    TuiSurfaceModule,
    TuiSvgModule,
    TuiCardModule,
    TuiHintModule,
    NgStyle,
    NgIf,
    AsyncPipe,
    NgClass,
    JsonPipe,
    TuiScrollbarModule,
    TuiLoaderModule,
  ],
  templateUrl: "./category-table.component.html",
  styleUrl: "./category-table.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryTableComponent {
  @Input({ required: true }) categories!: Category[] | null;
  @Input({ required: true }) selectedCategory!: Category | null;
  @Input({ required: true }) categoryStatus!: CategoryOperationStatus;

  @Output() categoryDelete = new EventEmitter<Category>();
  @Output() categorySelected = new EventEmitter<Category>();

  readonly columns = ["id", "name", "color", "actions"];

  public selectRow(category: Category) {
    this.categorySelected.emit(category);
  }

  public deleteCategory(category: Category, event: Event) {
    event.stopPropagation();
    this.categoryDelete.emit(category);
  }
}
