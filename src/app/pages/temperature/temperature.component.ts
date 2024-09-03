import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TemperatureService } from '../../services/temperature.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.scss',
})
export class TemperatureComponent implements OnInit {
  titleTemperature = 'Temperature Globali';
  contentTemperature!: string;

  constructor(
    private dataService: DataService,
    private temperatureService: TemperatureService,
  ) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleTemperature);
    this.contentTemperature = this.temperatureService.temperatureParagraph;
    this.dataService.changeContent(this.contentTemperature);
  }
}
