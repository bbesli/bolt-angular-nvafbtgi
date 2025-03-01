import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TopnavComponent } from '../components/topnav/topnav.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, SidebarComponent, TopnavComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  sidebarCollapsed = false;

  onSidebarCollapsed(collapsed: boolean) {
    this.sidebarCollapsed = collapsed;
  }
}