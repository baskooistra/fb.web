import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'fb-authorization',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ OidcSecurityService ],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css',
})
export class AuthorizationComponent implements OnInit {
  authenticated$: Observable<boolean>;
  private readonly oidcSecurityService = inject(OidcSecurityService);

  constructor() {
    this.authenticated$ = this.oidcSecurityService.isAuthenticated();
  }

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const { isAuthenticated, userData, accessToken, idToken, configId } =
          loginResponse;

        console.log({
          isAuthenticated,
          userData,
          accessToken,
          idToken,
          configId
        });
      });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
  }
}
