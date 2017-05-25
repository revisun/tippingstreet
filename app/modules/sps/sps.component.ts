import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sps',
  templateUrl: 'modules/sps/sps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpsComponent {
  text: string = 'Selling Price Simulation';
}