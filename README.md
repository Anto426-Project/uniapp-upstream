<p align="center">
  <img src="./assets/uniapp-icon.webp" alt="UniApp icon" width="120" height="120">
</p>

<h1 align="center">UniApp Upstream</h1>


<p align="center">
  <img alt="Canale beta" src="https://img.shields.io/static/v1?label=&message=CANALE%20BETA&color=d97706&style=for-the-badge">
</p>


<p align="center">
  Repository di distribuzione per il canale release Android di <strong>UniApp</strong>.
  Qui vengono pubblicati l'APK corrente, il manifest degli aggiornamenti usato dall'app e i metadati della release.
</p>

<p align="center">
  <a href="https://raw.githubusercontent.com/Anto426-Project/UniappUpstream/main/src/release/androidApp-release.apk"><img alt="APK stabile" src="https://img.shields.io/static/v1?label=&message=STABILE%20APK&color=1f6f5f&style=for-the-badge"></a>
  <a href="https://github.com/Anto426-Project/UniappUpstream/releases/download/v1.8.9-beta%2B199/androidApp-universal-release.apk"><img alt="APK beta" src="https://img.shields.io/static/v1?label=&message=BETA%20APK&color=d97706&style=for-the-badge"></a>
  <a href="./update.json"><img alt="Manifest JSON" src="https://img.shields.io/static/v1?label=&message=MANIFEST%20JSON&color=cb5a2e&style=for-the-badge"></a>
</p>


## Descrizione
Stanchi della vecchia app universitaria?
Scopri UniApp, l’app non ufficiale per gli studenti dell’Università degli Studi del Molise, sviluppata in autonomia da Anto426. Completamente riscritta in Kotlin nativo, utilizza le più recenti tecnologie Material 3 Design e Jetpack Compose per offrire un’esperienza moderna, fluida e intuitiva. Gestisci la tua carriera, consulta il libretto, prenota gli esami e accedi rapidamente alle informazioni più importanti, tutto in un’unica interfaccia veloce e curata.



## Security Scan
Quest'app e' stata scansionata per potenziali minacce.
- [Report Analisi VirusTotal](<https://www.virustotal.com/gui/file-analysis/NzQ4MmEyM2JhODg0NzdjMjc1NTE1NmYyNDEyZWRiMDY6MTc3OTcxMzA4MQ==/detection>)

[![VirusTotal Scan Result](https://img.shields.io/badge/VirusTotal-Scan_Report-blue)](<https://www.virustotal.com/gui/file-analysis/NzQ4MmEyM2JhODg0NzdjMjc1NTE1NmYyNDEyZWRiMDY6MTc3OTcxMzA4MQ==/detection>)


## Screenshot

<p align="center">
  <img src="./assets/screenshots/Screenshot_2026-04-03-23-22-14-44_92b74ce0392afcb9dbc7c9e6841482f8.jpg" width="200" style="margin: 10px;" alt="Screenshot">
  <img src="./assets/screenshots/Screenshot_2026-04-03-23-22-22-02_92b74ce0392afcb9dbc7c9e6841482f8.jpg" width="200" style="margin: 10px;" alt="Screenshot">
  <img src="./assets/screenshots/Screenshot_2026-04-03-23-22-27-00_92b74ce0392afcb9dbc7c9e6841482f8.jpg" width="200" style="margin: 10px;" alt="Screenshot">
  <img src="./assets/screenshots/Screenshot_2026-04-03-23-22-34-61_92b74ce0392afcb9dbc7c9e6841482f8.jpg" width="200" style="margin: 10px;" alt="Screenshot">
  <img src="./assets/screenshots/Screenshot_2026-04-03-23-22-45-38_92b74ce0392afcb9dbc7c9e6841482f8.jpg" width="200" style="margin: 10px;" alt="Screenshot">
  <img src="./assets/screenshots/Screenshot_2026-04-03-23-22-53-05_92b74ce0392afcb9dbc7c9e6841482f8.jpg" width="200" style="margin: 10px;" alt="Screenshot">
  <img src="./assets/screenshots/Screenshot_2026-04-03-23-22-59-32_92b74ce0392afcb9dbc7c9e6841482f8.jpg" width="200" style="margin: 10px;" alt="Screenshot">
  <img src="./assets/screenshots/Screenshot_2026-04-03-23-23-02-77_92b74ce0392afcb9dbc7c9e6841482f8.jpg" width="200" style="margin: 10px;" alt="Screenshot">
</p>


## Panoramica

Questo e' il repository di deploy delle build Android di UniApp.
E' pensato per restare semplice, stabile e leggibile anche da script:

- `src/release/stable/` contiene APK e metadati stabili
- `src/release/beta/` contiene APK e metadati beta
- `update.json` espone i manifest separati per canale sotto `channels`
- `README.md` riassume la release pubblica corrente

## Release Corrente

| Campo | Valore |
| --- | --- |
| App | UniApp |
| Repository | `Anto426-Project/UniappUpstream` |
| Versione corrente | `1.8.9-beta` |
| Canale release | `beta` |
| Version code | `199` |
| Pubblicata il | `2026-05-25` |
| Versione minima supportata | `1.8.5-beta` |
| Aggiornamento obbligatorio | `true` |
| App abilitata | `true` |
| Package name | `com.anto426.uniapp` |
| Min SDK | `29` |
| File APK | `src/release/beta/androidApp-universal-release.apk` |
| Dimensione APK | `52.3 MB` |

## Link Rapidi

- [Scarica APK corrente](https://github.com/Anto426-Project/UniappUpstream/releases/download/v1.8.9-beta%2B199/androidApp-universal-release.apk)
- [Metadati del canale corrente](./src/release/beta/output-metadata.json)
- [Percorso APK del canale corrente](./src/release/beta/androidApp-universal-release.apk)
- [APK stabile](https://raw.githubusercontent.com/Anto426-Project/UniappUpstream/main/src/release/androidApp-release.apk)
- [APK beta](https://github.com/Anto426-Project/UniappUpstream/releases/download/v1.8.9-beta%2B199/androidApp-universal-release.apk)
- [Apri il manifest aggiornamenti](./update.json)

## Note Di Rilascio

Changelog 25 May 2026:
- Aggiunta la compilazione dei questionari con supporto a piu' pagine, domande obbligatorie e domande opzionali.
- Gestiti piu' questionari per materia e collegata la nuova schermata di compilazione dalla lista questionari.
- Corretto il QR studente usando il contenuto badge corretto e una generazione piu' vicina al badge ufficiale.
- Aggiunto il pulsante per annullare gli appelli prenotati quando la prenotazione e' cancellabile.
- Migliorate prenotazioni e cancellazioni dei trasporti, inclusa la selezione dei soli giorni feriali.
- Uniformato il padding inferiore delle schermate di dettaglio e rifiniti toast e componenti comuni.

## Struttura Repository

```text
assets/
  uniapp-icon.webp
  screenshots/
    ...
src/
  release/
    stable/
      ...
    beta/
      ...
update.json
README.md
```

## Feed Aggiornamenti

L'app legge `update.json` per capire se esiste una build piu' recente.
I campi principali sono:

- `channels.stable.release`
- `channels.beta.release`
- `latestVersion`
- `downloadUrl`
- `publishedAt`
- `buildCommit`

`downloadUrl` punta attualmente a:

`https://github.com/Anto426-Project/UniappUpstream/releases/download/v1.8.9-beta%2B199/androidApp-universal-release.apk`

## Flusso Di Pubblicazione

Questo repository viene aggiornato automaticamente dal workflow GitHub Actions del repository principale di UniApp.
Ogni pubblicazione aggiorna:

1. l'APK sotto `src/release/stable/` oppure `src/release/beta/`
2. il relativo `output-metadata.json`
3. `update.json`
4. questo `README.md`

## Note

- Questo repository e' un endpoint di release, non il repository principale di sviluppo.
- I file pubblicati possono cambiare a ogni nuova release.
