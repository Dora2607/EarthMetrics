import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DataService } from '../../services/data.service';
import { No2Service } from '../../services/no2.service';
import { No2ApiResponse, No2Data } from '../../models/no2Data.model';
import { ClientAPIService } from '../../services/client-api.service';
import { isPlatformBrowser } from '@angular/common';
import * as echarts from 'echarts';

@Component({
  selector: 'app-no2',
  templateUrl: './no2.component.html',
  styleUrl: './no2.component.scss',
})
export class No2Component implements OnInit {
  titleNo2 = 'Emissioni di NO2';
  contentNo2!: string;
  apiType = 'nitrous-oxide';
  legendNo2!: string;
  no2Data: No2Data[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartOption: any;

  constructor(
    private dataService: DataService,
    private no2Service: No2Service,
    private clientApi: ClientAPIService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleNo2);
    this.contentNo2 = this.no2Service.getNo2Paragraph();
    this.dataService.changeContent(this.contentNo2);
    this.clientApi
      .getData<No2ApiResponse>(this.apiType)
      .subscribe((response: No2ApiResponse) => {
        this.no2Data = response.nitrous;
        if (isPlatformBrowser(this.platformId)) {
          this.createNo2Chart();
        }
      });
    this.legendNo2 = this.no2Service.getNo2Legend();
    this.dataService.changeLegend(this.legendNo2);
  }

  createNo2Chart() {
    if (isPlatformBrowser(this.platformId)) {
      const chartDom = document.getElementById('no2Chart');
      const myChart = echarts.init(chartDom, null, {
        width: 'auto',
        height: 'auto',
      });
      const dates = this.no2Data.map((data) => data.date);
      const average = this.no2Data.map((data) => data.average);
      const trends = this.no2Data.map((data) => data.trend);

      this.chartOption = {
        title: {
          text: 'Nitrogen Dioxide',
          left: 'auto',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Average', 'Trend'],
          top: 'top',
          right: 'right',
          textStyle: {
            color: '#f79824',
          },
        },
        grid: {
          left: '10%',
          right: '10%',
          top: '15%',
          bottom: '15%',
          containLabel: true,
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none',
            },
            magicType: { type: ['line', 'bar'] },
            restore: {},
          },
          top: 'bottom',
          left: 'center',
        },
        xAxis: {
          type: 'category',
          data: dates,
        },
        yAxis: {
          name: 'No2 Levels (ppb)',
          min: 310,
          max: 350,
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
            itemStyle: {
              color: '#87cefa',
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
            itemStyle: {
              color: '#fac858',
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
