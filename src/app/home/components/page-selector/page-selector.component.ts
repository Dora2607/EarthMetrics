import { Component, OnInit } from '@angular/core';
import { HomeImages } from '../../../models/homeImages.model';
import { ImageDataService } from '../../../services/image-data.service';


@Component({
  selector: 'app-page-selector',
  templateUrl: './page-selector.component.html',
  styleUrl: './page-selector.component.scss'
})
export class PageSelectorComponent implements OnInit{

  images: HomeImages[]=[];

  constructor(private imageData: ImageDataService){}

  ngOnInit(): void {
      this.images = this.imageData.getImages();
  }

}
