import { Injectable } from '@angular/core';
import { HomeImages } from '../models/homeImages.model';

@Injectable({
  providedIn: 'root',
})
export class ImageDataService {
  private images = [
    {
      imageSrc: '../../assets/img/Temperatura.jpg',
      imageAlt: 'Temperatura Grafico',
      imageTitle: 'Temperature Globali',
      imageDescription:
        'Mostra l’andamento delle temperature globali nel tempo',
      routerLink: '/pages/temperature'
    },
    {
      imageSrc: '../../assets/img/Co2.jpg',
      imageAlt: 'Co2 Grafico',
      imageTitle: 'Emissioni di CO2',
      imageDescription:
        'Illustra le emissioni di anidride carbonica (CO2) nel corso degli anni.',
      routerLink: '/pages/co2'
    },
    {
      imageSrc: '../../assets/img/Metano.jpg',
      imageAlt: 'Metano Grafico',
      imageTitle: 'Emissioni di Metano',
      imageDescription: 'Rappresenta le emissioni di metano (CH4) nel tempo.',
      routerLink: '/pages/methane'
    },
    {
      imageSrc: '../../assets/img/No2.jpg',
      imageAlt: 'No2 Grafico',
      imageTitle: 'Emissioni di NO2',
      imageDescription:
        'Mostra le emissioni di ossido di azoto (NO2) nel corso degli anni.',
      routerLink: '/pages/no2'
    },
    {
      imageSrc: '../../assets/img/Ghiaccio Polare.jpg',
      imageAlt: 'Ghiaccio Polare Grafico',
      imageTitle: 'Ghiaccio Polare',
      imageDescription: 'Illustra la riduzione del ghiaccio polare nel tempo.',
      routerLink: '/pages/arctic'
    },
  ];

  getImages(): HomeImages[] {
    return this.images;
  }
}
