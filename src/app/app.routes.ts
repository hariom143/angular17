import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './core/auth/guards/auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [authGuard], 
    data: {
      seo: {
        title: 'Login Page',
        description: 'Welcome to our login',
        keywords: 'home, angular',
        image: '/assets/home.jpg'
      }
    }
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard],
    data: {
      seo: {
        title: 'Dashboard Page',
        description: 'Welcome to our Dashboard',
        keywords: 'home, angular',
        image: '/assets/home.jpg'
      }
    }
   }
];
