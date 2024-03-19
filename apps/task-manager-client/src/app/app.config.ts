import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtTokenInterceptor } from './shared/interceptors/jwt-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(TuiRootModule, TuiAlertModule, TuiDialogModule),
    provideHttpClient(withInterceptors([jwtTokenInterceptor])),
  ],
};
