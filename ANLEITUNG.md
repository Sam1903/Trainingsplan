# Ganzkörper Trainingsplan – Installation aufs iPhone

Die App besteht aus diesen Dateien (alle zusammen hochladen):
`index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`, `icon-180.png`, `icon-512.png`, `barcode-detector.js`, `zxing_reader.wasm`, `datenschutz.html`

## 1. Online stellen (einmalig, kostenlos)

**Variante A – Netlify Drop (am einfachsten, ohne Account möglich)**
1. Auf dem PC https://app.netlify.com/drop öffnen.
2. Den ganzen Ordner `Trainingsplan` ins Browserfenster ziehen.
3. Du bekommst eine Adresse wie `https://xyz.netlify.app`. Ohne Account verfällt sie nach einiger Zeit, mit kostenlosem Account bleibt sie dauerhaft.

**Variante B – GitHub Pages**
1. Neues Repository auf github.com anlegen und die Dateien hochladen („Add file → Upload files“).
2. Settings → Pages → Branch `main`, Ordner `/ (root)` → Save.
3. Nach 1–2 Minuten läuft die App unter `https://<benutzername>.github.io/<repo>/`.

## 2. Auf dem iPhone installieren
1. Die Adresse in **Safari** öffnen.
2. Teilen-Symbol → **„Zum Home-Bildschirm“** → Hinzufügen.
3. Die App startet jetzt vom Home-Bildschirm im Vollbild und funktioniert danach auch offline.

## Gut zu wissen
- Alle Daten (Profil, Zeiten, Trainingsverlauf) bleiben **nur auf deinem iPhone**. Es wird nichts an einen Server geschickt.
- Unter **Daten → Sicherung exportieren** kannst du ab und zu ein Backup speichern, z. B. in der Dateien-App.
- Nach Änderungen an der App: Dateien erneut hochladen und in `sw.js` die Versionsnummer bei `CACHE` erhöhen.
