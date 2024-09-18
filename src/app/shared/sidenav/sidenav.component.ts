import { Component, ViewChild, WritableSignal } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {
  Theme,
  ThemeManagerService,
} from '../../services/theme-manager.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  theme: WritableSignal<Theme>;
  overlay!: boolean;
  constructor(private themeManager: ThemeManagerService) {
    this.theme = this.themeManager.theme;
  }
  toggleTheme() {
    this.themeManager.toggleTheme();
  }
}
