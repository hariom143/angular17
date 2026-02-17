import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ import CommonModule for *ngIf
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/services/auth.service';
import { LoaderService } from '../core/loader/loader.service';
import { LoaderComponent } from '../loader/loader.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, LoaderComponent], // ✅ include CommonModule
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  message = '';
  private storage: { [key: string]: string } = {};
  constructor(
    private router: Router,
    private authService: AuthService,
    private loader: LoaderService
) {}
  login() { 
    this.loader.show(); // show loader
  setTimeout(() => {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.message = 'Invalid username or password';
    }
    this.loader.hide(); // hide loader
  }, 500); // simulate async login
}
ngOnInit(): void {
  this.loader.show();

  setTimeout(() => {   // simulate page/data load
    this.loader.hide(); // hide loader after loading is done
  }, 500);
}

}
