let giocatore1: number = Math.floor((Math.random() * 100) + 1);
let giocatore2: number = Math.floor((Math.random() * 100) + 1);
let estratto: number = Math.floor((Math.random() * 100) + 1);
let comparazione1: number;
let comparazione2: number;


console.log('Numero casuale generato:', estratto);
console.log('Numero giocatore 1:', giocatore1);
console.log('Numero giocaroe 2:', giocatore2);


if (giocatore1 == estratto) {
    "Il giocatore 1 ha vinto!"
}
if (giocatore2 == estratto) {
    "Il giocatore 2 ha vinto!"
}

if (giocatore1 != estratto && giocatore2 != estratto) {
    if (giocatore1 < estratto){
        comparazione1 = estratto - giocatore1;
    }
    else {
        comparazione1 = giocatore1 - estratto;
    }
    if (giocatore2 < estratto){
        comparazione2 = estratto - giocatore2;
    }
    else {
        comparazione2 = giocatore2 - estratto;
    }
    if (comparazione1 < comparazione2) {
        console.log('Nessuno dei due giocatori ha indovinato, ma il giocatore 1 si è avvicinato di più');
    }
    else {
        console.log('Nessuno dei due giocatori ha indovinato, ma il giocatore 2 si è avvicinato di più');
    }
}

