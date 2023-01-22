import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedValue: any;

  constructor() {
    this.selectedValue = localStorage.getItem('selectedValue');
  }

  setSelectedValue(value: string) {
    localStorage.setItem('selectedValue', value);
  }
}
