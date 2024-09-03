import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { No2Service } from '../../services/no2.service';

@Component({
  selector: 'app-no2',
  templateUrl: './no2.component.html',
  styleUrl: './no2.component.scss'
})
export class No2Component implements OnInit{
  titleNo2 = 'Emissioni di NO2';
  contentNo2!: string;

  constructor(private dataService: DataService, private no2Service:No2Service) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleNo2);
    this.contentNo2 = this.no2Service.no2Paragraph;
    this.dataService.changeContent(this.contentNo2);
  }
}
