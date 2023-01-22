import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  selectedTab: string;

  constructor() {
    this.selectedTab = localStorage.getItem('selectedTab') || 'tab2';
  }
  ngOnInit() {
    if (localStorage.getItem('selectedTab')) {
      this.selectedTab = localStorage.getItem('selectedTab') || 'tab2';
    }
  }

  setSelectedTab(tabName: string) {
    this.selectedTab = tabName;
    console.log(this.selectedTab);
    localStorage.setItem('selectedTab', tabName);
  }
}
