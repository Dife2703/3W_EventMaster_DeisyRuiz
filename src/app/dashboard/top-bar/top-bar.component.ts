import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  categories: string[] = ['Conferencia', 'Celebraciones y Fiestas', 'Evento cultural', 'Evento deportivo', 'Taller', 'Otro'];

  constructor(private dashboard: DashboardService, private filterService: FilterService) {}

  onCategoryChange(event: any) {
    this.filterService.setCategoryFilter(event.target.value);
  }

  onDateChange(event: any) {
    this.filterService.setDateFilter(event.target.value);
  }
  openSidebar(){
    this.dashboard.openSidebar()
  }

} 