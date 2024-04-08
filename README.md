# SOLUZIONE

```
Attenzione: La nostra calcolatrice deve fare dei calcoli tra due numeri interi. Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato. Non si può applicare più di un'operazione alla volta.

MILESTONE 1
aggiungere event listener a tutti i numeri (0-9)
quando si clicca su un numero, concatenarlo al numero visualizzato in alto

MILESTONE 2
aggiungere event listener a tutti gli operatori
quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto

MILESTONE 3
aggiungere event listener al pulsante =
quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto

MILESTONE 4
pulsante canc: cliccando il pulsante si resetta il calcolo

BONUS
verificare che non si stia cercando di dividere per 0
Se non avete completato il layout della calcolatrice potete usare il codice che vi invio in allegato

```

### RAGIONAMENTO

- [] Ad ogni click di un bottone verrà mostrato sul display il valore
    - [X] Aggiungo addEventListener ai bottoni
    - [X] Stampo nel div '.display' il valore del bottone premuto | type: string
    - [X] Attesa che l'utente inserisca il simbolo dell'operazione

- [X]  Funzione gestioneOperazione()
    - [X] addEventListener sui bottoni delle operazioni
    - [X] Sul click dell'operatore 
        - [X] Conversione stringa in numero digitato sul display
        - [X] Assegazione alla variabile numeroUno del valore nel display
        - [X] Settare il testo del display a "" 
        - [X] Settare 'true' alla varibile flag  del simbolo cliccato

- [X] Eseguire il salvataggio del secondo valore
    - [X] Digitare il secondo valore su display attraverso i addEventListener

- [X] Funzione stampaRisultato()
    - [X] Premere il tasto '='
    - [X] Convertire il testo del display in numero e salvarlo della varibile numeroDue
    - [X] Creare blocco if dove controlla la variabile flag delle operazioni
    - [X] Trovata l'operazione 'true', fare return dell'operazione richiesta

```
Se (add = true){
    return x + y;
}Se altrimenti (sub = true){
    return x - y;
}Se altrimenti(mul = true){
    return x * y;
}altrimenti (div = true){
    return x / y;
}

```

### INPUT

### ESECUZIONE LOGICA

### OUTPUT