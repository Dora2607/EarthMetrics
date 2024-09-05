import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Co2Service } from '../../services/co2.service';
import { Co2ApiResponse, Co2Data } from '../../models/co2Data.model';
import { ClientAPIService } from '../../services/client-api.service';
import * as echarts from 'echarts';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-co2',
  templateUrl: './co2.component.html',
  styleUrl: './co2.component.scss',
})
export class Co2Component implements OnInit {
  titleCo2 = 'Emissioni di CO2';
  contentCo2!: string;
  co2Data: Co2Data[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartOption: any;

  constructor(
    private dataService: DataService,
    private Co2Service: Co2Service,
    private clientApi: ClientAPIService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleCo2);
    this.contentCo2 = this.Co2Service.co2Paragraph;
    this.dataService.changeContent(this.contentCo2);
    this.clientApi.getCo2Data().subscribe((response: Co2ApiResponse) => {
      this.co2Data = response.co2;
      if (isPlatformBrowser(this.platformId)) {
        this.createChart();
      }
    });
  }

  createChart() {
    if (isPlatformBrowser(this.platformId)) {
      const chartDom = document.getElementById('echart');
      const myChart = echarts.init(chartDom, null, {
        width: 'auto',
        height: 'auto'
      });
      const dates = this.co2Data.map(
        (data) => `${data.day}-${data.month}-${data.year}`,
      );
      const cycles = this.co2Data.map((data) => data.cycle);
      const trends = this.co2Data.map((data) => data.trend);

      this.chartOption = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Cycle', 'Trend'],
          padding: [0, 40],
        },
        xAxis: {
          type: 'category',
          data: dates,
        },
        yAxis: {
          name: 'CO2 Levels (ppm)',
          min: 350,
          max: 450,
          axisLabel: {
            formatter: '{value}',
          },
        },
        series: [
          {
            name: 'Cycle',
            type: 'line',
            data: cycles,
            showSymbol: false,
            encode: {
              x: 'Year',
              y: 'Cycle',
              itemName: 'Year',
              tooltip: ['Cycle'],
            },
          },
          {
            name: 'Trend',
            type: 'line',
            data: trends,
            showSymbol: false,
            encode: {
              x: 'Year',
              y: 'Trend',
              itemName: 'Year',
              tooltip: ['Trend'],
            },
          },
        ],
      };
      myChart.setOption(this.chartOption);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  }
}
