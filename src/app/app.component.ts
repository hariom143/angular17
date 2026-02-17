import { Component } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { LoaderService } from './core/loader/loader.service';
import { LoaderComponent } from './loader/loader.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  template:`
  <app-loader></app-loader>
  <router-outlet></router-outlet>`
  //templateUrl: './app.component.html',
  //styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router, private loader: LoaderService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) this.loader.show();
      if (event instanceof NavigationEnd) this.loader.hide();
    });
  }
 }
