import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAuthorization } from '@fb/authorization';
import { BACKEND_URL } from '@fb/core';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAuthorization(),
    {
      provide: BACKEND_URL,
      useFactory: () => environment.backendApiUrl
    }
  ]
};
