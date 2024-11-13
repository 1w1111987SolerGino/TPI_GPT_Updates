import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new BehaviorSubject<string>('light-theme');
  theme$ = this.theme.asObservable();

  toggleTheme(): void {
    if (this.theme.value === 'light-theme') {
      this.theme.next('dark-theme');
    } else {
      this.theme.next('light-theme');
    }
  }
}

