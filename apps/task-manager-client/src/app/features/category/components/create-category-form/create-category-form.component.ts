import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Category, CreateCategory } from "../../interfaces/category";
import { TuiInputModule } from "@taiga-ui/kit";
import {
  TuiButtonModule,
  TuiCardModule,
  TuiSurfaceModule,
} from "@taiga-ui/experimental";

@Component({
  selector: "create-category-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiInputModule,
    TuiCardModule,
    TuiSurfaceModule,
    TuiButtonModule,
  ],
  templateUrl: "./create-category-form.component.html",
  styleUrl: "./create-category-form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCategoryFormComponent implements OnChanges {
  private readonly formBuilder = inject(FormBuilder);

  @Output() categorySubmit = new EventEmitter<CreateCategory>();
  @Output() cancel = new EventEmitter<void>();
  @Input() category: Category | null = null;
  @Input({ required: true }) saving = false;

  public readonly categoryForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.maxLength(32)]],
    color: ["", Validators.required],
  });

  public get categoryFormHeader() {
    return this.category
      ? `Editing category with ID: ${this.category.id}`
      : "Add a new category";
  }

  ngOnChanges({ category }: SimpleChanges) {
    const categoryValue = category.currentValue;

    if (categoryValue) {
      this.categoryForm.patchValue(categoryValue);
    }
  }

  public submitCategory() {
    this.categorySubmit.emit(this.categoryForm.value as CreateCategory);
  }

  public cancelSubmit() {
    this.cancel.emit();
  }
}
