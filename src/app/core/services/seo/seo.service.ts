import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {

  private readonly defaultImage = '/assets/default.jpg';
  private readonly siteName = 'My Website';

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  update(seo: SeoData) {
    const fullTitle = seo.title? `${seo.title} | ${this.siteName}`: this.siteName;

    this.title.setTitle(fullTitle);

    this.setTag('name', 'description', seo.description);
    this.setTag('name', 'keywords', seo.keywords);

    // Robots
    this.setTag(
      'name',
      'robots',
      seo.noIndex ? 'noindex, nofollow' : 'index, follow'
    );

    // Open Graph
    this.setTag('property', 'og:title', fullTitle);
    this.setTag('property', 'og:description', seo.description);
    this.setTag('property', 'og:image', seo.image || this.defaultImage);
    this.setTag('property', 'og:type', seo.type || 'website');
    this.setTag('property', 'og:url', this.document.URL);

    // Twitter
    this.setTag('name', 'twitter:card', 'summary_large_image');
    this.setTag('name', 'twitter:title', fullTitle);
    this.setTag('name', 'twitter:description', seo.description);
    this.setTag('name', 'twitter:image', seo.image || this.defaultImage);

    this.updateCanonical(this.document.URL);
  }

  private setTag(attr: 'name' | 'property', key: string, value?: string) {
    if (!value) return;
    this.meta.updateTag({ [attr]: key, content: value });
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement =
      this.document.querySelector("link[rel='canonical']") ||
      this.document.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);

    if (!this.document.head.contains(link)) {
      this.document.head.appendChild(link);
    }
  }
  
}
