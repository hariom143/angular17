import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ import CommonModule for *ngIf
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/services/auth.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  //styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();          // clear login state
    this.router.navigate(['/login']);   // redirect to login page
  }
}
