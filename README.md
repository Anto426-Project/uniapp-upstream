# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.1.1**, build **1181**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.1.1%2B1181/androidApp-release.apk)

Android e iOS hanno pubblicazioni indipendenti nelle GitHub Releases. Le IPA non firmate richiedono firma/provisioning.

[Release Android e iOS](https://github.com/Anto426-Project/uniapp-upstream/releases)

## Note di rilascio

- **Dettaglio insegnamenti arricchito.** Programma, prerequisiti e descrizioni dei corsi ora supportano formattazione HTML e Markdown con titoli, elenchi ed enfasi per una lettura più ordinata.
- **Banner aggiornamenti rifinito.** Migliorate le transizioni di stato e gli indicatori di verifica, con barra di avanzamento fluida di Liquid Monet allineata al colore d’accento del tema.
- **Impostazioni, Informazioni e Aggiornamenti uniformati.** Righe compatte di altezza uniforme con etichette e sottotitoli ridotti su una sola riga in tutte e dieci le lingue. In Impostazioni la voce Aggiornamenti mostra sempre la versione installata lasciando l’avviso al badge «Nuovo», e i Dispositivi connessi si aggiornano automaticamente all’apertura.
- **Simulatore voti e Carriera allineati.** Allineato il limite del bonus punti laurea nel simulatore e uniformati colori e badge degli esami superati nel libretto.
- **Architettura dati e navigazione modulari.** Suddivisi gateway dati, builder dei contratti e instradamento delle schermate in moduli dedicati per dominio funzionale, mantenendo invariate tutte le funzioni dell’app.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

- `release/platforms.json`: ultimi download verificati Android e iOS.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
