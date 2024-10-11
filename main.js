// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
    { nome : 'bici1',
      peso : 8  

    },
    { nome : 'bici2',
      peso : 12 

    },
    { nome : 'bici3',
      peso : 9 

    },
    { nome : 'bici4',
      peso : 6  

    },
]

let lightestBike =bikes[0] /**inizio col primo elemento dell array come riferimento */

for (let i = 1; i < bikes.length; i++) { /**confronto nel ciclo il peso delle altre bici col primo, se ciclando trova un peso inferiore; aggiorna lightestbike con quel valore */
    const bike = bikes[i];

    // lightestBike = bike.peso

    if(bike.peso < lightestBike.peso){ 
        lightestBike = bike
    }
    
}
console.log(lightestBike);
