# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.0.6**, build **1156**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.0.6%2B1156/androidApp-release.apk)

Gli APK e i relativi SHA-256 sono pubblicati nelle GitHub Releases. Su iOS la distribuzione agli utenti avviene tramite App Store.

## Note di rilascio

- Aggiornato SDK Liquid Monet alla versione 1.0.13 e SDK UniSDK alla 1.0.10.
- Introdotto motore cross-platform per generazione e decodifica codici QR e a barre (Code 128, QR) conforme agli standard.
- Integrata generazione dinamica e fedele del QR code per il badge accademico dello studente.
- Aggiunto salvataggio offline, caching e ispezione ad alta definizione per i biglietti del trasporto universitario.
- Supporto alla decodifica automatica dei codici a barre dai biglietti originali con switch tra vista digitale e immagine originale.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
