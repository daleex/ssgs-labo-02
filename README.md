# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Nota Importante per lo Studente - Setup Iniziale del Progetto

Benvenuto/a a `labo-string`!

Questo repository è un **template di partenza** per il tuo laboratorio valutato. Come avrai modo di leggere nelle istruzioni del laboratorio, una parte fondamentale del tuo lavoro iniziale (Esercizio 1) consisterà nell'analizzare attentamente la struttura e la configurazione corrente di questo progetto.

**Potresti notare che alcuni aspetti della configurazione iniziale – inclusa questa stessa documentazione (`README.md`), il file `package.json` e la gestione dei file da ignorare (`.gitignore`) – sono stati volutamente lasciati incompleti o potrebbero non seguire tutte le best practice per un progetto Node.js.**

Il tuo primo compito sarà proprio quello di identificare queste aree di miglioramento e apportare le necessarie correzioni e completamenti, come dettagliato nelle istruzioni del laboratorio, per portare il progetto a uno standard qualitativo superiore.

Buona analisi e buon lavoro!

## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Installazione e Avvio

1. Clona la repository:

    ```bash
    git clone https://github.com/daleex/ssgs-labo-02.git
    ```

2. Installa le dipendenze npm:

    ```bash
    npm install
    ```

    Questo installerà tutti i pacchetti richiesti come specificato in `package.json`.

---

## Utilizzo

Inizializza:

```bash
node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```
Scegli un numero dalla lista delle funzioni:

```js
console.error("Numero funzione:");
    console.error("  1: Inverti Stringa (reverseString)");
    console.error("  2: Controlla Palindromo (isPalindrome)");
    console.error("  3: Tronca Stringa (truncateString) - richiede [lunghezza_massima]");
    console.error("  4: Conta Caratteri (countCharacters)");
```

## Code Coverage

Dopo aver eseguito npm test, verrà generata una cartella chiamata coverage/ che contiene un report HTML.

Per visualizzarlo:

1. Apri `coverage/lcov-report/index.html` nel tuo browser.
2. Vedrai una rappresentazione visiva delle linee e delle funzioni coperte dai test.

## CI/CD con GitHub Actions

Questo progetto include un workflow di GitHub Actions in .github/workflows/test.yml.

Esegue automaticamente:

- I test e genera la copertura ad ogni push e pull_request.
- Carica il report completo della copertura come artifact (scaricabile dalla pagina GitHub Actions).

Puoi trovare le ultime esecuzioni e report nella scheda Actions del repository.
