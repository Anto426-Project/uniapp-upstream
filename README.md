# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.0.8**, build **1158**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.0.8%2B1158/androidApp-release.apk)

Gli APK e i relativi SHA-256 sono pubblicati nelle GitHub Releases. Su iOS la distribuzione agli utenti avviene tramite App Store.

## Note di rilascio

- Corretti gli angoli della cornice del QR del badge, mantenendo dimensioni e leggibilità del codice.
- Rubrica completa con tutti i numeri di telefono, indirizzo ed edificio separati e azioni email e chiamata.
- Corretti ricerca, selezione degli omonimi e contatti senza sede; aggiornato UniSDK per preservare tutti i dati della rubrica.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
