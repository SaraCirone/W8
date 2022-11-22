abstract class Lavoratori {
    codredd: number;
    tasseinps: number;
    tasseirpef: number;
    redditoannuolordo: number;
    constructor (_codredd: number, _tasseinps: number, _tasseirpef: number, _redditoannuolordo: number,){
        this.codredd = _codredd;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
        this.redditoannuolordo = _redditoannuolordo;
    }

    getUtileTasse(): number{
        let risultato1 = this.redditoannuolordo * this.codredd / 100;
        return risultato1;
    }

    getTasseInps(): number{
        let risultato2 = this.getUtileTasse() * this.tasseinps / 100;
        return risultato2;
    }

    getTasseIrpef(): number{
        let risultato3 = this.getUtileTasse() * this.tasseirpef / 100;
        return risultato3;
    }

    getRedditoAnnuoNetto(): number{
        let risultato4 = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
        return risultato4;
    }
}

class Professionista extends Lavoratori {
    constructor (_redditoannuolordo: number) {
        super(78, 25.72, 5, _redditoannuolordo);
    }
}

console.log('----------------------------');
console.log('Professionista');

let newProfessionista = new Professionista(50000);
console.log('Reddito annuo lordo del professionista: 50000');
console.log(newProfessionista.getUtileTasse());
console.log(newProfessionista.getTasseInps());
console.log(newProfessionista.getTasseIrpef());
console.log('Reddito annuo netto del professionista:', newProfessionista.getRedditoAnnuoNetto());

class Artigiano extends Lavoratori {
    constructor (_redditoannuolordo: number) {
        super(67, 15, 35, _redditoannuolordo);
    }
}

console.log('----------------------------');
console.log('Artigiano');

let newArtigiano = new Artigiano (30000);
console.log('Reddito annuo lordo dell\'artigiano: 30000');
console.log(newArtigiano.getUtileTasse());
console.log(newArtigiano.getTasseInps());
console.log(newArtigiano.getTasseIrpef());
console.log('Reddito annuo netto dell\'artigiano:', newArtigiano.getRedditoAnnuoNetto());

class Commerciante extends Lavoratori {
    constructor (_redditoannuolordo: number) {
        super(40, 15, 35, _redditoannuolordo);
    }
}

console.log('----------------------------');
console.log('Commerciante');

let newCommerciante = new Commerciante (40000);
console.log('Reddito annuo lordo del commerciante: 40000');
console.log(newCommerciante.getUtileTasse());
console.log(newCommerciante.getTasseInps());
console.log(newCommerciante.getTasseIrpef());
console.log('Reddito annuo netto del commerciante:', newCommerciante.getRedditoAnnuoNetto());