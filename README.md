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

1. Clone the repository:

    ```bash
    git clone https://github.com/daleex/ssgs-labo-02.git
    ```

2. Install the dependencies using npm:

    ```bash
    npm install
    ```

    This will install all the required packages as specified in `package.json`.

---

## Usage

Run the program:

```bash
npm start
```

## Code Coverage

After running npm test, a folder named coverage/ will be generated. It contains an HTML report.

To view it:

1. Open coverage/lcov-report/index.html in your browser.
2. You'll see a visual breakdown of which lines and functions are tested.

## CI/CD with GitHub Actions

This project includes a GitHub Actions workflow located at .github/workflows/test.yml.

It automatically:

- Runs tests and generates coverage on every push and pull_request.
- Uploads the full coverage report as an artifact (downloadable from the GitHub Actions page).

You can find the latest runs and reports under the Actions tab of the repository.