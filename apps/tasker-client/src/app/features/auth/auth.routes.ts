import { Routes } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

export const AUTH_ROUTES: Routes = [
  {
    path: "login",
    title: "Login",
    component: LoginPageComponent,
  },
  {
    path: "register",
    title: "Register",
    component: RegisterPageComponent,
  },
];
