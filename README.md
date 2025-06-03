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
