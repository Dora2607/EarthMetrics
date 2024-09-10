import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ArcticService } from '../../services/arctic.service';
import { ClientAPIService } from '../../services/client-api.service';
import {
  ArcticApiResponse,
  ArcticDataArr,
} from '../../models/arcticData.model';
import { isPlatformBrowser } from '@angular/common';
import * as echarts from 'echarts';

@Component({
  selector: 'app-arctic',
  templateUrl: './arctic.component.html',
  styleUrl: './arctic.component.scss',
})
export class ArcticComponent implements OnInit {
  titleArctic = 'Riduzione del Ghiaccio Polare';
  contentArctic!: string;
  apiType = 'arctic';
  arcticData: ArcticDataArr[] = [];
  legendArctic!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartOption: any;

  constructor(
    private dataService: DataService,
    private arcticService: ArcticService,
    private clientApi: ClientAPIService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleArctic);
    this.contentArctic = this.arcticService.getArcticParagraph();
    this.dataService.changeContent(this.contentArctic);
    this.clientApi
      .getData<ArcticApiResponse>(this.apiType)
      .subscribe((response: ArcticApiResponse) => {
        const arcticObj = response.arcticData.data;
        this.arcticData = this.arcticService.extractData(arcticObj);
        if (isPlatformBrowser(this.platformId)) {
          this.createArcticChart();
        }
      });
    this.legendArctic = this.arcticService.getArcticLegend();
    this.dataService.changeLegend(this.legendArctic);
  }

  createArcticChart() {
    if (isPlatformBrowser(this.platformId)) {
      const chartDom = document.getElementById('arcticChart');
      const myChart = echarts.init(chartDom, null, {
        width: 'auto',
        height: 'auto',
      });
      const dates = this.arcticData.map((data) => data.key);
      const value = this.arcticData.map((data) => data.value);
      const anom = this.arcticData.map((data) => data.anom);
      const monthlyMean = this.arcticData.map((data)=> data.monthlyMean)

      this.chartOption = {
        title: {
          text: 'Global Sea Ice Extent (1979-2024)',
          left: 'auto',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Estensione', 'Media Mensile'],
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
        xAxis: [
          {
            type: 'category',
            data: dates,
             axisPointer: {
               type: 'shadow'
             }
          }
        ],
        yAxis: [
          {
            name: 'Estensione (million sq km)',
            min:15,
            max: 30,
            interval: 5,
            axisLabel: {
              formatter: '{value}'
            }
          },
        ],
        series: [
          {
            name: 'Estensione',
            type: 'line',
            data: value,
            showSymbol: false,
            encode: {
              x: 'Year',
              y: 'Value',
              itemName: 'Year',
              tooltip: ['Value'],
            },
          },
          // {
          //   name: 'Anomalia',
          //   type: 'bar',
          //   tooltip: {
          //     valueFormatter: function (value: number) {
          //       return (value as number) + ' million sq km';
          //     }
          //   },
          //   data: anom
          // },
          {
            name: 'Media Mensile',
            type: 'line',
             
            data: monthlyMean,
            showSymbol: false,
            encode: {
              x: 'Year',
              y: 'monthlyMean',
              itemName: 'Year',
              tooltip: ['monthlyMean'],
            },
          }
        ]
      };
      myChart.setOption(this.chartOption);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  }
}
