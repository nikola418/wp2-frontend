import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const canActivateAdmin: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  if (inject(AuthService).canActivate(1)) return true;
  router.navigate(['/']);
  return false;
};
