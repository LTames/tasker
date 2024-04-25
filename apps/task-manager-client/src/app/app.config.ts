import { provideAnimations } from "@angular/platform-browser/animations";
import {
  TuiDialogModule,
  TuiNotificationModule,
  TuiRootModule,
} from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { TitleStrategy, provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { jwtTokenInterceptor } from "./shared/interceptors/jwt-token.interceptor";
import { PageTitleStrategy } from "./config/page-title.strategy";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(TuiRootModule, TuiDialogModule, TuiNotificationModule),
    provideHttpClient(withInterceptors([jwtTokenInterceptor])),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
  ],
};
