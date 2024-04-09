import { EnvironmentProviders } from '@angular/core';
import { LogLevel, OpenIdConfiguration, provideAuth, StsConfigHttpLoader, StsConfigLoader } from 'angular-auth-oidc-client';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { AuthConfiguration } from './auth.configuration';

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

const identityServerConfigurationLoaderFactory = (httpClient: HttpClient, BACKEND_URL: string) => {
  const url = `${BACKEND_URL}/api/configuration`;
  const config$ = httpClient.get<AuthConfiguration>(url).pipe(
    map((customConfig: AuthConfiguration) => {
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
