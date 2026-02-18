import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { TitleStrategy } from '@angular/router';
import { AppTitleStrategy } from './app/core/services/seo/app-title.strategy';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    { provide: TitleStrategy, useClass: AppTitleStrategy }
]
}).catch(err => console.error(err));