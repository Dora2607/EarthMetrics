import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MethaneService } from '../../services/methane.service';
import { MethaneApiResponse, MethaneData } from '../../models/methane.model';
import { ClientAPIService } from '../../services/client-api.service';
import * as echarts from 'echarts';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-methane',
  templateUrl: './methane.component.html',
  styleUrl: './methane.component.scss',
})
export class MethaneComponent implements OnInit {
  titleMethane = 'Emissioni di Metano';
  contentMethane!: string;
  apiType = 'methane';
  legendMethane!: string;
  methaneData: MethaneData[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartOption: any;

  constructor(
    private dataService: DataService,
    private methaneService: MethaneService,
    private clientApi: ClientAPIService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleMethane);
    this.contentMethane = this.methaneService.getMethaneParagraph();
    this.dataService.changeContent(this.contentMethane);
    this.clientApi
      .getData<MethaneApiResponse>(this.apiType)
      .subscribe((response: MethaneApiResponse) => {
        this.methaneData = response.methane;
        if (isPlatformBrowser(this.platformId)) {
          this.createChart();
        }
      });
    this.legendMethane = this.methaneService.getMethaneLegend();
    this.dataService.changeLegend(this.legendMethane);
  }

  createChart() {
    if (isPlatformBrowser(this.platformId)) {
      const chartDom = document.getElementById('methaneChart');
      const myChart = echarts.init(chartDom, null, {
        width: 'auto',
        height: 'auto',
      });
      const dates = this.methaneData.map((data) => data.date);
      const average = this.methaneData.map((data) => data.average);
      const trends = this.methaneData.map((data) => data.trend);

      this.chartOption = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Average', 'Trend'],
          padding: [0, 40],
        },
        xAxis: {
          type: 'category',
          data: dates,
        },
        yAxis: {
          name: 'Methane Levels (ppb)',
          min: 1600,
          max: 2000,
          axisLabel: {
            formatter: '{value}',
          },
        },
        series: [
          {
            name: 'Average',
            type: 'line',
            data: average,
            showSymbol: false,
            encode: {
              x: 'Year',
              y: 'Average',
              itemName: 'Year',
              tooltip: ['Average'],
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
