//Function get random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//Function discount calc
/** 
 * ## Calcolo sconto
 * restituisce x% di N
 * @param {number} price N valore totale
 * @param {number} discount x percentuale  
 * @returns {number}
 */
function discountCalc(price, discount) {
    var cutPrice = (price / 100) * discount
    return cutPrice
}

//Genera ticket
var generateEl = document.getElementById('generate');

generateEl.addEventListener('click', function() {
    //Nome passeggero
    var nameEl = document.getElementById('name');
    document.getElementById('passenger').innerHTML = nameEl.value;

    //Codice treno (numero casuale tra 90000 e 100000 escluso)
    var trainCode = getRandomNumber(90000, 100000);
    document.getElementById('train_code').innerHTML = trainCode;

    //Numero carrozza (numero casuale tra 1 e 8 escluso)
    var wagonTrain = getRandomNumber(1, 8);
    document.getElementById('wagon').innerHTML = wagonTrain;

    //numero di chilometri che vuole percorrere
    var distanceEl = document.getElementById('distance');

    //e l'età del passeggero.
    var ageEl = document.getElementById('age');

    //il prezzo del biglietto è definito in base ai km (0.21 € al km)
    var priceKm = 0.21;
    var cost = distanceEl.value * priceKm;
 
    //Prezzo calcolato
    //Categoria selezionata dall'utente
    var discount;

    if (ageEl.value === 'opt2') {
        discount = discountCalc(cost, 20);
        document.getElementById('discount').innerHTML = 'Sconto Minorenne';
    }else if (ageEl.value === 'opt4') {
        discount = discountCalc(cost, 40);
        document.getElementById('discount').innerHTML = 'Sconto Over 65';
    }else if (ageEl.value === 'opt3') {
        discount = 0;
        document.getElementById('discount').innerHTML = 'Prezzo pieno';
    }else {
        alert('Selezionare una fascia d\'età');
    }

    //output del prezzo finale
    var total = cost - discount
    document.getElementById('ticket_total').innerHTML = total.toFixed(2) + '€';
})

//Reload pagina
var cancelEl = document.getElementById('cancel');

cancelEl.addEventListener('click', function () {
    location.reload();
})
