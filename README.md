# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.1.6**, build **1187**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.1.6%2B1187/androidApp-release.apk)

Android e iOS hanno pubblicazioni indipendenti nelle GitHub Releases. Le IPA non firmate richiedono firma/provisioning.

[Release Android e iOS](https://github.com/Anto426-Project/uniapp-upstream/releases)

## Note di rilascio

- **Statistiche e analisi carriera completamente riprogettate.** Nuova pagina Statistiche modulare con schede **Andamento**, **Simula** e **Obiettivo**, grafici Liquid Monet frameless interattivi (linea, ciambella e barre) e tre sottopagine dedicate per l’andamento temporale esame per esame, la distribuzione dei voti per fascia e l’analisi del peso CFU.
- **Blocchi, righe e card espandibili uniformati in tutta l’app.** Standardizzati altezze, spaziature e componenti condivisi (`UniInsetGroup`, `UniInsetRow`, `UniBentoTile`) su Home, Didattica, Trasporti, Servizi, Biblioteca, Impostazioni e Aggiornamenti, utilizzando direttamente il componente nativo `LiquidExpandableCard` di Liquid Monet.
- **Foto profilo preservata nel Badge digitale.** Risolta la race condition in `AcademicIdentityViewModel` (aggiornamenti non atomici dello stato che azzeravano `photoData` all’apertura) e aggiunto fallback immediato alla cache di `AccountAvatarStore`, così la foto resta sempre visibile nel tesserino anche offline.
- **Versione banner aggiornamenti mai tagliata.** Spostato il padding nel contenitore di misura di `VersionText` e separato il suffisso pre-release (`-debug`, `-beta`, ecc.) in un badge capsule centrato sotto il numero di versione, così la versione hero resta centrata e leggibile senza troncamenti sia nel banner Aggiornamenti che in Info app.
- **Sedi duplicate unificate in Rubrica.** Normalizzati i nomi delle città dei contatti rimuovendo sigle provincia (`(CB)`, `(IS)`), CAP iniziali e differenze di maiuscole, così varianti come «Campobasso» e «Campobasso (CB)» vengono raggruppate in una sola chip con il conteggio corretto.
- **Liquid Monet SDK aggiornato alla versione 2.0.61.** Migrazione delle ultime 17 icone vettoriali locali in `LiquidIcons`, promozione di `LiquidExpressiveHeroFrame` e `LiquidEmptyState` allo standard Material 3 Expressive nell’SDK, nuovi grafici frameless personalizzabili e altezze normalizzate per `LiquidExpandableCard`.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

- `release/platforms.json`: ultimi download verificati Android e iOS.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
