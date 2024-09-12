import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //Title Change
  private titleSource = new BehaviorSubject<string>('Data');
  currentTitle = this.titleSource.asObservable();

  changeTitle(title: string) {
    this.titleSource.next(title);
  }

  //Content Change
  private contentSource = new BehaviorSubject<string>('Data');
  currentContent = this.contentSource.asObservable();

  changeContent(content: string) {
    this.contentSource.next(content);
  }

  //Legend Change
  private legendSource = new BehaviorSubject<string>('Data');
  currentLegend = this.legendSource.asObservable();

  changeLegend(legend: string) {
    this.legendSource.next(legend);
  }
}
