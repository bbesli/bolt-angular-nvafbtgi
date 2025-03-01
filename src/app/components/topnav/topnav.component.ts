import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {
  @Input() sidebarCollapsed = false;
  
  userName = 'John Doe';
  userInitials = 'JD';
  
  showUserDropdown = false;
  showNotifications = false;
  showLanguageDropdown = false;
  
  notificationCount = 3;
  notifications = [
    'New user registered',
    'Meeting at 2:00 PM',
    'System update completed'
  ];
  
  languages: Language[] = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'FR', name: 'French', flag: '🇫🇷' },
    { code: 'DE', name: 'German', flag: '🇩🇪' },
    { code: 'IT', name: 'Italian', flag: '🇮🇹' }
  ];
  
  currentLanguage = this.languages[0];
  
  toggleUserDropdown() {
    this.showUserDropdown = !this.showUserDropdown;
    this.showNotifications = false;
    this.showLanguageDropdown = false;
  }
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    this.showUserDropdown = false;
    this.showLanguageDropdown = false;
  }
  
  toggleLanguageDropdown() {
    this.showLanguageDropdown = !this.showLanguageDropdown;
    this.showUserDropdown = false;
    this.showNotifications = false;
  }
  
  selectLanguage(lang: Language) {
    this.currentLanguage = lang;
    this.showLanguageDropdown = false;
  }
  
  toggleMobileSidebar() {
    // This would be implemented with a service in a real app
    // to communicate with the sidebar component
    console.log('Toggle mobile sidebar');
  }
}