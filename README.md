# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.0.5**, build **1155**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.0.5%2B1155/androidApp-release.apk)

Gli APK e i relativi SHA-256 sono pubblicati nelle GitHub Releases. Su iOS la distribuzione agli utenti avviene tramite App Store.

## Note di rilascio

- Riprogettata la schermata dettaglio corso con collegamento ai dati accademici reali (SSD, CFU, programma, testi) e scheda docente dedicata.
- Riorganizzata la sezione servizi e portali universitari in griglie bilanciate 2x2 e 3x2 con altezza uniforme.
- Incluso il supporto completo a idoneità e giudizi nel libretto e allineato il grafico crediti CFU con le statistiche.
- Rinnovata la registrazione presenze con LiquidDialog dell'SDK e scanner QR a schermo intero.
- Aggiornato il Color Lab e la selezione temi eliminando i preset scuri a favore di palette vivaci e input esadecimale.
- Rimosso il changelog dal foglio di aggiornamento dell'applicazione.
- Aggiornato l'ambiente di compilazione ad Android Gradle Plugin 9.4.0 e Gradle Wrapper 9.7.1.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
