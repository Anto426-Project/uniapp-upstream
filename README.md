# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.0.13**, build **1165**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.0.13%2B1165/androidApp-release.apk)

Gli APK e i relativi SHA-256 sono pubblicati nelle GitHub Releases. Su iOS la distribuzione agli utenti avviene tramite App Store.

## Note di rilascio

- Notizie più fluide: feed preparato una sola volta, card Home di altezza stabile e dettaglio formattato con link alla fonte.
- Cache e navigazione separate per account e profilo; consenso notifiche associato all’account attivo.
- Banner Info app e Aggiornamenti più leggibili; verifica del pacchetto collegata allo stato reale dell’updater.
- Storage locale reimpostato una sola volta per questa migrazione, con avviso da confermare all’apertura. Sarà necessario accedere di nuovo.
- Liquid Monet 2.0.32 e UniSDK 1.0.18; log trasporti senza contenuti delle risposte del portale.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
