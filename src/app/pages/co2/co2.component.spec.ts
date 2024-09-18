import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Co2Component } from './co2.component';
import { Co2Service } from '../../services/co2.service';
import { DataService } from '../../services/data.service';
import { ClientAPIService } from '../../services/client-api.service';
import { PLATFORM_ID } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Co2ApiResponse } from '../../models/co2Data.model';
import * as echarts from 'echarts';

describe('Co2Component', () => {
  let component: Co2Component;
  let fixture: ComponentFixture<Co2Component>;
  let dataService: jasmine.SpyObj<DataService>;
  let co2Service: jasmine.SpyObj<Co2Service>;
  let clientApi: jasmine.SpyObj<ClientAPIService>;

  beforeEach(async () => {
    const spyData = jasmine.createSpyObj('DataService', [
      'changeTitle',
      'changeContent',
      'changeLegend',
    ]);
    const spyCo2 = jasmine.createSpyObj('Co2Service', [
      'getCo2Paragraph',
      'getCo2Legend',
    ]);
    const spyClientApi = jasmine.createSpyObj('ClientAPIService', ['getData']);
    await TestBed.configureTestingModule({
      declarations: [Co2Component],
      providers: [
        { provide: DataService, useValue: spyData },
        { provide: Co2Service, useValue: spyCo2 },
        { provide: ClientAPIService, useValue: spyClientApi },
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Co2Component);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    co2Service = TestBed.inject(Co2Service) as jasmine.SpyObj<Co2Service>;
    clientApi = TestBed.inject(
      ClientAPIService,
    ) as jasmine.SpyObj<ClientAPIService>;
    const mockResponse: Co2ApiResponse = {
      co2: [
        {
          year: '2014',
          month: '2',
          day: '6',
          cycle: '398.19',
          trend: '396.64',
        },
        {
          year: '2014',
          month: '2',
          day: '7',
          cycle: '398.21',
          trend: '396.64',
        },
        {
          year: '2014',
          month: '2',
          day: '8',
          cycle: '398.23',
          trend: '396.65',
        },
      ],
    };
    clientApi.getData.and.returnValue(of(mockResponse));
    fixture.detectChanges();
  });

  beforeEach(() => {
    const chartDom = document.getElementById('co2Chart');
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
    const mockResponse: Co2ApiResponse = {
      co2: [
        {
          year: '2014',
          month: '2',
          day: '6',
          cycle: '398.19',
          trend: '396.64',
        },
        {
          year: '2014',
          month: '2',
          day: '7',
          cycle: '398.21',
          trend: '396.64',
        },
        {
          year: '2014',
          month: '2',
          day: '8',
          cycle: '398.23',
          trend: '396.65',
        },
      ],
    };

    dataService.changeTitle.and.callThrough();
    co2Service.getCo2Paragraph.and.returnValue('Mock Paragraph');
    dataService.changeContent.and.callThrough();
    co2Service.getCo2Legend.and.returnValue('Mock Legend');
    dataService.changeLegend.and.callThrough();
    clientApi.getData.and.returnValue(of(mockResponse));

    component.ngOnInit();

    expect(dataService.changeTitle).toHaveBeenCalledWith('Emissioni di CO2');
    expect(dataService.changeContent).toHaveBeenCalledWith('Mock Paragraph');
    expect(dataService.changeLegend).toHaveBeenCalledWith('Mock Legend');
    expect(component.co2Data).toEqual(mockResponse.co2);
  });

  it('should create co2 chart', () => {
    component.co2Data = [
      {
        year: '2014',
        month: '2',
        day: '6',
        cycle: '398.19',
        trend: '396.64',
      },
      {
        year: '2014',
        month: '2',
        day: '7',
        cycle: '398.21',
        trend: '396.64',
      },
      {
        year: '2014',
        month: '2',
        day: '8',
        cycle: '398.23',
        trend: '396.65',
      },
    ];

    spyOn(component, 'createCo2Chart').and.callThrough();
    component.ngOnInit();
    expect(component.createCo2Chart).toHaveBeenCalled();
    
  });
});
