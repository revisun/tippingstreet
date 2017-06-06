import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Lot } from '../shared/lot/lot.model';

@Component({
  selector: 'home',
  templateUrl: 'modules/home/home.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})

export class HomeComponent {
  text: string = 'Buyer\'s Account Calculation';
  baLot: Lot;

  constructor(){
    this.baLot = new Lot();
    this.baLot.lotSizeSQM = 0;
    this.baLot.FMV = 0;
    this.baLot.sellPrice = 0;
    this.baLot.zonalValue = 0;
  }

  submit(){
    this.lotCalc();
  }

  lotCalc() {
    this.baLot.registration = this.baLot.fetch(this.baLot.sellPrice);
    console.log("Calc Reg Fee done");
    this.baLot.totalAmt = Number((Number(this.baLot.sellPrice) + Number(this.baLot.registration) + Number(this.baLot.transferTax)).toFixed(2));// ;
    console.log("Calc Total Amt done");
    this.baLot.totalAmt = Number(this.baLot.totalAmt.toFixed(2));
    this.addlCalc();
  }

  addlCalc(){
    if (Number.isNaN(this.baLot.lotSizeSQM)||(this.baLot.lotSizeSQM === 0)) {
      this.baLot.pricePerSQM = 0;
    } else {
      this.baLot.pricePerSQM = Number((this.baLot.sellPrice/this.baLot.lotSizeSQM).toFixed(2));
    }
    console.log("Calc Price per SQM done");
    this.baLot.transferTax = Number((Math.max(Number(this.baLot.FMV),Number(this.baLot.sellPrice))*0.5*0.01).toFixed(2));
    console.log("Calc Transfer Tax done");    
  }


}