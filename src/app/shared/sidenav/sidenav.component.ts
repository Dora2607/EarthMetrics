import { Component, inject, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ThemeManagerService } from '../../services/theme-manager.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  overlay!: boolean;
  private themeManager = inject(ThemeManagerService);
  theme = this.themeManager.theme;

  toggleTheme() {
    this.themeManager.toggleTheme();
  }
}
