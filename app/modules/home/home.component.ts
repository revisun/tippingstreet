import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Lot } from '../shared/lot/lot.model';
var Sqlite = require("nativescript-sqlite");

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
    if (this.baLot.sellPrice != 0) {
      this.lotCalc();
    }
  }

  lotCalc() {
    this.fetchdata(this.baLot.sellPrice);
  }

  private database: any;
    
  public fetchdata(vsellPrice: any ) {
      var vregFee: number;
      var vcutOff: number;
      var vincrement: number;
      var vextraFee: number;
      var vaddlFee: number;
      var vincFact: number;
      var aregFees: Array<number>;

      if (!Sqlite.exists("regfees.db")) {
      Sqlite.copyDatabase("regfees.db");
      }
        (new Sqlite("regfees.db")).then(db => {
          this.database = db;
          this.database.resultType(db.RESULTASOBJECT);
          this.database.valueType(db.VALUESARENATIVE);
      
          this.database.get("select regfee, cutoff, increment, extrafee from regfee where sprcll <= ? and sprcul > ?", [vsellPrice,vsellPrice]).then(row=> {
              aregFees = row;
              vregFee = aregFees[0];
              vcutOff = aregFees[1];
              vincrement = aregFees[2];
              vextraFee = aregFees[3];

              if (vcutOff != 0) {
                  vincFact = Math.round((vsellPrice-vcutOff)/vincrement);
                  if ((vsellPrice-vcutOff) % vincrement < 5) {
                      vincFact += 1;
                  }
                  vaddlFee = vincFact * vextraFee;
                  vregFee += vaddlFee;
              }
                  
              this.baLot.registration=Number(vregFee);
              if (Number.isNaN(this.baLot.lotSizeSQM)||(this.baLot.lotSizeSQM === 0)) {
                this.baLot.pricePerSQM = 0;
              } else {
                this.baLot.pricePerSQM = Number((this.baLot.sellPrice/this.baLot.lotSizeSQM).toFixed(2));
              }
              this.baLot.transferTax = Number((Math.max(this.baLot.FMV,this.baLot.sellPrice)*0.5*0.01).toFixed(2));

              this.baLot.totalAmt = +this.baLot.sellPrice + +this.baLot.registration + +this.baLot.transferTax;

              if (this.database.isOpen()) {
                this.database.close();
              }

          }, error => {
              return error;
          });
      }, error => {
        console.log("OPEN DB ERROR", error);
      });
        
    }

}