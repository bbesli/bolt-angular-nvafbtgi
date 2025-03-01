import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  name = 'Angular';
  response: any;

  constructor(private http: HttpClient) {
    // For testing purposes, you can set a token in localStorage
    // In a real app, this would be set after user login
    localStorage.setItem('access_token', 'your-test-token');
  }

  makeRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      (data) => {
        this.response = data;
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}