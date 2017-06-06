var Sqlite = require("nativescript-sqlite");

export class Lot {
    
  //ba
  lotSizeSQM: any;
  sellPrice: any;
  FMV: any;
  zonalValue: any;
  pricePerSQM: any;
  transferTax: any;
  registration: any;
  totalAmt: any;

  //sa
  profFeeRate: any;
  nonStdExpenses: any;
  taxBase: any;
  capitalGainsTax: any;
  docsStamp: any;
  profFee: any;
  otherExpenses: any;
  netProceeds: any;

    private database: any;

    public constructor() {
        if (!Sqlite.exists("regfees.db")) {
        Sqlite.copyDatabase("regfees.db");
        }
        (new Sqlite("regfees.db")).then(db => {
        this.database = db;
        this.database.resultType(db.RESULTASOBJECT);
        this.database.valueType(db.VALUESARENATIVE);
        }, error => {
        console.log("OPEN DB ERROR", error);
        });
    }
        
    public fetch(vsellPrice: any ) {
        var vregFee: any;
        var vcutOff: any;
        var vincrement: any;
        var vextraFee: any;
        var vaddlFee: any;
        var vincFact: any;
        var aregFees: Array<any>;

        this.database.get("select regfee, cutoff, increment, extrafee from regfee where sprcll <= ? and sprcul > ?", [vsellPrice,vsellPrice]).then(row=> {
            aregFees = row;
            vregFee = Number(aregFees[0]);
            vcutOff = Number(aregFees[1]);
            vincrement = Number(aregFees[2]);
            vextraFee = Number(aregFees[3]);
            console.log(aregFees);

            if (vcutOff != 0) {
                vincFact = Math.round((vsellPrice-vcutOff)/vincrement);
                if ((vsellPrice-vcutOff) % vincrement < 5) {
                    vincFact += 1;
                }
                vaddlFee = vincFact * vextraFee;
                vregFee += vaddlFee;
            }
            console.log("Cutoff: " + vcutOff);
            console.log("Increment: " + vincrement);
            console.log("Selling Price: " + vsellPrice);
            console.log("Computed Reg Fee: " + vregFee);
                
            return (Number(vregFee));

        }, error => {
            return error;
        });

        
    }

}