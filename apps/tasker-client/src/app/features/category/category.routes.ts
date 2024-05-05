import { Routes } from "@angular/router";
import { CategoryListPageComponent } from "./pages/category-list-page/category-list-page.component";

export const CATEGORY_ROUTES: Routes = [
  {
    path: "",
    title: "Categories",
    component: CategoryListPageComponent,
  },
];
