# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.0.14**, build **1167**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.0.14%2B1167/androidApp-release.apk)

Gli APK e i relativi SHA-256 sono pubblicati nelle GitHub Releases. Su iOS la distribuzione agli utenti avviene tramite App Store.

## Note di rilascio

- Sblocco App: schermata visibile già all'avvio, con password UniApp e pulsante per richiamare l'autenticazione del dispositivo senza prompt automatico; “Usa un altro account” apre il login.
- Prenotazioni Trasporti: il calendario mostra il mese intero, ma permette di scegliere solo i giorni feriali da domani fino a 15 giorni. Le corse già prenotate restano visibili e non selezionabili; dopo una prenotazione la disponibilità si aggiorna subito. Rinnovate le card di selezione della direzione.
- Biglietti: il pulsante per annullare la corsa rifrange il contenuto sottostante; aggiornata la resa del codice a barre.
- Area Docente: card e sezioni con altezze più coerenti, metriche bilanciate e icone dedicate.
- Badge Accademico: nuova grafica del codice a barre con cornice Monet e stato attivo.
- Home e Temi: card notizie più compatte e selettore del motore grafico aggiornato.
- Carriere: cambio profilo disponibile dalla barra superiore delle sezioni principali, con gestione dell'elenco delle carriere restituito dal portale.
- Informazioni: corretto l'allineamento della versione e del nome dell'app nel banner.
- Icone dell'app aggiornate e variante di sviluppo separata dalla versione installata.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
