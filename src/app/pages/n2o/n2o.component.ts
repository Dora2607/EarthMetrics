import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { N2oApiResponse, N2oData } from '../../models/n2oData.model';
import { DataService } from '../../services/data.service';
import { N2oService } from '../../services/n2o.service';
import { ClientAPIService } from '../../services/client-api.service';
import { isPlatformBrowser } from '@angular/common';
import * as echarts from 'echarts';

@Component({
  selector: 'app-n2o',
  templateUrl: './n2o.component.html',
  styleUrl: './n2o.component.scss',
})
export class N2oComponent implements OnInit {
  titleNo2 = 'Emissioni di NO2';
  contentNo2!: string;
  apiType = 'nitrous-oxide';
  legendNo2!: string;
  no2Data: N2oData[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartOption: any;

  constructor(
    private dataService: DataService,
    private n2oService: N2oService,
    private clientApi: ClientAPIService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleNo2);
    this.contentNo2 = this.n2oService.getN2oParagraph();
    this.dataService.changeContent(this.contentNo2);
    this.clientApi
      .getData<N2oApiResponse>(this.apiType)
      .subscribe((response: N2oApiResponse) => {
        this.no2Data = response.nitrous;
        if (isPlatformBrowser(this.platformId)) {
          this.createN2oChart();
        }
      });
    this.legendNo2 = this.n2oService.getN2oLegend();
    this.dataService.changeLegend(this.legendNo2);
  }

  createN2oChart() {
    if (isPlatformBrowser(this.platformId)) {
      const chartDom = document.getElementById('n2oChart');
      const myChart = echarts.init(chartDom, null, {
        width: 'auto',
        height: 'auto',
      });
      const dates = this.no2Data.map((data) => {
        const [year, month] = data.date.split('.');
        return `${('0' + month).slice(-2)}-${year}`;
      });
      const average = this.no2Data.map((data) => data.average);
      const trends = this.no2Data.map((data) => data.trend);

      this.chartOption = {
        title: {
          text: 'Nitrous Oxide',
          left: 'auto',
          textStyle: {
            color: '#f79824',
          },
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
          name: 'N₂O Levels (ppb)',
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
      window.addEventListener(
        'resize',
        () => {
          myChart.resize();
        },
        { passive: true },
      );
    }
  }
}
