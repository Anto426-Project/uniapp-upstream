# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.0.20**, build **1178**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.0.20%2B1178/androidApp-release.apk)

Android e iOS hanno pubblicazioni indipendenti nelle GitHub Releases. Le IPA non firmate richiedono firma/provisioning.

[Release Android e iOS](https://github.com/Anto426-Project/uniapp-upstream/releases)

## Note di rilascio

- **Rinnovata l’interfaccia utente.** Dalla Home a Didattica, Trasporti, Rubrica e Impostazioni, le schermate sono state ridisegnate per mettere in risalto le azioni di ogni giorno. La nuova Home riunisce profilo e riepilogo della carriera, mette in evidenza appelli e scadenze e lascia spazio alle tue scorciatoie preferite e a un carosello di notizie da sfogliare.
- Dal **Libretto** passi dagli esami sostenuti al Piano di studi con un tocco. **Appelli** riunisce le prenotazioni e lo Storico. In **Voti** trovi anche Statistiche e puoi passare dall’andamento reale della carriera alle proiezioni degli esami che scegli di simulare.
- In **Trasporti** puoi filtrare le prenotazioni per andata e ritorno. Ogni prenotazione ha una card animata che apre il dettaglio al tocco. Sono state rimosse le pagine del catalogo e del titolo di viaggio. In **Rubrica** la ricerca parte da tutti i contatti e puoi restringerla alla categoria che ti interessa.
- **Il tema si adatta al tuo stile.** Aurora, Mesh, Orbital e Radiant sono stati ridisegnati. Nell’anteprima puoi provare la tua tinta, anche in modalità chiara, e regolare l’intensità del vetro e il movimento dello sfondo. Le card interattive seguono il trascinamento in ogni direzione e l’indicatore delle schede resta visibile durante il cambio.
- Corretto il crash all’apertura di **Tema** su Android. I cursori di personalizzazione funzionano con Material 3 Expressive.
- Rinnovate le pagine di **Informazioni app**, **Progetto**, **Aggiornamenti** e **Changelog**. Ognuna ha il proprio spazio, dalle informazioni sulla versione alle novità dell’ultimo aggiornamento.
- **Dieci lingue** tra cui scegliere nelle Impostazioni. UniApp ricorda la tua scelta al prossimo avvio.
- Quando una **sessione** è confermata inattiva, UniApp la dimentica e ti chiede di accedere di nuovo. Le correzioni per le disconnessioni ripetute sono ancora in verifica nell’uso quotidiano.
- La **Biblioteca** è temporaneamente disattivata. Su Android è stata migliorata la compatibilità con i dispositivi che usano pagine di memoria da 16 KB.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

- `release/platforms.json`: ultimi download verificati Android e iOS.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
