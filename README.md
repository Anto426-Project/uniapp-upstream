# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.0.15**, build **1172**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.0.15%2B1172/androidApp-release.apk)

Android, iOS, Windows, Linux e macOS hanno pubblicazioni indipendenti nelle GitHub Releases. Linux comprende Debian/Ubuntu e Arch Linux. Le IPA non firmate richiedono firma/provisioning.

[Tutte le piattaforme e varianti](https://github.com/Anto426-Project/uniapp-upstream/releases)

## Note di rilascio

- UniSDK aggiornato alla versione 1.0.25, con messaggi di errore gestiti e localizzati dall’app.
- Ripristinata la rotazione 3D delle card e del banner generico, rispettando Riduci movimento.
- Download dedicati per Android, iOS, Windows, Linux (Debian/Ubuntu e Arch) e macOS.
- In Tema, selettore degli otto preset Liquid Monet con Dissolvenza orizzontale predefinita e preferenze salvate.
- Liquid Monet aggiornato alla versione 2.0.36: transizione unica tra pagine e ritorno indietro, senza animazioni locali delle schermate.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

- `release/platforms.json`: ultimi download verificati per piattaforma e variante Linux.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
