import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Co2Service } from '../../services/co2.service';
import { Co2ApiResponse, Co2Data } from '../../models/co2Data.model';
import { ClientAPIService } from '../../services/client-api.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as echarts from 'echarts';

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
  ) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleCo2);
    this.contentCo2 = this.Co2Service.co2Paragraph;
    this.dataService.changeContent(this.contentCo2);
    this.clientApi.getCo2Data().subscribe((response: Co2ApiResponse) => {
      this.co2Data = response.co2;
      this.createChart();
    });
  }

  createChart() {
    const dates = this.co2Data.map(
      (data) => `${data.day}-${data.month}-${data.year}`,
    );
    const cycles = this.co2Data.map((data) => data.cycle);
    const trends = this.co2Data.map((data) => data.trend);

    this.chartOption = {
      title: {
        text: 'CO2 Levels',
        textStyle: {
          color: "rgba(143, 22, 22, 0.39)"
        },
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Cycle', 'Trend'],
      },
      xAxis: {
        type: 'category',
        data: dates,
      },
      yAxis: {
        name: 'CO2 Levels (ppm)',
        min: 350,
        max: 500,
        axisLabel: {
          formatter: '{value} ppm',
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
   
  }


}
