import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private storageKey = 'isLoggedIn';
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123456') {
      if (this.isBrowser()) {
        localStorage.setItem(this.storageKey, 'true');
      }
      return true;
    }
    return false;    
  }
  logout(): void {
      if (this.isBrowser()) {
      localStorage.removeItem(this.storageKey);
    }
  }
  isLoggedIn(): boolean {
    if (!this.isBrowser()) return false; // server or test environment
    return localStorage.getItem(this.storageKey) === 'true';
  }
}
