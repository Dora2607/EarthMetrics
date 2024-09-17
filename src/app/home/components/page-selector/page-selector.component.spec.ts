import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSelectorComponent } from './page-selector.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home.component';
import { ImageDataService } from '../../../services/image-data.service';

describe('PageSelectorComponent', () => {
  let component: PageSelectorComponent;
  let fixture: ComponentFixture<PageSelectorComponent>;
  let imageData: jasmine.SpyObj<ImageDataService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('imageData', [
      'getImages',
    ])
    await TestBed.configureTestingModule({
      declarations: [PageSelectorComponent],
      imports: [CarouselModule, RouterModule, BrowserAnimationsModule],
      providers: [provideRouter([{ path: '', component: HomeComponent }]),
      { provide: imageData, useValue: spy }
    ],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSelectorComponent);
    component = fixture.componentInstance;
    imageData = TestBed.inject(ImageDataService) as jasmine.SpyObj<ImageDataService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call imageData on init',()=>{
    const imagesTest = [
      {
        imageSrc: '../../assets/img/Temperatura.jpg',
        imageAlt: 'Temperatura Grafico',
        imageTitle: 'Temperature Globali',
        imageDescription:
          'Mostra l’andamento delle temperature globali nel tempo',
        routerLink: '/pages/temperature'
      }]
    component.ngOnInit();
    expect(imageData.getImages);

  })


});
