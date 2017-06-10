import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Lot } from '../shared/lot/lot.model';

@Component({
  selector: 'sa',
  templateUrl: 'modules/sa/sa.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SaComponent {
  text: string = 'Seller\'s Account Calculation';
  baLot: Lot;

  constructor(){
    this.baLot = new Lot();
    this.baLot.lotSizeSQM = 0;
    this.baLot.FMV = 0;
    this.baLot.sellPrice = 0;
    this.baLot.zonalValue = 0;
    this.baLot.profFeeRate = 0;
    this.baLot.nonStdExpenses = 0;
  }

  submit(){
    if (this.baLot.sellPrice != 0) {
      this.lotCalc();
    }
  }

  lotCalc() {

    if (Number.isNaN(this.baLot.lotSizeSQM)||(Number(this.baLot.lotSizeSQM) === 0)) {
      this.baLot.pricePerSQM = 0;
    } else {
      this.baLot.pricePerSQM = Number((this.baLot.sellPrice/this.baLot.lotSizeSQM).toFixed(2));
    }
    this.baLot.taxBase = Math.max(Number(this.baLot.zonalValue),Number(this.baLot.sellPrice)).toFixed(2);
    this.baLot.capitalGainsTax = Number((this.baLot.taxBase*.06).toFixed(2));
    this.baLot.docsStamp = Number((this.baLot.taxBase*.015).toFixed(2));
    this.baLot.profFee = Number(Number(Number(this.baLot.sellPrice)*Number(this.baLot.profFeeRate)).toFixed(2));
    this.baLot.otherExpenses = Number(this.baLot.nonStdExpenses).toFixed(2);
    this.baLot.netProceeds = Number(
      Number(
        Number(this.baLot.sellPrice) - Number(this.baLot.capitalGainsTax) - Number(this.baLot.docsStamp) - Number(this.baLot.profFee) - Number(this.baLot.otherExpenses)
      ).toFixed(2)
    );
  }
}