import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethaneComponent } from './methane.component';
import { DataService } from '../../services/data.service';
import { HtmlContentService } from '../../services/html-content.service';
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
    ]);
    const spyClientApi = jasmine.createSpyObj('ClientAPIService', ['getData']);

    await TestBed.configureTestingModule({
      declarations: [MethaneComponent],
      providers: [
        { provide: DataService, useValue: spyData },
        { provide: HtmlContentService, useValue: spyHtmlContent },
        { provide: ClientAPIService, useValue: spyClientApi },
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MethaneComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    htmlContentService = TestBed.inject(
      HtmlContentService,
    ) as jasmine.SpyObj<HtmlContentService>;
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
