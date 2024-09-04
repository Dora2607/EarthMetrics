import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent implements OnInit, OnDestroy {
  currentTitle!: string;
  currentContent!: string;
  currentChart!: string;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
  ) {}


  ngOnInit(): void {
    this.dataService.currentTitle
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((title: string) => {
        this.currentTitle = title;
        this.cdr.detectChanges();
      });

    this.dataService.currentContent
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((content: string) => {
        this.currentContent = content;
        this.cdr.detectChanges();
      });

  }

   
   



 
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
