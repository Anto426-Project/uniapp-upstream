# UniApp — distribuzione

UniApp è un progetto indipendente per accedere ai servizi universitari. Questo repository contiene il sito di distribuzione e il manifest degli aggiornamenti Android.

Versione **2.0.21**, build **1179**.

## Download Android

- [arm64-v8a](https://github.com/Anto426-Project/uniapp-upstream/releases/download/v2.0.21%2B1179/androidApp-release.apk)

Android e iOS hanno pubblicazioni indipendenti nelle GitHub Releases. Le IPA non firmate richiedono firma/provisioning.

[Release Android e iOS](https://github.com/Anto426-Project/uniapp-upstream/releases)

## Note di rilascio

- **Voti e simulazioni.** I grafici della carriera sono più chiari e interattivi. Gli esami simulati si salvano sul dispositivo per la carriera selezionata, così puoi riprendere le tue proiezioni alla prossima apertura.
- **Notizie da leggere e condividere.** Le notizie dell’Ateneo mostrano le immagini disponibili e un testo organizzato in paragrafi. Dal dettaglio puoi aprire la fonte o condividere la notizia.
- **Accesso e account ripensati.** La protezione dell’app usa un PIN di sei cifre. Gli account salvati mostrano nome, matricola e corso in una lista più compatta. Le conferme di uscita e revoca sono più leggibili e «Disconnetti tutti» compare quando ci sono altre sessioni caricate.
- **Le novità sono sempre raggiungibili.** La nuova scheda degli aggiornamenti mostra versione e canale. Puoi aprire le note di rilascio prima di accedere o dalla schermata di un aggiornamento obbligatorio.
- **Carriera e presenze.** È più facile consultare gli esami per anno accademico e leggere i dettagli delle presenze. Lo scanner QR si apre direttamente da Presenze. Il badge universitario ha un nuovo disegno.
- **Prenotazioni dei trasporti.** Le corse prenotate sono raggruppate per data e ogni riga apre il dettaglio. È stata rivista la presentazione del titolo di viaggio e del suo codice.
- **Testi localizzati in tutte e dieci le lingue.** Aggiornate le etichette delle Impostazioni, le descrizioni degli SDK e i messaggi di accesso e aggiornamento. I messaggi di conferma restano visibili durante i cambi di schermata.
- **Dopo l’aggiornamento accedi di nuovo.** UniApp reimposta gli account salvati, le sessioni, le preferenze e i dati memorizzati sul dispositivo. I dati sul portale universitario restano disponibili.

## Contenuto del repository

- `update.json`: un solo rilascio Android, con versioni, requisiti e download per architettura.
- `docs/`: sito statico di distribuzione, aggiornabile anche con correzioni indipendenti dagli APK.
- `release/`: metadati della build pubblicata.

- `release/platforms.json`: ultimi download verificati Android e iOS.

[Codice e segnalazioni](https://github.com/Anto426-Project/uniapp)
