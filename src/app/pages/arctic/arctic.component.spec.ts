import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcticComponent } from './arctic.component';
import { DataService } from '../../services/data.service';
import { ClientAPIService } from '../../services/client-api.service';
import { PLATFORM_ID } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ArcticService } from '../../services/arctic.service';
import { ArcticApiResponse } from '../../models/arcticData.model';
import * as echarts from 'echarts';

describe('ArcticComponent', () => {
  let component: ArcticComponent;
  let fixture: ComponentFixture<ArcticComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let arcticService: jasmine.SpyObj<ArcticService>;
  let clientApi: jasmine.SpyObj<ClientAPIService>;

  beforeEach(async () => {
    const spyData = jasmine.createSpyObj('DataService', [
      'changeTitle',
      'changeContent',
      'changeLegend',
    ]);
    const spyArctic = jasmine.createSpyObj('ArcticService', [
      'getArcticParagraph',
      'getArcticLegend',
      'extractData',
    ]);
    const spyClientApi = jasmine.createSpyObj('ClientAPIService', ['getData']);
    await TestBed.configureTestingModule({
      declarations: [ArcticComponent],
      providers: [
        { provide: DataService, useValue: spyData },
        { provide: ArcticService, useValue: spyArctic },
        { provide: ClientAPIService, useValue: spyClientApi },
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArcticComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    arcticService = TestBed.inject(
      ArcticService,
    ) as jasmine.SpyObj<ArcticService>;
    clientApi = TestBed.inject(
      ClientAPIService,
    ) as jasmine.SpyObj<ClientAPIService>;
    const mockResponse: ArcticApiResponse = {
      error: null,
      arcticData: {
        data: {
          '197901': {
            value: 20.81,
            anom: 1.79,
            monthlyMean: 19.02,
          },
          '197902': {
            value: 19.32,
            anom: 1.37,
            monthlyMean: 17.95,
          },
          '197903': {
            value: 20.34,
            anom: 1.23,
            monthlyMean: 19.11,
          },
          '197904': {
            value: 22.94,
            anom: 1.67,
            monthlyMean: 21.27,
          },
        },
      },
    };
    const mockData = [
      {
        key: '01-1979',
        value: 20.81,
        anom: 1.79,
        monthlyMean: 19.02,
      },
      {
        key: '02-1979',
        value: 19.32,
        anom: 1.37,
        monthlyMean: 17.95,
      },
      {
        key: '03-1979',
        value: 20.34,
        anom: 1.23,
        monthlyMean: 19.11,
      },
      {
        key: '04-1979',
        value: 22.94,
        anom: 1.67,
        monthlyMean: 21.27,
      },
    ];
    clientApi.getData.and.returnValue(of(mockResponse));
    arcticService.extractData.and.returnValue(mockData);
    fixture.detectChanges();
  });

  beforeEach(() => {
    const chartDom = document.getElementById('arcticChart');
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
    const mockResponse: ArcticApiResponse = {
      error: null,
      arcticData: {
        data: {
          '197901': {
            value: 20.81,
            anom: 1.79,
            monthlyMean: 19.02,
          },
          '197902': {
            value: 19.32,
            anom: 1.37,
            monthlyMean: 17.95,
          },
          '197903': {
            value: 20.34,
            anom: 1.23,
            monthlyMean: 19.11,
          },
          '197904': {
            value: 22.94,
            anom: 1.67,
            monthlyMean: 21.27,
          },
        },
      },
    };
    const mockData = [
      {
        key: '01-1979',
        value: 20.81,
        anom: 1.79,
        monthlyMean: 19.02,
      },
      {
        key: '02-1979',
        value: 19.32,
        anom: 1.37,
        monthlyMean: 17.95,
      },
      {
        key: '03-1979',
        value: 20.34,
        anom: 1.23,
        monthlyMean: 19.11,
      },
      {
        key: '04-1979',
        value: 22.94,
        anom: 1.67,
        monthlyMean: 21.27,
      },
    ];

    dataService.changeTitle.and.callThrough();
    arcticService.getArcticParagraph.and.returnValue('Mock Paragraph');
    dataService.changeContent.and.callThrough();
    arcticService.getArcticLegend.and.returnValue('Mock Legend');
    dataService.changeLegend.and.callThrough();
    clientApi.getData.and.returnValue(of(mockResponse));

    component.ngOnInit();

    expect(dataService.changeTitle).toHaveBeenCalledWith(
      'Riduzione del Ghiaccio Polare',
    );
    expect(dataService.changeContent).toHaveBeenCalledWith('Mock Paragraph');
    expect(dataService.changeLegend).toHaveBeenCalledWith('Mock Legend');
    expect(component.arcticData).toEqual(mockData);
  });

  it('should create Arctic chart', () => {
    component.arcticData = [
      {
        key: '01-1979',
        value: 20.81,
        anom: 1.79,
        monthlyMean: 19.02,
      },
      {
        key: '02-1979',
        value: 19.32,
        anom: 1.37,
        monthlyMean: 17.95,
      },
      {
        key: '03-1979',
        value: 20.34,
        anom: 1.23,
        monthlyMean: 19.11,
      },
      {
        key: '04-1979',
        value: 22.94,
        anom: 1.67,
        monthlyMean: 21.27,
      },
    ];

    spyOn(component, 'createArcticChart').and.callThrough();
    component.ngOnInit();
    expect(component.createArcticChart).toHaveBeenCalled();
  });
});
