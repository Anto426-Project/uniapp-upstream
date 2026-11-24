# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.1.4**, build **1184**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.1.4%2B1184/androidApp-release.apk)

Android e iOS hanno pubblicazioni indipendenti nelle GitHub Releases. Le IPA non firmate richiedono firma/provisioning.

[Release Android e iOS](https://github.com/Anto426-Project/uniapp-upstream/releases)

## Note di rilascio

- **Modalità offline e cache cifrata affidabili.** Ripristino offline della sessione salvata con riattivazione automatica al ritorno della rete, lettura diretta di dati e biglietti dallo storage cifrato e conservazione di dettaglio corsi e presenze in assenza di connessione.
- **Notizie più pulite e leggibili.** Risolti gli a capo anomali nei titoli (normalizzazione spazi Unicode in UniSDK `2.0.38`, separatori invisibili e locale italiano anche con interfaccia in lingue CJK), rimossa la sintassi Markdown grezza dalle anteprime e allineate le card nel carosello della Home.
- **Banner Aggiornamenti e Informazioni rifiniti.** Rimossa l’etichetta in alto e il colore verde quando l’app è aggiornata allineando tutto ai colori del tema attivo, eliminato lo spinner duplicato nell’intestazione e sostituiti gli indicatori circolari con `LiquidCircularProgressIndicator` di Liquid Monet.
- **Card espandibili Liquid Monet in Presenze.** Sostituite le card espandibili personalizzate con il componente nativo `LiquidExpandableCard` di Liquid Monet, allineando animazioni, spaziatura e fisiche al resto dell’app.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

- `release/platforms.json`: ultimi download verificati Android e iOS.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
