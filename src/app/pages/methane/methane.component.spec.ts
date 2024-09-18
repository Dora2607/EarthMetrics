import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethaneComponent } from './methane.component';
import { DataService } from '../../services/data.service';
import { MethaneService } from '../../services/methane.service';
import { ClientAPIService } from '../../services/client-api.service';
import { PLATFORM_ID } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MethaneApiResponse } from '../../models/methane.model';
import { of } from 'rxjs';
import * as echarts from 'echarts';

describe('MethaneComponent', () => {
  let component: MethaneComponent;
  let fixture: ComponentFixture<MethaneComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let methaneService: jasmine.SpyObj<MethaneService>;
  let clientApi: jasmine.SpyObj<ClientAPIService>;

  beforeEach(async () => {
    const spyData = jasmine.createSpyObj('DataService', [
      'changeTitle',
      'changeContent',
      'changeLegend',
    ]);
    const spyMethane = jasmine.createSpyObj('MethaneService', [
      'getMethaneParagraph',
      'getMethaneLegend',
    ]);
    const spyClientApi = jasmine.createSpyObj('ClientAPIService', ['getData']);

    await TestBed.configureTestingModule({
      declarations: [MethaneComponent],
      providers: [
        { provide: DataService, useValue: spyData },
        { provide: MethaneService, useValue: spyMethane },
        { provide: ClientAPIService, useValue: spyClientApi },
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MethaneComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    methaneService = TestBed.inject(
      MethaneService,
    ) as jasmine.SpyObj<MethaneService>;
    clientApi = TestBed.inject(
      ClientAPIService,
    ) as jasmine.SpyObj<ClientAPIService>;
    const mockResponse: MethaneApiResponse = {
      methane: [
        {
          date: '1984.11',
          average: '1653.79',
          trend: '1649.97',
          averageUnc: '0.96',
          trendUnc: '0.58',
        },
        {
          date: '1984.12',
          average: '1656.22',
          trend: '1651.06',
          averageUnc: '1.06',
          trendUnc: '0.58',
        },
        {
          date: '1985.1',
          average: '1655.62',
          trend: '1652.15',
          averageUnc: '0.96',
          trendUnc: '0.58',
        },
      ],
    };
    clientApi.getData.and.returnValue(of(mockResponse));
    fixture.detectChanges();
  });

  beforeEach(() => {
    const chartDom = document.getElementById('methaneChart');
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
    const mockResponse: MethaneApiResponse = {
      methane: [
        {
          date: '1984.11',
          average: '1653.79',
          trend: '1649.97',
          averageUnc: '0.96',
          trendUnc: '0.58',
        },
        {
          date: '1984.12',
          average: '1656.22',
          trend: '1651.06',
          averageUnc: '1.06',
          trendUnc: '0.58',
        },
        {
          date: '1985.1',
          average: '1655.62',
          trend: '1652.15',
          averageUnc: '0.96',
          trendUnc: '0.58',
        },
      ],
    };

    dataService.changeTitle.and.callThrough();
    methaneService.getMethaneParagraph.and.returnValue('Mock Paragraph');
    dataService.changeContent.and.callThrough();
    methaneService.getMethaneLegend.and.returnValue('Mock Legend');
    dataService.changeLegend.and.callThrough();
    clientApi.getData.and.returnValue(of(mockResponse));

    component.ngOnInit();

    expect(dataService.changeTitle).toHaveBeenCalledWith('Emissioni di Metano');
    expect(dataService.changeContent).toHaveBeenCalledWith('Mock Paragraph');
    expect(dataService.changeLegend).toHaveBeenCalledWith('Mock Legend');
    expect(component.methaneData).toEqual(mockResponse.methane);
  });

  it('should create methane chart', () => {
    component.methaneData = [
      {
        date: '1984.11',
        average: '1653.79',
        trend: '1649.97',
        averageUnc: '0.96',
        trendUnc: '0.58',
      },
      {
        date: '1984.12',
        average: '1656.22',
        trend: '1651.06',
        averageUnc: '1.06',
        trendUnc: '0.58',
      },
      {
        date: '1985.1',
        average: '1655.62',
        trend: '1652.15',
        averageUnc: '0.96',
        trendUnc: '0.58',
      },
    ];

    spyOn(component, 'createMethaneChart').and.callThrough();
    component.ngOnInit();
    expect(component.createMethaneChart).toHaveBeenCalled();
  });
});
