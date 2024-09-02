import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.scss'
})
export class TemperatureComponent implements OnInit {
  @Output() contentEmitter = new EventEmitter<string>();
  @Output() chartEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this.contentEmitter.emit('Informazioni sulle temperature globali.');
    this.chartEmitter.emit('Grafico delle temperature.');
  }
}
