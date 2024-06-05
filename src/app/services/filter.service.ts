import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private categoryFilterSubject = new BehaviorSubject<string>('');
  private dateFilterSubject = new BehaviorSubject<string>('');

  categoryFilter$ = this.categoryFilterSubject;
  dateFilter$ = this.dateFilterSubject;

  setCategoryFilter(category: string) {
    this.categoryFilterSubject.next(category);
  }

  setDateFilter(date: string) {
    this.dateFilterSubject.next(date);
  }
}