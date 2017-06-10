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
      console.log(vTaxFactor1);
      vTaxFactor2 = this.baLot.nonStdExpenses / ((this.baLot.netProceeds/vTaxFactor1)+this.baLot.nonStdExpenses);
      console.log(vTaxFactor2);
      console.log(this.baLot.netProceeds/vTaxFactor1);
      console.log(((this.baLot.netProceeds/vTaxFactor1)+this.baLot.nonStdExpenses))

      this.baLot.capitalGainsTax = (this.baLot.netProceeds/(1-.06-.015-this.baLot.profFeeRate-vTaxFactor2)*.06).toLocaleString('en', {style:'currency'});
      this.baLot.docsStamp = (this.baLot.netProceeds/(1-.06-.015-this.baLot.profFeeRate-vTaxFactor2)*.015).toLocaleString();
      this.baLot.profFee = (this.baLot.netProceeds/(1-.06-.015-this.baLot.profFeeRate-vTaxFactor2)*this.baLot.profFeeRate).toLocaleString();
      this.baLot.otherExpenses = (this.baLot.netProceeds/(1-.06-.015-this.baLot.profFeeRate-vTaxFactor2)*vTaxFactor2).toLocaleString();
      this.baLot.sellPrice = (+this.baLot.netProceeds + +this.baLot.capitalGainsTax + +this.baLot.docsStamp + +this.baLot.profFee + +this.baLot.otherExpenses).toLocaleString();

   }

}