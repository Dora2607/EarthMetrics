import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ArcticService } from '../../services/arctic.service';

@Component({
  selector: 'app-arctic',
  templateUrl: './arctic.component.html',
  styleUrl: './arctic.component.scss'
})
export class ArcticComponent implements OnInit {
  titleArctic = 'Riduzione del Ghiaccio Polare';
  contentArctic!: string;

  constructor(private dataService: DataService, private arcticService:ArcticService) {}

  ngOnInit(): void {
    this.dataService.changeTitle(this.titleArctic);
    this.contentArctic = this.arcticService.arcticParagraph;
    this.dataService.changeContent(this.contentArctic);
  }
}
