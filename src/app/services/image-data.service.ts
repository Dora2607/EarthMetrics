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
      imageAlt: 'CO₂ Grafico',
      imageTitle: 'Emissioni di CO₂',
      imageDescription:
        'Illustra le emissioni di anidride carbonica (CO₂) nel corso degli anni.',
      routerLink: '/pages/co2'
    },
    {
      imageSrc: '../../assets/img/Metano.jpg',
      imageAlt: 'Metano Grafico',
      imageTitle: 'Emissioni di Metano',
      imageDescription: 'Rappresenta le emissioni di metano (CH₄) nel tempo.',
      routerLink: '/pages/methane'
    },
    {
      imageSrc: '../../assets/img/N2o.jpg',
      imageAlt: 'N₂O Grafico',
      imageTitle: 'Emissioni di N₂O',
      imageDescription:
        'Mostra le emissioni di protossido di azoto (N₂O) nel corso degli anni.',
      routerLink: '/pages/n2o'
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
