import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { SeoService, SeoData } from './seo.service';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {
  constructor(private seo: SeoService) {
    super();
  }  
  override updateTitle(snapshot: RouterStateSnapshot): void {
    const seoData = this.buildTitle(snapshot) as unknown as SeoData;
    const route = this.getDeepestRoute(snapshot.root);
    if (route.data && route.data['seo']) {
      this.seo.update(route.data['seo']);
    }
  }
  private getDeepestRoute(route: any): any {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
