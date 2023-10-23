import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.scss']
})
export class StrengthComponent {
  @Input() passwordStrength!: number;
}
