import { Component, OnInit } from '@angular/core';
import { HomeImages } from '../../../models/homeImages.model';
import { ImageDataService } from '../../../services/image-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-page-selector',
  templateUrl: './page-selector.component.html',
  styleUrl: './page-selector.component.scss',
})
export class PageSelectorComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    margin: 40,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        nav: false,
        dots: true,
      },
      600: {
        items: 2,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        nav: false,
        dots: true,
      },
      960: {
        items: 2,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        nav: true,
        dots: false,
      },
      1280: {
        items: 3,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        nav: true,
        dots: false,
      },
    },
  };

  images: HomeImages[] = [];

  constructor(private imageData: ImageDataService) {}

  ngOnInit(): void {
    this.images = this.imageData.getImages();
  }
}
