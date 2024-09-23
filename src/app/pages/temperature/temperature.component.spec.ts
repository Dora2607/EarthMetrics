import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureComponent } from './temperature.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DataService } from '../../services/data.service';
import { HtmlContentService } from '../../services/html-content.service';
import { ClientAPIService } from '../../services/client-api.service';
import { PLATFORM_ID } from '@angular/core';
import { of } from 'rxjs';
import { TemperatureApiResponse } from '../../models/temperatureData.model';
import * as echarts from 'echarts';

describe('TemperatureComponent', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let htmlContentService: jasmine.SpyObj<HtmlContentService>;
  let clientApi: jasmine.SpyObj<ClientAPIService>;

  beforeEach(async () => {
    const spyData = jasmine.createSpyObj('DataService', [
      'changeTitle',
      'changeContent',
      'changeLegend',
    ]);
    const spyHtmlContent = jasmine.createSpyObj('HtmlContentService', [
      'getHtmlContent',
      'convertTime',
    ]);
    const spyClientApi = jasmine.createSpyObj('ClientAPIService', ['getData']);

    await TestBed.configureTestingModule({
      declarations: [TemperatureComponent],

      providers: [
        { provide: DataService, useValue: spyData },
        { provide: HtmlContentService, useValue: spyHtmlContent },
        { provide: ClientAPIService, useValue: spyClientApi },
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TemperatureComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    htmlContentService = TestBed.inject(
      HtmlContentService,
    ) as jasmine.SpyObj<HtmlContentService>;
    clientApi = TestBed.inject(
      ClientAPIService,
    ) as jasmine.SpyObj<ClientAPIService>;
    const mockResponse: TemperatureApiResponse = {
      result: [
        {
          time: '1880.04',
          station: '-0.28',
          land: '-0.20',
        },
        {
          time: '1880.13',
          station: '-0.46',
          land: '-0.25',
        },
        {
          time: '1880.21',
          station: '-0.31',
          land: '-0.09',
        },
        {
          time: '1880.29',
          station: '-0.51',
          land: '-0.16',
        },
      ],
      error: null,
    };
    clientApi.getData.and.returnValue(of(mockResponse));
    htmlContentService.convertTime.and.callFake((time: string) => time);
    fixture.detectChanges();
  });

  beforeEach(() => {
    const chartDom = document.getElementById('temperatureChart');
    if (chartDom) {
      const existingChart = echarts.getInstanceByDom(chartDom);
      if (existingChart) {
        existingChart.dispose();
      }
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data on ngOnInit', () => {
    const mockResponse: TemperatureApiResponse = {
      result: [
        {
          time: '1880.04',
          station: '-0.28',
          land: '-0.20',
        },
        {
          time: '1880.13',
          station: '-0.46',
          land: '-0.25',
        },
        {
          time: '1880.21',
          station: '-0.31',
          land: '-0.09',
        },
        {
          time: '1880.29',
          station: '-0.51',
          land: '-0.16',
        },
      ],
      error: null,
    };

    const fakeContent = {
      title: 'Fake Title',
      paragraph: 'Fake Paragraph',
      legend: 'Fake Legend',
    };

    htmlContentService.getHtmlContent.and.returnValue(fakeContent);
    dataService.changeTitle.and.callThrough();
    dataService.changeContent.and.callThrough();
    dataService.changeLegend.and.callThrough();
    clientApi.getData.and.returnValue(of(mockResponse));
    component.ngOnInit();
    expect(dataService.changeTitle).toHaveBeenCalledWith('Fake Title');
    expect(dataService.changeContent).toHaveBeenCalledWith('Fake Paragraph');
    expect(dataService.changeLegend).toHaveBeenCalledWith('Fake Legend');
    expect(component.temperatureData).toEqual(mockResponse.result);
  });

  it('should create temperature chart', () => {
    component.temperatureData = [
      { time: '1880.04', station: '-0.28', land: '-0.20' },
      { time: '1880.13', station: '-0.46', land: '-0.25' },
      { time: '1880.21', station: '-0.31', land: '-0.09' },
      { time: '1880.29', station: '-0.51', land: '-0.16' },
    ];

    spyOn(component, 'createTemperatureChart').and.callThrough();

    component.ngOnInit();

    expect(component.createTemperatureChart).toHaveBeenCalled();
  });
});
