import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-score',
  templateUrl: './credit-score.component.html',
  styleUrls: ['./credit-score.component.css'],
})
export class CreditScoreComponent {
  current = 225;
  max = 300;
}
