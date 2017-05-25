import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sa',
  templateUrl: 'modules/sa/sa.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaComponent {
  text: string = 'Seller\'s Account Calculation';
}