import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import {
  _provideAuth,
  LogLevel,
  OpenIdConfiguration,
  PassedInitialConfig, provideAuth,
  StsConfigHttpLoader, StsConfigLoader
} from 'angular-auth-oidc-client';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const defaultConfiguration: OpenIdConfiguration = {
    authority: '',
    clientId: '',
    logLevel: LogLevel.Debug,
    postLogoutRedirectUri: window.location.origin,
    redirectUrl: window.location.origin,
    responseType: 'code',
    scope: 'openid profile email offline_access',
    silentRenew: true,
    triggerAuthorizationResultEvent: true,
    useRefreshToken: true
};

const identityServerConfigurationLoaderFactory = (httpClient: HttpClient) => {
  const config$ = httpClient.get<any>(`https://...`).pipe(
    map((customConfig: any) => {
      return ({
        ...defaultConfiguration,
        authority: customConfig.identityServerEndpoint,
        clientId: customConfig.identityServerClientId
      });
    })
  );

  return new StsConfigHttpLoader(config$);
};

export function provideAuthorization(): EnvironmentProviders {
  return provideAuth({
      loader: {
        provide: StsConfigLoader,
        useFactory: identityServerConfigurationLoaderFactory,
        deps: [
          HttpClient
        ]
      }
    });
}
