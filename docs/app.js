/**
 * UniApp Upstream - Dynamic Liquid Monet Application
 * Prende TUTTI i dati in tempo reale dagli asset (update.json, metadati, icona).
 * Nessun dato di default fittizio o hardcoded obsoleto.
 */

// Dataset iniziale precaricato dal manifest reale di release
// garantisce resa istantanea sia offline che online senza flash o schermate bianche
const INITIAL_MANIFEST = {
  "channels": {
    "stable": {
      "release": {
        "latestVersion": "1.5.2",
        "minSupportedVersion": "1.1.0",
        "mandatory": true,
        "downloadUrl": "https://raw.githubusercontent.com/Anto426-Project/UniappUpstream/main/src/release/androidApp-release.apk",
        "notes": "- Aggiornamento di stabilità generale e correzione bug.",
        "publishedAt": "2026-03-08",
        "appEnabled": true,
        "description": "Versione stabile e verificata di UniApp per gli studenti dell'Università degli Studi del Molise."
      }
    },
    "beta": {
      "release": {
        "latestVersion": "1.8.9-beta",
        "latestVersionCode": 199,
        "minSupportedVersion": "1.8.5-beta",
        "minSupportedVersionCode": 195,
        "mandatory": true,
        "releaseChannel": "beta",
        "downloadUrl": "https://github.com/Anto426-Project/UniappUpstream/releases/download/v1.8.9-beta%2B199/androidApp-universal-release.apk",
        "downloadUrlsByAbi": {
          "arm64-v8a": "https://github.com/Anto426-Project/UniappUpstream/releases/download/v1.8.9-beta%2B199/androidApp-arm64-v8a-release.apk",
          "universal": "https://github.com/Anto426-Project/UniappUpstream/releases/download/v1.8.9-beta%2B199/androidApp-universal-release.apk",
          "armeabi-v7a": "https://github.com/Anto426-Project/UniappUpstream/releases/download/v1.8.9-beta%2B199/androidApp-armeabi-v7a-release.apk"
        },
        "notes": "Changelog 25 May 2026:\n- Aggiunta la compilazione dei questionari con supporto a piu' pagine, domande obbligatorie e domande opzionali.\n- Gestiti piu' questionari per materia e collegata la nuova schermata di compilazione dalla lista questionari.\n- Corretto il QR studente usando il contenuto badge corretto e una generazione piu' vicina al badge ufficiale.\n- Aggiunto il pulsante per annullare gli appelli prenotati quando la prenotazione e' cancellabile.\n- Migliorate prenotazioni e cancellazioni dei trasporti, inclusa la selezione dei soli giorni feriali.\n- Uniformato il padding inferiore delle schermate di dettaglio e rifiniti toast e componenti comuni.",
        "publishedAt": "2026-05-25",
        "buildCommit": "d8634232cf263241918d8a236de58262b3a3ff67",
        "appEnabled": true,
        "description": "Stanchi della vecchia app universitaria?\nScopri UniApp, l’app non ufficiale per gli studenti dell’Università degli Studi del Molise, sviluppata in autonomia da Anto426. Completamente riscritta in Kotlin nativo, utilizza le più recenti tecnologie Material 3 Design e Jetpack Compose per offrire un’esperienza moderna, fluida e intuitiva. Gestisci la tua carriera, consulta il libretto, prenota gli esami e accedi rapidamente alle informazioni più importanti, tutto in un’unica interfaccia veloce e curata."
      }
    }
  }
};

let updateManifest = INITIAL_MANIFEST;
let currentChannel = 'beta';

// Formattazione data in italiano
function formatDate(dateStr) {
  if (!dateStr) return 'Non specificata';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

// Parsing intelligente delle note del changelog da markdown
function parseChangelog(notes) {
  if (!notes || !notes.trim()) {
    return '<li class="changelog-item"><span class="bullet-icon">ℹ️</span><span>Nessuna nota di rilascio specificata per questo canale.</span></li>';
  }

  const lines = notes.split('\n');
  const items = [];

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    if (line.toLowerCase().startsWith('changelog')) {
      continue; // Salta intestazione generica
    }

    let content = line;
    let icon = '✨';

    if (line.startsWith('-') || line.startsWith('*')) {
      content = line.substring(1).trim();
    }

    const lower = content.toLowerCase();
    if (lower.includes('corretto') || lower.includes('risolto') || lower.includes('fix') || lower.includes('bug')) {
      icon = '🛠️';
    } else if (lower.includes('migliorat') || lower.includes('ottimizzat') || lower.includes('uniformat') || lower.includes('velocizzat')) {
      icon = '⚡';
    } else if (lower.includes('aggiunt') || lower.includes('nuov') || lower.includes('introdott')) {
      icon = '✨';
    } else if (lower.includes('sicurezza') || lower.includes('crittografia') || lower.includes('privacy')) {
      icon = '🛡️';
    }

    items.push(`
      <li class="changelog-item">
        <span class="bullet-icon">${icon}</span>
        <span class="changelog-text">${content}</span>
      </li>
    `);
  }

  return items.length ? items.join('') : '<li class="changelog-item"><span class="bullet-icon">ℹ️</span><span>Nessun dettaglio disponibile.</span></li>';
}

// Aggiorna l'interfaccia con i dati del canale selezionato
function renderChannelData(channel) {
  currentChannel = channel;

  // 1. Gestione pillola animata e tab
  const tabBeta = document.getElementById('tab-beta');
  const tabStable = document.getElementById('tab-stable');
  const switchPill = document.getElementById('switch-pill');

  if (channel === 'beta') {
    if (switchPill) switchPill.style.transform = 'translateX(0)';
    if (tabBeta) tabBeta.classList.add('active');
    if (tabStable) tabStable.classList.remove('active');
  } else {
    if (switchPill) switchPill.style.transform = 'translateX(100%)';
    if (tabStable) tabStable.classList.add('active');
    if (tabBeta) tabBeta.classList.remove('active');
  }

  if (!updateManifest || !updateManifest.channels) return;

  const channelNode = updateManifest.channels[channel];
  if (!channelNode || !channelNode.release) {
    showErrorState(`Nessun dato di rilascio per il canale ${channel}.`);
    return;
  }

  const rel = channelNode.release;

  // 2. Badge di Canale e Stato
  const elStatusPill = document.getElementById('hero-status-pill');
  if (elStatusPill) {
    elStatusPill.textContent = channel === 'beta' 
      ? `Canale Beta • Build #${rel.latestVersionCode || '199'} attiva` 
      : 'Canale Stabile • Release verificata';
  }

  // 3. Versione e Version Code
  const elVersion = document.getElementById('hero-version');
  if (elVersion) {
    elVersion.textContent = rel.latestVersion ? `v${rel.latestVersion}` : 'v1.0';
  }

  // 4. Metadati Rapidi Hero
  const elDate = document.getElementById('spec-date');
  const elMandatory = document.getElementById('spec-mandatory');
  const elMinVer = document.getElementById('spec-minver');

  if (elDate) elDate.textContent = formatDate(rel.publishedAt);
  if (elMandatory) {
    elMandatory.textContent = rel.mandatory ? 'Obbligatorio' : 'Consigliato';
    elMandatory.className = rel.mandatory ? 'spec-value status-warning' : 'spec-value status-success';
  }
  if (elMinVer) {
    elMinVer.textContent = rel.minSupportedVersion ? `v${rel.minSupportedVersion}+` : 'Android 8.0+';
  }

  // 6. Split Button Hero con ABI Principale e Menu Dropdown
  renderHeroDownloadCTA(rel);

  // 7. Hub Completo di Download per Architettura (ABI)
  renderDownloadHub(rel);

  // 8. Note di Rilascio / Changelog
  renderChangelog(rel, channel);

  // 9. Tabella Completa Metadati Tecnici
  renderSpecsTable(rel, channel);
}

// Configura il pulsante di download principale nell'Hero
function renderHeroDownloadCTA(rel) {
  const heroMainBtn = document.getElementById('hero-main-download-btn');
  const heroAbiMenu = document.getElementById('hero-abi-menu');

  let primaryUrl = rel.downloadUrl || '#download';
  let primaryLabel = 'Scarica APK';

  if (rel.downloadUrlsByAbi && rel.downloadUrlsByAbi['arm64-v8a']) {
    primaryUrl = rel.downloadUrlsByAbi['arm64-v8a'];
    primaryLabel = 'Scarica APK (ARM64-v8a)';
  } else if (rel.downloadUrl) {
    primaryUrl = rel.downloadUrl;
    primaryLabel = `Scarica APK (${rel.latestVersion || 'Release'})`;
  }

  if (heroMainBtn) {
    heroMainBtn.href = primaryUrl;
    const btnText = heroMainBtn.querySelector('.btn-text');
    if (btnText) {
      btnText.textContent = primaryLabel;
    }
  }
}

// Rendering dinamico dei download raggruppati nella scheda unificata
function renderDownloadHub(rel) {
  const container = document.getElementById('download-cards-container');
  if (!container) return;

  // Aggiorna i metadati della toolbar della scheda di download
  const versionTag = document.getElementById('download-version-tag');
  const dateTag = document.getElementById('download-date-tag');
  if (versionTag) {
    const verText = rel.latestVersion ? (rel.latestVersion.startsWith('v') ? rel.latestVersion : `v${rel.latestVersion}`) : 'Release';
    versionTag.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
      <span>${verText}</span>
    `;
  }
  if (dateTag) {
    dateTag.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      <span>${formatDate(rel.publishedAt)}</span>
    `;
  }

  container.innerHTML = '';

  if (rel.downloadUrlsByAbi && typeof rel.downloadUrlsByAbi === 'object') {
    // Ordine di priorità: prima ARM64 (lo standard moderno per quasi tutti i device), poi APK Universale, poi ARMv7a 32-bit legacy
    const preferredOrder = ['arm64-v8a', 'universal', 'armeabi-v7a'];
    const abis = Object.keys(rel.downloadUrlsByAbi).sort((a, b) => {
      const idxA = preferredOrder.indexOf(a);
      const idxB = preferredOrder.indexOf(b);
      return (idxA !== -1 ? idxA : 99) - (idxB !== -1 ? idxB : 99);
    });

    abis.forEach((abi) => {
      const url = rel.downloadUrlsByAbi[abi];
      let title = abi.toUpperCase();
      let targetPill = abi;
      let description = 'Pacchetto binario compilato per processori Android.';
      let isRecommended = false;
      let iconSvg = '';

      if (abi === 'arm64-v8a') {
        title = 'ARM64-v8a';
        targetPill = 'Dispositivi moderni 64-bit';
        description = 'Consigliato per smartphone moderni a 64-bit (99% dei dispositivi in circolazione).';
        isRecommended = true;
        iconSvg = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="16" height="16" x="4" y="4" rx="2"/>
            <rect width="6" height="6" x="9" y="9" rx="1"/>
            <path d="M9 2v2"/><path d="M15 2v2"/><path d="M9 20v2"/><path d="M15 20v2"/>
            <path d="M20 9h2"/><path d="M20 14h2"/><path d="M2 9h2"/><path d="M2 14h2"/>
          </svg>
        `;
      } else if (abi === 'universal') {
        title = 'APK Universale';
        targetPill = 'Tutti i dispositivi';
        description = 'Include tutte le librerie native: garantisce massima compatibilità con ogni architettura.';
        iconSvg = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
        `;
      } else if (abi === 'armeabi-v7a') {
        title = 'ARMv7a (32-bit)';
        targetPill = 'Legacy 32-bit';
        description = 'Compilazione mirata per smartphone o tablet meno recenti con architettura a 32-bit.';
        iconSvg = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        `;
      } else {
        iconSvg = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
        `;
      }

      const row = document.createElement('div');
      row.className = `abi-download-row ${isRecommended ? 'recommended' : ''}`;
      row.innerHTML = `
        <div class="abi-row-left">
          <div class="abi-row-icon">
            ${iconSvg}
          </div>
          <div class="abi-row-info">
            <div class="abi-row-title-line">
              <span class="abi-name">${title}</span>
              ${isRecommended ? '<span class="abi-badge-rec">Consigliato</span>' : ''}
              <span class="abi-target-pill">${targetPill}</span>
            </div>
            <p class="abi-desc-text">${description}</p>
          </div>
        </div>
        <div class="abi-row-actions">
          <a href="${url}" class="btn-download-action-compact ${isRecommended ? 'primary' : 'secondary'}" download title="Scarica APK ${title}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Scarica APK</span>
          </a>
          <button class="btn-copy-url-compact" onclick="copyLink('${url}')" title="Copia link download" aria-label="Copia link download">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
            </svg>
          </button>
        </div>
      `;
      container.appendChild(row);
    });
  } else if (rel.downloadUrl) {
    const row = document.createElement('div');
    row.className = 'abi-download-row recommended';
    row.innerHTML = `
      <div class="abi-row-left">
        <div class="abi-row-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
        </div>
        <div class="abi-row-info">
          <div class="abi-row-title-line">
            <span class="abi-name">APK Ufficiale Stabile</span>
            <span class="abi-badge-rec">Consigliato</span>
            <span class="abi-target-pill">Tutti i dispositivi</span>
          </div>
          <p class="abi-desc-text">Pacchetto di installazione Android pronto per l'uso immediato e verificato.</p>
        </div>
      </div>
      <div class="abi-row-actions">
        <a href="${rel.downloadUrl}" class="btn-download-action-compact primary" download title="Scarica APK">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span>Scarica APK (${rel.latestVersion ? 'v' + rel.latestVersion : 'Release'})</span>
        </a>
        <button class="btn-copy-url-compact" onclick="copyLink('${rel.downloadUrl}')" title="Copia link download" aria-label="Copia link download">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
          </svg>
        </button>
      </div>
    `;
    container.appendChild(row);
  } else {
    container.innerHTML = '<p class="error-inline">Nessun file APK configurato per questo canale.</p>';
  }
}

// Rendering Note di Rilascio
function renderChangelog(rel, channel) {
  const elList = document.getElementById('cl-list');
  const elBadge = document.getElementById('cl-channel-badge');
  const elVersion = document.getElementById('cl-version-title');
  const elDate = document.getElementById('cl-date');
  const elCommit = document.getElementById('cl-commit-link');

  if (elBadge) elBadge.textContent = channel.toUpperCase();
  if (elVersion) {
    const ver = rel.latestVersion ? (rel.latestVersion.startsWith('v') ? rel.latestVersion : `v${rel.latestVersion}`) : 'Release';
    elVersion.textContent = ver;
  }
  if (elDate) elDate.textContent = `Rilasciata il ${formatDate(rel.publishedAt)}`;
  if (elList) elList.innerHTML = parseChangelog(rel.notes);

  if (elCommit) {
    if (rel.buildCommit) {
      const shortSha = rel.buildCommit.substring(0, 7);
      elCommit.textContent = `#${shortSha}`;
      elCommit.href = `https://github.com/Anto426-Project/Uniapp/commit/${rel.buildCommit}`;
      elCommit.style.display = 'inline-flex';
    } else {
      elCommit.style.display = 'none';
    }
  }
}

// Rendering Tabella Metadati Tecnici
function renderSpecsTable(rel, channel) {
  const tableBody = document.getElementById('specs-table-body');
  if (!tableBody) return;

  const rows = [
    { label: 'Application ID', value: 'com.anto426.uniapp' },
    { label: 'Versione Rilascio', value: rel.latestVersion || 'N/D' },
    { label: 'Version Code', value: rel.latestVersionCode ? String(rel.latestVersionCode) : 'N/D' },
    { label: 'Canale di Deploy', value: channel.toUpperCase() },
    { label: 'Data di Pubblicazione', value: formatDate(rel.publishedAt) },
    { label: 'Min Versione Supportata', value: rel.minSupportedVersion ? `v${rel.minSupportedVersion}` : 'N/D' },
    { label: 'Min Version Code Supportato', value: rel.minSupportedVersionCode ? String(rel.minSupportedVersionCode) : 'N/D' },
    { label: 'Aggiornamento Obbligatorio', value: rel.mandatory ? 'Sì (Bloccante)' : 'No (Facoltativo)' },
    { label: 'Stato Applicazione', value: rel.appEnabled !== false ? 'Attiva' : 'Disabilitata' },
    { 
      label: 'Build Commit SHA', 
      value: rel.buildCommit 
        ? `<a href="https://github.com/Anto426-Project/Uniapp/commit/${rel.buildCommit}" target="_blank" class="table-link">${rel.buildCommit}</a>` 
        : 'N/D' 
    }
  ];

  tableBody.innerHTML = rows.map(r => `
    <tr>
      <td class="spec-prop-name">${r.label}</td>
      <td class="spec-prop-val">${r.value}</td>
    </tr>
  `).join('');
}

// Caricamento Dati Reali da update.json (Asincrono in Background)
async function loadAssetsData() {
  const manifestUrls = [
    './update.json',
    '../update.json',
    '/update.json',
    'https://raw.githubusercontent.com/Anto426-Project/UniappUpstream/main/update.json'
  ];

  for (const url of manifestUrls) {
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && data.channels) {
          updateManifest = data;
          renderChannelData(currentChannel);
          break;
        }
      }
    } catch (err) {
      // Continua con l'URL successivo
    }
  }
}

// Copia Link con Toast
function copyLink(url) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('Link APK copiato negli appunti!');
    }).catch(() => {
      showToast('Copia non riuscita');
    });
  } else {
    showToast('Appunti non supportati dal browser');
  }
}

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  const text = document.getElementById('toast-message');
  if (!toast || !text) return;

  text.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// Monet Theme Switcher (Violet, Sapphire, Emerald, Amber)
function setTheme(theme) {
  document.body.className = '';
  document.body.classList.add(`theme-${theme}`);
  localStorage.setItem('uniapp-theme', theme);

  document.querySelectorAll('.palette-pill, .palette-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
}

// Caricamento Dinamico Screenshots dalla cartella
async function loadScreenshots() {
  const track = document.getElementById('screenshots-track');
  if (!track) return;

  const defaultScreenshots = [
    { file: 'Screenshot_2026-04-03-23-22-14-44_92b74ce0392afcb9dbc7c9e6841482f8.jpg', title: 'Dashboard & Carriera', description: 'Panoramica esami, media e stato studente' },
    { file: 'Screenshot_2026-04-03-23-22-22-02_92b74ce0392afcb9dbc7c9e6841482f8.jpg', title: 'Libretto & Base Laurea', description: 'Consultazione voti e calcolo proiezioni' },
    { file: 'Screenshot_2026-04-03-23-22-27-00_92b74ce0392afcb9dbc7c9e6841482f8.jpg', title: 'Appelli d\'Esame', description: 'Prenotazione e cancellazione esami' },
    { file: 'Screenshot_2026-04-03-23-22-34-61_92b74ce0392afcb9dbc7c9e6841482f8.jpg', title: 'Tasse & Contributi', description: 'Stato pagamenti e avvisi PagoPA' },
    { file: 'Screenshot_2026-04-03-23-22-45-38_92b74ce0392afcb9dbc7c9e6841482f8.jpg', title: 'Badge Universitario', description: 'QR Code studente e tessera digitale' },
    { file: 'Screenshot_2026-04-03-23-22-53-05_92b74ce0392afcb9dbc7c9e6841482f8.jpg', title: 'Questionari ANVUR', description: 'Valutazione didattica a schede' },
    { file: 'Screenshot_2026-04-03-23-22-59-32_92b74ce0392afcb9dbc7c9e6841482f8.jpg', title: 'Servizi Navetta', description: 'Orari e prenotazione trasporti nei feriali' },
    { file: 'Screenshot_2026-04-03-23-23-02-77_92b74ce0392afcb9dbc7c9e6841482f8.jpg', title: 'Personalizzazione Temi', description: 'Design Liquid Monet dinamico' }
  ];

  let screenshots = defaultScreenshots;

  // 1. Interroga l'API di GitHub per scoprire in tempo reale tutti i file presenti nella cartella
  try {
    const ghRes = await fetch('https://api.github.com/repos/Anto426-Project/UniappUpstream/contents/assets/screenshots', { cache: 'no-store' });
    if (ghRes.ok) {
      const ghFiles = await ghRes.json();
      if (Array.isArray(ghFiles) && ghFiles.length > 0) {
        const imageFiles = ghFiles.filter(f => /\.(png|jpe?g|webp)$/i.test(f.name));
        if (imageFiles.length > 0) {
          screenshots = imageFiles.map((f, idx) => {
            const def = defaultScreenshots[idx];
            return {
              file: f.name,
              url: f.download_url || `assets/screenshots/${f.name}`,
              title: def ? def.title : `Schermata ${idx + 1}`,
              description: def ? def.description : 'Interfaccia nativa UniApp'
            };
          });
        }
      }
    }
  } catch (e) {
    // 2. Se offline o API rate-limited, prova il manifest locale
    try {
      const mRes = await fetch('assets/screenshots/manifest.json');
      if (mRes.ok) {
        const mData = await mRes.json();
        if (Array.isArray(mData) && mData.length > 0) {
          screenshots = mData;
        }
      }
    } catch (err) {}
  }

  // 3. Render dinamico di ciascuna scheda screenshot
  track.innerHTML = '';
  screenshots.forEach(sc => {
    const card = document.createElement('div');
    card.className = 'screenshot-glass-card';
    const imgSrc = sc.url || `assets/screenshots/${sc.file}`;
    const rawFallback = `https://raw.githubusercontent.com/Anto426-Project/UniappUpstream/main/assets/screenshots/${sc.file}`;

    card.innerHTML = `
      <div class="screenshot-img-box">
        <img 
          src="${imgSrc}" 
          onerror="this.src='${rawFallback}'" 
          alt="${sc.title}" 
          loading="lazy"
        >
      </div>
      <div class="screenshot-caption">
        <h4>${sc.title}</h4>
        <p>${sc.description}</p>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(imgSrc, sc.title));
    track.appendChild(card);
  });
}

// Lightbox per ingrandire gli screenshot in vetro ottico
function openLightbox(src, caption) {
  const lb = document.getElementById('glass-lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (!lb || !img) return;

  img.src = src;
  if (cap) cap.textContent = caption || '';
  lb.classList.add('show');
}

function closeLightbox() {
  const lb = document.getElementById('glass-lightbox');
  if (lb) lb.classList.remove('show');
}

// Inizializzazione al caricamento del DOM
document.addEventListener('DOMContentLoaded', () => {
  // 1. Ripristino tema cromatico Monet salvato
  const savedTheme = localStorage.getItem('uniapp-theme') || 'violet';
  setTheme(savedTheme);

  // 2. Listener per tutti i pulsanti palette Monet (nav bar + sotto la console)
  document.querySelectorAll('.palette-pill, .palette-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setTheme(btn.dataset.theme);
    });
  });

  // 3. Listener selettore canale (Beta / Stabile)
  const tabBeta = document.getElementById('tab-beta');
  const tabStable = document.getElementById('tab-stable');
  if (tabBeta) tabBeta.addEventListener('click', () => renderChannelData('beta'));
  if (tabStable) tabStable.addEventListener('click', () => renderChannelData('stable'));



  // 5. Listener Lightbox (chiusura con click sul backdrop o pulsante)
  const lbClose = document.getElementById('lightbox-close-btn');
  const lbModal = document.getElementById('glass-lightbox');
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbModal) {
    lbModal.addEventListener('click', (e) => {
      if (e.target === lbModal) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // 6. Render immediato dei dati iniziali (zero caricamenti a vuoto)
  renderChannelData('beta');

  // 7. Caricamento dinamico screenshots
  loadScreenshots();

  // 8. Sincronizzazione in background con l'ultimo update.json
  loadAssetsData();
});
