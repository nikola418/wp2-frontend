import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
  canActivate(role: number) {
    if (role === 0) {
      return true;
    }
    return false;
  }
}
