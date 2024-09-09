import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ArcticService } from '../../services/arctic.service';
import { ClientAPIService } from '../../services/client-api.service';
import {  ArcticApiResponse, ArcticMonthlyData } from '../../models/articData.model';

@Component({
  selector: 'app-arctic',
  templateUrl: './arctic.component.html',
  styleUrl: './arctic.component.scss',
})
export class ArcticComponent implements OnInit {
  titleArctic = 'Riduzione del Ghiaccio Polare';
  contentArctic!: string;
  apiType = 'arctic';
  articData: ArcticMonthlyData[] = [];
  legendArctic!:string;

  constructor(
    private dataService: DataService,
    private arcticService: ArcticService,
    private clientApi: ClientAPIService,
  ) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleArctic);
    this.contentArctic = this.arcticService.getArcticParagraph();
    this.dataService.changeContent(this.contentArctic);
    this.clientApi
      .getData<ArcticApiResponse>(this.apiType)
      .subscribe((response: ArcticApiResponse) => {
        console.log(response)
        this.arcticData = response.arcticData;
        // if (isPlatformBrowser(this.platformId)) {
        //   this.createCo2Chart();
        // }
      });
     this.legendArctic = this.arcticService.getArcticLegend();
    this.dataService.changeLegend(this.legendArctic);
  }

  extractData(response: ArcticApiResponse): Record<string, ArcticMonthlyData> {
    return response.arcticData.data;
  }

}
