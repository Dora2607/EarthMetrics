import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Co2Service } from '../../services/co2.service';

@Component({
  selector: 'app-co2',
  templateUrl: './co2.component.html',
  styleUrl: './co2.component.scss',
})
export class Co2Component implements OnInit {
  titleCo2 = 'Emissioni di CO2';
  contentCo2!: string;
  constructor(
    private dataService: DataService,
    private Co2Service: Co2Service,
  ) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleCo2);
    this.contentCo2 = this.Co2Service.co2Paragraph;
    this.dataService.changeContent(this.contentCo2);
  }
}
