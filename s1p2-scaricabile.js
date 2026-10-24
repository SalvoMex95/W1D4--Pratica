/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Esistono 6 tipi di datatype: Number, String, Boolean, undefined, null, BigInt, Symbol
Number: è un tipo di dato numerico es.58 
String: è un tpo di dato caratterizzato da una sequenza di caratteri e delemitato dagli apici '' o doppi apici ''
Bolean: è una entità logica utile nei confronti tra dati e restituisce o true o false
undefined: è un particolare stato di una variabile dichiarata, ma senza avergli nessun valore. È un particolare condizione di esistenza
null: rappresenta una variabile svuotata, vuota 
BigInt: è un tipo di dato che aiuta a immagazzinare numeri molto grandi
Symbol: attraverso Symbol possiamo rendere unica un dato */

let color = 'red' /* red è un dato di tipo string.*/
let num = 55 /* 55 è un dato di tipo number.*/
let sugar /* è un dato undefined*/
let car = null /* variabile vuota*/


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Gli oggetti sono dei grandi contenitori (super variabili), ci aiutano a salvare tanti dati di tipi diversi.
 Raccoglie questi dati sotto forma di coppie chiave-valore. Si racchiude il tutto nelle graffe {}
 Le coppie key:value sono le properties
 Le coppie key:function() sono i methods
es. console.log() è un metodo. console è l'oggetto e log è la funzione che 'stampa' il risultato scritto all'interno delle parentesi*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12
let num2 = 20

let result = num1 + num2

console.log (result)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'Salvatore'

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4

let finalResult = x - y

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = 'john'
let name2 = 'John' 

name1 !== name2 /* dato che hanno la J diversa la disaguaglianza sarà vera*/

toLowerCase() /* è un metodo string, o meglio è la funzione che associata poi tramite l'oggetto/variabile
che si vuole convertire tasforma la string tutta in minuscolo. In questo caso applichiamo a name2.
Quindi, name2.toLowerCase */
