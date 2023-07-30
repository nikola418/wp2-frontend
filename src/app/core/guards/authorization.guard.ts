import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const canActivateAdmin: CanActivateFn = async (route, state) => {
  const router: Router = inject(Router);
  const res = await inject(AuthService).isAdmin();
  if (res) return true;
  router.navigate(['/home']);
  return false;
};
