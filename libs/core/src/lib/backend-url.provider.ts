import { Inject, Injectable } from '@angular/core';
import { BACKEND_URL } from './fb.constants';

@Injectable({
  providedIn: 'root',
  deps: [
    BACKEND_URL
  ]
})
export class BackendUrlProvider {
  constructor(@Inject(BACKEND_URL) private readonly backendUrl: string) {
  }

  public url = this.backendUrl;
}
