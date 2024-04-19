import { inject } from "@angular/core";
import { CanMatchFn, Router } from "@angular/router";
import { AuthService } from "../../features/auth/services/auth.service";
import { map } from "rxjs";

export const noAuthGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn$.pipe(
    map((isLoggedIn) => (isLoggedIn ? router.createUrlTree(["/tasks"]) : true)),
  );
};
