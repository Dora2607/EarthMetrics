import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  currentContent!: string;
  currentChart!: string;

  onContentReceived(content: string): void {
    this.currentContent = content;
  }

  onChartReceived(chart: string): void {
    this.currentChart = chart;
  }
}
