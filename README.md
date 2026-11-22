# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.1.0**, build **1180**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.1.0%2B1180/androidApp-release.apk)

Android e iOS hanno pubblicazioni indipendenti nelle GitHub Releases. Le IPA non firmate richiedono firma/provisioning.

[Release Android e iOS](https://github.com/Anto426-Project/uniapp-upstream/releases)

## Note di rilascio

- **Tema Studio completamente ridisegnato.** La schermata Tema è ora organizzata in tre schede (**Stile**, **Effetti** e **Interfaccia**) con intestazione dal vivo dei token Monet, menu a tendina per sfondo Liquid e qualità ottica, controllo della velocità di animazione dello sfondo e **Orbital Pulse** impostato come nuovo sfondo predefinito in cima all’elenco.
- **Color Lab di nuova generazione.** Ridisegnato con le schede **Spettro**, **Regolazione** (HSB e RGB) e **Preset** (UniApp, Vibranti, Pastello, Eleganti), anteprima dal vivo della palette Monet (Primario, Superficie, Secondario, Terziario), convalida del codice HEX, cronologia dei colori recenti, tinta casuale armoniosa e ripristino rapido.
- **Barra di navigazione e animazioni personalizzabili.** Nelle impostazioni Tema puoi attivare o nascondere le etichette della barra, nasconderla allo scorrimento, scegliere le transizioni tra pagine (scorrimento orizzontale predefinito, con anteprima interattiva) e configurare l’apparizione animata delle sezioni (disattivata di default, con anteprima e tasto Riproduci). Disabilitato lo swipe laterale tra schede, ripristinato lo scorrimento fluido nelle Notizie e integrata la transizione standard di navigazione per il Changelog.
- **Prenotazione Trasporti rinnovata.** Nuova schermata con selettore a schede per la direzione (Andata, Ritorno, A/R), anteprima di tratte e fermate, pass riepilogativo delle corse garantite e calendario `LiquidDatePicker` con filtro sui giorni prenotabili, evidenziazione delle corse già prenotate e selezione multipla.
- **Prenotazione spazi Biblioteca aggiornata.** Migrata la prenotazione dei posti in Biblioteca ai selettori `LiquidSelect` e alle caselle `LiquidCheckbox` di Liquid Monet, per scegliere con maggiore chiarezza tipologia, sede, risorsa e fasce orarie.
- **Didattica, Voti, Carriera e Badge.** Aggiunti gli scenari sui CFU rimanenti con voto di laurea stimato per fascia di media, migliorato il layout delle metriche reali in Voti e centrati i controlli nell’Obiettivo di laurea. In Carriera il filtro predefinito è ora «Tutti»; rimossi la hero card ridondante nello Storico esami, i riquadri duplicati in Statistiche e il codice a barre superfluo dal Badge accademico.
- **Dispositivi connessi, Account e Sicurezza.** Ripristinato il pulsante «Disconnetti tutti» nella barra superiore dei Dispositivi connessi, migliorata l’identificazione dei dispositivi e introdotta la revoca lato server di sessioni e ticket alla disconnessione o rimozione di un account. Rafforzata la sicurezza con riaccesso protetto obbligatorio per gli account con PIN/biometria, disabilitazione di backup e traffico in chiaro su Android (`allowBackup=false`, `usesCleartextTraffic=false`) e gestione accurata di annullamento e mancata configurazione della biometria su iOS.
- **Informazioni app e localizzazione completa in dieci lingue.** Snellite Informazioni app e Aggiornamenti con indicatore «Novità» allineato al banner di aggiornamento. Tradotti in tutte e dieci le lingue il calendario e le date dei trasporti, i nuovi errori del portale, i controlli di Tema/Color Lab e i toast delle notifiche, sincronizzati con la lingua attiva nell’app anche in background (Android 13+) e mantenuti visibili durante i cambi di schermata.
- **Nuova architettura dati, pulizia codice e compatibilità iOS.** Consolidato l’intero livello dati nei motori unificati `UniGateway`, `UniCacheEngine`, `UniRepository` e contratti account, rimosso il codice inutilizzato e spostati tutti i componenti UI dalle schermate nei rispettivi package `components/`. Risolti i problemi di compilazione e dipendenze su iOS (`NewsContentFormatter` e migrazione a `androidx.lifecycle` `2.11.1`).
- **SDK ed Ecosistema aggiornati.** Aggiornati **Liquid Monet** `2.0.55` (`LiquidDatePicker` nativo con filtri e multi-selezione, animazioni di caricamento/shimmer e predictive back migliorati), **UniSDK** `2.0.36` (revoca sessioni, dispositivi connessi, estrazione piano di studi/docenti più robusta, rete Android ottimizzata e logging nativo) e toolchain `AGP 9.5.2`.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

- `release/platforms.json`: ultimi download verificati Android e iOS.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
