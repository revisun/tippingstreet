import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Lot } from '../shared/lot/lot.model';

@Component({
  selector: 'sps',
  templateUrl: 'modules/sps/sps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpsComponent {
  text: string = 'Selling Price Simulation';
  baLot: Lot;

  constructor(){
    this.baLot = new Lot();
    this.baLot.netProceeds = 0;
    this.baLot.profFeeRate = 0;
    this.baLot.nonStdExpenses = 0;
  }

  submit(){
    if ( this.baLot.netProceeds != 0 && this.baLot.profFeeRate != 0 ){
      this.lotCalc();
    }
  }

  lotCalc() {

      var vTaxFactor1: number;
      var vTaxFactor2: number;

      vTaxFactor1 = 1 - 0.06 - 0.015 - this.baLot.profFeeRate;
      vTaxFactor2 = this.baLot.nonStdExpenses / ((this.baLot.netProceeds/vTaxFactor1) + +this.baLot.nonStdExpenses);


      this.baLot.capitalGainsTax = (this.baLot.netProceeds/(1-.06-.015-this.baLot.profFeeRate-vTaxFactor2)*.06).toFixed(2);
      this.baLot.docsStamp = (this.baLot.netProceeds/(1-.06-.015-this.baLot.profFeeRate-vTaxFactor2)*.015).toFixed(2);
      this.baLot.profFee = (this.baLot.netProceeds/(1-.06-.015-this.baLot.profFeeRate-vTaxFactor2)*this.baLot.profFeeRate).toFixed(2);
      this.baLot.otherExpenses = (this.baLot.netProceeds/(1-.06-.015-this.baLot.profFeeRate-vTaxFactor2)*vTaxFactor2).toFixed(2);
      this.baLot.sellPrice = Number((+this.baLot.netProceeds + +this.baLot.capitalGainsTax + +this.baLot.docsStamp + +this.baLot.profFee + +this.baLot.otherExpenses).toFixed(2));

   }

}