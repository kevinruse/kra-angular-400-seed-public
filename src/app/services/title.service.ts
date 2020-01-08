import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  getTitle(): string {
    return 'Welcome to Angular Seed';
  }

  constructor() { }
}
