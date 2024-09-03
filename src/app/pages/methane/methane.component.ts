import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MethaneService } from '../../services/methane.service';

@Component({
  selector: 'app-methane',
  templateUrl: './methane.component.html',
  styleUrl: './methane.component.scss'
})
export class MethaneComponent implements OnInit{
  titleMethane = 'Emissioni di Metano';
  contentMethane!: string;

  constructor(private dataService: DataService, private methaneService:MethaneService) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleMethane);
    this.contentMethane = this.methaneService.methaneParagraph;
    this.dataService.changeContent(this.contentMethane);
  }
}
