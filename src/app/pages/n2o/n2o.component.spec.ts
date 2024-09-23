import { ComponentFixture, TestBed } from '@angular/core/testing';
import { N2oComponent } from './n2o.component';
import { DataService } from '../../services/data.service';
import { HtmlContentService } from '../../services/html-content.service';
import { ClientAPIService } from '../../services/client-api.service';
import { PLATFORM_ID } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { N2oApiResponse } from '../../models/n2oData.model';
import { of } from 'rxjs';
import * as echarts from 'echarts';

describe('N2oComponent', () => {
  let component: N2oComponent;
  let fixture: ComponentFixture<N2oComponent>;
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
      declarations: [N2oComponent],
      providers: [
        { provide: DataService, useValue: spyData },
        { provide: HtmlContentService, useValue: spyHtmlContent },
        { provide: ClientAPIService, useValue: spyClientApi },
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(N2oComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    htmlContentService = TestBed.inject(
      HtmlContentService,
    ) as jasmine.SpyObj<HtmlContentService>;
    clientApi = TestBed.inject(
      ClientAPIService,
    ) as jasmine.SpyObj<ClientAPIService>;
    const mockResponse: N2oApiResponse = {
      nitrous: [
        {
          date: '2002.5',
          average: '316.85',
          trend: '316.88',
          averageUnc: '0.14',
          trendUnc: '0.13',
        },
        {
          date: '2002.6',
          average: '316.83',
          trend: '316.92',
          averageUnc: '0.14',
          trendUnc: '0.13',
        },
        {
          date: '2002.7',
          average: '316.82',
          trend: '316.95',
          averageUnc: '0.14',
          trendUnc: '0.14',
        },
      ],
    };
    clientApi.getData.and.returnValue(of(mockResponse));
    fixture.detectChanges();
  });

  beforeEach(() => {
    const chartDom = document.getElementById('n2oChart');
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
    const mockResponse: N2oApiResponse = {
      nitrous: [
        {
          date: '2002.5',
          average: '316.85',
          trend: '316.88',
          averageUnc: '0.14',
          trendUnc: '0.13',
        },
        {
          date: '2002.6',
          average: '316.83',
          trend: '316.92',
          averageUnc: '0.14',
          trendUnc: '0.13',
        },
        {
          date: '2002.7',
          average: '316.82',
          trend: '316.95',
          averageUnc: '0.14',
          trendUnc: '0.14',
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
    expect(component.no2Data).toEqual(mockResponse.nitrous);
  });

  it('should create n2o chart', () => {
    component.no2Data = [
      {
        date: '2002.5',
        average: '316.85',
        trend: '316.88',
        averageUnc: '0.14',
        trendUnc: '0.13',
      },
      {
        date: '2002.6',
        average: '316.83',
        trend: '316.92',
        averageUnc: '0.14',
        trendUnc: '0.13',
      },
      {
        date: '2002.7',
        average: '316.82',
        trend: '316.95',
        averageUnc: '0.14',
        trendUnc: '0.14',
      },
    ];

    spyOn(component, 'createN2oChart').and.callThrough();

    component.ngOnInit();

    expect(component.createN2oChart).toHaveBeenCalled();
  });
});
