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
        content: 'Benvenuto su EarthMetrics, l’applicazione web che ti offre una panoramica completa sui parametri chiave del cambiamento climatico. Attraverso grafici interattivi e dati aggiornati, EarthMetrics ti permette di esplorare l’evoluzione di fattori cruciali come la temperatura globale, le emissioni di CO2, N2O, metano e l’estensione del ghiaccio polare.',
      },
      {
        name: 'keywords',
        content:
          'cambiamento climatico, temperature globali, CO2, metano, N2o, ghiaccio polare, monitoraggio ambientale, emissioni',
      },
      {
        property: 'og:title',
        content: 'EarthMetrics',
      },
      {
        property: 'og:description',
        content: 'Benvenuto su EarthMetrics, l’applicazione web che ti offre una panoramica completa sui parametri chiave del cambiamento climatico. Attraverso grafici interattivi e dati aggiornati, EarthMetrics ti permette di esplorare l’evoluzione di fattori cruciali come la temperatura globale, le emissioni di CO2, N2O, metano e l’estensione del ghiaccio polare.',
      },
      { property: 'og:image', content: 'https://opengraph.b-cdn.net/production/images/f67d6850-ba3a-4f65-b0c3-c8cdc6106d66.png?token=UfHqnN_x3w5SIECoNI-KBg5CcSlrUgtt52XKH2ev-lU&height=830&width=800&expires=33263114268' },
      { property: 'og:url', content: 'https://earthmetrics-370b2.web.app/' },
    ]);
  }
}
