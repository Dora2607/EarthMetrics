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
      const monthlyMean = this.arcticData.map((data) => data.monthlyMean);
      const minMonthlyMean = Math.min(...monthlyMean);
      const maxMonthlyMean = Math.max(...monthlyMean);

      this.chartOption = {
        title: {
          text: 'Global Sea Ice Extent (1979-2024)',
          left: 'auto',
          textStyle: {
            color: '#f79824'
         }
        },
        tooltip: {
          trigger: 'axis',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          formatter: function (params: any) {
            let tooltipText = '<div style="padding: 10px; border-radius: 5px; background-color: #f9f9f9; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">';
            tooltipText += '<ul style="list-style: none; padding: 0; margin: 0; color: black;">';
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            params.forEach((param: any) => {
              const value = param.value;
              const anomaly = anom[param.dataIndex];
              tooltipText += `<li style="margin: 0; font-size: 14px;"><span style="display: inline-block; width: 10px; height: 10px; background-color: #a2d2ff; border-radius: 50%; margin-right: 5px;"></span><strong>Estensione:</strong> ${value} mln km²</li>`;
              if (value < minMonthlyMean || value > maxMonthlyMean) {
                const anomalyColor = value < minMonthlyMean ? '#dd2c2f' : '#669bbc';
                tooltipText += `<li style="margin: 0; font-size: 14px;"><span style="display: inline-block; width: 10px; height: 10px; background-color: ${anomalyColor}; border-radius: 50%; margin-right: 5px;"></span><strong>Anomalia:</strong> ${anomaly} mln km²</li>`;
              }
            });
            tooltipText += '</ul></div>';
            return tooltipText;
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
          },
          top: 'bottom',
          left: 'center',
        },
        xAxis: [
          {
            type: 'category',
            data: dates,
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            name: 'Sea ice extent (mln km²)',
            min: 15,
            max: 30,
            interval: 5,
            axisLabel: {
              formatter: '{value}',
            },
          },
        ],
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: minMonthlyMean,
              color: '#dd2c2f',
            },
            {
              gt: minMonthlyMean,
              lte: maxMonthlyMean,
              color: '#a2d2ff',
            },
            {
              gt: maxMonthlyMean,
              color: '#669bbc',
            },
          ],
        },
        series: [
          {
            name: 'Estensione',
            type: 'line',
            data: value.map((v, i) => ({
              value: v,
              anomaly: anom[i], 
            })),
            showSymbol: false,
            encode: {
              x: 'Year',
              y: 'Value',
              itemName: 'Year',
              tooltip: ['Value'],
            },
            markLine: {
              silent: true,
              lineStyle: {
                color: '#333',
              },
              data: [
                {
                  yAxis: minMonthlyMean,
                },
                {
                  yAxis: maxMonthlyMean,
                },
              ],
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
