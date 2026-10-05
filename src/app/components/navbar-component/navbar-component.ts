import { Component, Input, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

interface IndividualNavItem {
  hrefId: string;
  title: string;
}

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule],
  selector: 'navbar-component',
  templateUrl: './navbar-component.html',
})
export class NavbarComponent {
  @Input() navbarItems: IndividualNavItem[] = [];

  isDark = signal(document.documentElement.classList.contains('dark'));

  toggleTheme() {
    const dark = !this.isDark();
    this.isDark.set(dark);
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
}
