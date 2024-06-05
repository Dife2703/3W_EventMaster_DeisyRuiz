import { Component } from '@angular/core';
import {DashboardService} from "../dashboard.service";
import { AuthService } from 'src/app/auth.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {
  constructor(private dashboard: DashboardService, authService: AuthService) {
  }
  @Output() logoutEvent = new EventEmitter<void>();

  onLogout(): void {
    this.logoutEvent.emit();
  }
  openSidebar(){
    this.dashboard.openSidebar()
  }
}
