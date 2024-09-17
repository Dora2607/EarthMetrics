import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';
import { ChangeDetectorRef } from '@angular/core';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('dataService', [
      'currentTitle',
      'currentContent',
      'currentLegend',
    ]);
    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
      imports: [RouterModule],
      providers: [{ provide: dataService, useValue: spy }, ChangeDetectorRef],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update currentTitle on init', () => {
    const testTitle = 'NewTitle';
    component.ngOnInit(); 
    dataService.changeTitle(testTitle);
    fixture.detectChanges(); 
    expect(component.currentTitle).toBe(testTitle); 
  });

  it('should update currentContent on init', () => {
    const testContent = 'NewContent';
    component.ngOnInit(); 
    dataService.changeContent(testContent);
    fixture.detectChanges(); 
    expect(component.currentContent).toBe(testContent); 
  });

  it('should update currentLegend on init', () => {
    const testLegend = 'NewLegend';
    component.ngOnInit(); 
    dataService.changeLegend(testLegend);
    fixture.detectChanges(); 
    expect(component.currentLegend).toBe(testLegend); 
  });

  it('should call unsubscribe on destroy',()=>{
    const unsubscribeSpy = spyOn(component['unsubscribe$'], 'next');
    const completeSpy = spyOn(component['unsubscribe$'],'complete');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  })

});
