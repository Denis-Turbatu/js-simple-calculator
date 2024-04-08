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
    - [] Aggiungo addEventListener ai bottoni
    - [] Stampo nel div '.display' il valore del bottone premuto | type: string
    - [] Attesa che l'utente inserisca il simbolo dell'operazione

- []  Funzione gestioneOperazione()
    - [] addEventListener sui bottoni delle operazioni
    - [] Sul click dell'operatore 
        - [] Conversione stringa in numero digitato sul display
        - [] Assegazione alla variabile numeroUno del valore nel display
        - [] Settare il testo del display a "" 
        - [] Settare 'true' alla varibile flag  del simbolo cliccato

- [] Eseguire il salvataggio del secondo valore
    - [] Digitare il secondo valore su display attraverso i addEventListener

- [] Funzione stampaRisultato()
    - [] Premere il tasto '='
    - [] Convertire il testo del display in numero e salvarlo della varibile numeroDue
    - [] Creare blocco if dove controlla la variabile flag delle operazioni
    - [] Trovata l'operazione 'true', fare return dell'operazione richiesta

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