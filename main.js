// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
    {
        nome: 'bici1',
        peso: 8

    },
    {
        nome: 'bici2',
        peso: 12

    },
    {
        nome: 'bici3',
        peso: 9

    },
    {
        nome: 'bici4',
        peso: 6

    },
]

let lightestBike = bikes[0] /**inizio col primo elemento dell array come riferimento */

for (let i = 1; i < bikes.length; i++) { /**confronto nel ciclo il peso delle altre bici col primo, se ciclando trova un peso inferiore; aggiorna lightestbike con quel valore */
    const bike = bikes[i];

    // lightestBike = bike.peso

    if (bike.peso < lightestBike.peso) {
        lightestBike = bike
    }

}
console.log(lightestBike);


// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadre = [
    {
        nome: 'inter',
        punti: 0,
        falli: 0,

    },
    {
        nome: 'milan',
        punti: 0,
        falli: 0,

    },
    {
        nome: 'roma',
        punti: 0,
        falli: 0,

    },
]

function getRndInteger(min, max) {   /**funzione x generare random numberes */
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = getRndInteger(1,10);
    squadre[i].falli = getRndInteger(1,10);
    
}

console.log(squadre);

const  nomiFalli =  [];
for (let i = 0; i < squadre.length; i++) {
    nomiFalli.push({
        nome : squadre[i].nome,
        falli : squadre[i].falli,

    })
    
}

console.log(nomiFalli);


