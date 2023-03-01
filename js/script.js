// Data una lista della spesa(memorizzata in un array), stampare sulla pagina(anche brutalmente, basta che si vedano)
// gli elementi della lista individualmente con un ciclo while.
//     Consigli:
//     - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
//         - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while


// creo array con lista della spesa
let myList = ['pane', 'mele', 'detersivo piatti', 'biscotti', 'latte', 'riso', 'pasta', 'carote'];
console.log(myList);

// inizializzo variabile contatore
let index = 0;

// creo variabile per elemento HTML
let listContEl = document.getElementById('list-container');


while(index < myList.length) {
    console.log((index + 1) + ' ' + myList[index]);
    let newLine = document.createElement('li');
    listContEl.append(newLine);
    newLine.innerHTML = myList[index];
    index++;
}