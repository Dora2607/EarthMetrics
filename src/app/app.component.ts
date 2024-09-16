import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('EarthMetrics');
    this.meta.addTags([
      {
        name: 'description',
        content:
          "EarthMetrics è un'applicazione per monitorare il cambiamento climatico attraverso dashboard interattive che visualizzano dati su temperature globali, CO2, metano, NO2 e ghiaccio polare.",
      },
      {
        name: 'keywords',
        content:
          'cambiamento climatico, temperature globali, CO2, metano, NO2, ghiaccio polare, monitoraggio ambientale, emissioni',
      },
      {
        property: 'og:title',
        content: 'EarthMetrics',
      },
      {
        property: 'og:description',
        content:
          'Il cambiamento climatico è una sfida urgente e complessa causata principalmente dalle attività umane, come l’emissione di gas serra e la deforestazione. È fondamentale parlarne per aumentare la consapevolezza, promuovere azioni concrete e informare le decisioni politiche e individuali.',
      },
      { property: 'og:image', content: '/' },
      { property: 'og:url', content: '/' },
    ]);
  }
}
