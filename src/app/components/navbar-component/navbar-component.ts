import { Component, Input, signal, inject, afterNextRender } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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

  private document = inject(DOCUMENT);
  isDark = signal(false);

  constructor() {
    afterNextRender(() => {
      this.isDark.set(this.document.documentElement.classList.contains('dark'));
    });
  }

  toggleTheme() {
    const dark = !this.isDark();
    this.isDark.set(dark);
    const root = this.document.documentElement;
    root.classList.toggle('dark', dark);
    root.style.colorScheme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
}