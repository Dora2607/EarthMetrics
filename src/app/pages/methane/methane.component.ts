import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MethaneApiResponse, MethaneData } from '../../models/methane.model';
import { ClientAPIService } from '../../services/client-api.service';
import * as echarts from 'echarts';
import { isPlatformBrowser } from '@angular/common';
import { HtmlContentService } from '../../services/html-content.service';

@Component({
  selector: 'app-methane',
  templateUrl: './methane.component.html',
  styleUrl: './methane.component.scss',
})
export class MethaneComponent implements OnInit {
  titleMethane!: string;
  paragraphMethane!: string;
  apiType = 'methane';
  legendMethane!: string;
  methaneData: MethaneData[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartOption: any;

  constructor(
    private dataService: DataService,
    private htmlContent: HtmlContentService,
    private clientApi: ClientAPIService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    const methaneContent = this.htmlContent.getHtmlContent(this.apiType);
    if (methaneContent) {
      this.titleMethane = methaneContent.title;
      this.dataService.changeTitle(this.titleMethane);
      this.paragraphMethane = methaneContent.paragraph;
      this.dataService.changeContent(this.paragraphMethane);
      this.legendMethane = methaneContent.legend;
      this.dataService.changeLegend(this.legendMethane);
    }
    this.clientApi
      .getData<MethaneApiResponse>(this.apiType)
      .subscribe((response: MethaneApiResponse) => {
        this.methaneData = response.methane;
        if (isPlatformBrowser(this.platformId)) {
          this.createMethaneChart();
        }
      });
  }

  createMethaneChart() {
    if (isPlatformBrowser(this.platformId)) {
      const chartDom = document.getElementById('methaneChart');
      const myChart = echarts.init(chartDom, 'null', {
        width: 'auto',
        height: 'auto',
      });
      const dates = this.methaneData.map((data) => {
        const [year, month] = data.date.split('.');
        return `${('0' + month).slice(-2)}-${year}`;
      });
      const average = this.methaneData.map((data) => data.average);
      const trends = this.methaneData.map((data) => data.trend);

      this.chartOption = {
        tooltip: {
          trigger: 'axis',
        },
        title: {
          text: 'Methane',
          left: 'auto',
          textStyle: {
            color: '#f79824',
          },
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
          name: 'CH₄ Levels (ppm)',
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
            itemStyle: {
              color: '#e5323e',
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
              color: '#87cefa',
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
