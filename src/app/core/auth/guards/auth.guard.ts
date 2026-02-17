import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot  } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = authService.isLoggedIn();  
 if (state.url === '/login') {
    return isLoggedIn ? router.parseUrl('/dashboard') : true;
  }
  // For other protected routes
  return isLoggedIn ? true : router.parseUrl('/login');
}
