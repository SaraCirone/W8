var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratori = /** @class */ (function () {
    function Lavoratori(_codredd, _tasseinps, _tasseirpef, _redditoannuolordo) {
        this.codredd = _codredd;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
        this.redditoannuolordo = _redditoannuolordo;
    }
    Lavoratori.prototype.getUtileTasse = function () {
        var risultato1 = this.redditoannuolordo * this.codredd / 100;
        return risultato1;
    };
    Lavoratori.prototype.getTasseInps = function () {
        var risultato2 = this.getUtileTasse() * this.tasseinps / 100;
        return risultato2;
    };
    Lavoratori.prototype.getTasseIrpef = function () {
        var risultato3 = this.getUtileTasse() * this.tasseirpef / 100;
        return risultato3;
    };
    Lavoratori.prototype.getRedditoAnnuoNetto = function () {
        var risultato4 = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
        return risultato4;
    };
    return Lavoratori;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_redditoannuolordo) {
        return _super.call(this, 78, 25.72, 5, _redditoannuolordo) || this;
    }
    return Professionista;
}(Lavoratori));
console.log('----------------------------');
console.log('Professionista');
var newProfessionista = new Professionista(50000);
console.log('Reddito annuo lordo del professionista: 50000');
console.log(newProfessionista.getUtileTasse());
console.log(newProfessionista.getTasseInps());
console.log(newProfessionista.getTasseIrpef());
console.log('Reddito annuo netto del professionista:', newProfessionista.getRedditoAnnuoNetto());
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_redditoannuolordo) {
        return _super.call(this, 67, 15, 35, _redditoannuolordo) || this;
    }
    return Artigiano;
}(Lavoratori));
console.log('----------------------------');
console.log('Artigiano');
var newArtigiano = new Artigiano(30000);
console.log('Reddito annuo lordo dell\'artigiano: 30000');
console.log(newArtigiano.getUtileTasse());
console.log(newArtigiano.getTasseInps());
console.log(newArtigiano.getTasseIrpef());
console.log('Reddito annuo netto dell\'artigiano:', newArtigiano.getRedditoAnnuoNetto());
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_redditoannuolordo) {
        return _super.call(this, 40, 15, 35, _redditoannuolordo) || this;
    }
    return Commerciante;
}(Lavoratori));
console.log('----------------------------');
console.log('Commerciante');
var newCommerciante = new Commerciante(40000);
console.log('Reddito annuo lordo del commerciante: 40000');
console.log(newCommerciante.getUtileTasse());
console.log(newCommerciante.getTasseInps());
console.log(newCommerciante.getTasseIrpef());
console.log('Reddito annuo netto del commerciante:', newCommerciante.getRedditoAnnuoNetto());
