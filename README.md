# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.1.2**, build **1182**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.1.2%2B1182/androidApp-release.apk)

Android e iOS hanno pubblicazioni indipendenti nelle GitHub Releases. Le IPA non firmate richiedono firma/provisioning.

[Release Android e iOS](https://github.com/Anto426-Project/uniapp-upstream/releases)

## Note di rilascio

- **Nuova identità visiva Apple Spark U.** Aggiornate le icone dell’app su Android (adattive e Monet), iOS (Default, Dark e Tinted), logo procedurale interno e favicon del sito.
- **Scanner QR Liquid Monet personalizzato.** Sostituita l’interfaccia predefinita dello scanner presenze con un mirino animato Liquid Glass con angoli Monet, raggio di scansione, toggle torcia, schermata permessi nativa e stato di elaborazione dedicato.
- **Dettaglio insegnamenti completamente rinnovato.** Nuova pagina unica scorrevole con docenti normalizzati, collegamento diretto al Course Catalogue CINECA e sezioni del programma espandibili con supporto a descrittori di Dublino, moduli CFU, tabelle e bibliografie.
- **Avvio e caricamento più rapidi.** Introdotta una strategia di precaricamento dati a 3 livelli di priorità con corsia in background limitata, per aprire subito le schermate principali senza rallentamenti.
- **Aggiornamenti, Sblocco e Navigazione rifiniti.** Migliorati margini e spaziature in Sblocco/PIN, corretti i margini inferiori quando la barra di navigazione è nascosta e mantenuto sempre visibile il Changelog durante gli aggiornamenti obbligatori.
- **SDK aggiornati e codice snellito.** Aggiornati Liquid Monet `2.0.56` e UniSDK `2.0.37` (titoli reali degli insegnamenti e URL Course Catalogue), unificato `commonMain` e rimosse oltre 400 stringhe inutilizzate su tutte e dieci le lingue.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

- `release/platforms.json`: ultimi download verificati Android e iOS.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
