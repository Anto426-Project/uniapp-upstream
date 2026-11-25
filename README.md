# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.1.5**, build **1186**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.1.5%2B1186/androidApp-release.apk)

Android e iOS hanno pubblicazioni indipendenti nelle GitHub Releases. Le IPA non firmate richiedono firma/provisioning.

[Release Android e iOS](https://github.com/Anto426-Project/uniapp-upstream/releases)

## Note di rilascio

- **Caricamento a flusso e cache additiva.** Trasformati Notizie, Carriera, Appelli, Trasporti e Area Docente in flussi incrementali non bloccanti (`Flow`), con salvataggio progressivo e merge additivo su Notizie, Presenze e Rubrica così gli elementi già in cache non spariscono mai.
- **Notizie aggiornate quasi in tempo reale.** Ridotto l’intervallo di aggiornamento automatico delle notizie a 2 minuti sulle 4 fonti live (con sincronizzazione periodica degli archivi) mantenendo sempre visibile lo storico salvato.
- **Didattica uniformata alle altre schermate.** Allineata la panoramica Didattica al caricamento progressivo e non bloccante della Home, eliminando la schermata di errore bloccante «Impossibile caricare» quando uno dei dataset secondari fallisce o si è offline.
- **Badge Offline nella barra superiore.** Eliminato il toast di avviso offline che riappariva a ogni cambio pagina e sostituito con un badge dedicato «Offline» con icona `WifiOff` nella barra azioni superiore, aggiornato in tempo reale allo stato della connessione.
- **Avvisi e note informative uniformati.** Introdotto il componente condiviso `UniNotice` basato su `LiquidCard` e pod icona Liquid Glass, applicato in modo uniforme a tutte le schermate con avvisi o note informative (Lingua, Dispositivi connessi, Questionari, Biblioteca, Tasse, Laboratorio colori, Tema e Crediti).

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

- `release/platforms.json`: ultimi download verificati Android e iOS.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
