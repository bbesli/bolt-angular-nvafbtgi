import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  icon: string;
  label: string;
  link?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isCollapsed = false;
  @Output() collapsed = new EventEmitter<boolean>();

  menuItems: MenuItem[] = [
    {
      icon: 'house-door-fill',
      label: 'Dashboard',
      link: '/dashboard'
    },
    {
      icon: 'graph-up',
      label: 'Analytics',
      children: [
        {
          icon: 'file-earmark-bar-graph',
          label: 'Reports',
          link: '/analytics/reports'
        },
        {
          icon: 'bar-chart-line',
          label: 'Statistics',
          link: '/analytics/statistics'
        }
      ]
    },
    {
      icon: 'people-fill',
      label: 'Users',
      children: [
        {
          icon: 'person-fill',
          label: 'User Management',
          link: '/users/management'
        },
        {
          icon: 'key-fill',
          label: 'Permissions',
          link: '/users/permissions'
        }
      ]
    },
    {
      icon: 'gear-fill',
      label: 'Settings',
      link: '/settings'
    },
    {
      icon: 'question-circle-fill',
      label: 'Help',
      link: '/help'
    }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsed.emit(this.isCollapsed);
  }

  toggleSubmenu(index: number) {
    if (this.isCollapsed) return;
    
    if (this.menuItems[index].children && this.menuItems[index].children!.length > 0) {
      this.menuItems[index].expanded = !this.menuItems[index].expanded;
    }
  }
}