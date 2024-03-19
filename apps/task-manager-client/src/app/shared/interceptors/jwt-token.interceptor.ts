import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../features/auth/services/auth.service';

export const jwtTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const jwt = authService.token;

  if (!jwt) {
    return next(req);
  }

  const reqClone = req.clone({
    setHeaders: { Authorization: `Bearer ${jwt}` },
  });

  return next(reqClone);
};
