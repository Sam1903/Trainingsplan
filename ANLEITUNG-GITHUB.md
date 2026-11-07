# Trainingsplan-App mit GitHub Pages aufs iPhone bringen

Dauer: ca. 10–15 Minuten. Kosten: keine. Programme installieren oder Git-Kenntnisse: nicht nötig, alles läuft im Browser.

---

## Schritt 1: GitHub-Konto anlegen
1. Auf dem PC **https://github.com/signup** öffnen.
2. E-Mail-Adresse, Passwort und einen **Benutzernamen** eingeben.
   Der Benutzername steht später in der Adresse der App, z. B. `https://sascha-fit.github.io/...`. Wähl also einen, den du gern liest.
3. Den Code aus der Bestätigungs-E-Mail eingeben und die Fragen zur Nutzung einfach überspringen.

> Wenn du schon ein Konto hast, meldest du dich an und machst mit Schritt 2 weiter.

## Schritt 2: Neues Repository anlegen
Ein Repository ist ein Projektordner auf GitHub.

1. Oben rechts auf **„+“** und dann auf **„New repository“** klicken.
2. Ausfüllen:
   - **Repository name:** `trainingsplan`. Klein geschrieben und ohne Leerzeichen, weil der Name Teil der Adresse wird.
   - **Description:** frei lassen oder z. B. „Mein Trainingsplan“.
   - **Public** auswählen. GitHub Pages ist im kostenlosen Tarif nur mit öffentlichen Repositories möglich.
     Keine Sorge: Öffentlich ist nur der Code der App. Deine Körperdaten und Trainings werden nie hochgeladen, sie liegen nur auf deinem iPhone.
   - **„Add a README file“** anhaken.
3. Auf **„Create repository“** klicken.

## Schritt 3: App-Dateien hochladen
1. Im neuen Repository auf **„Add file“** und dann auf **„Upload files“** klicken.
2. Im Windows-Explorer den Ordner `C:\Users\sasch\Trainingsplan` öffnen.
3. **Diese 9 Dateien markieren** (Strg gedrückt halten und anklicken) und ins Browserfenster ziehen:
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `icon.svg`
   - `icon-180.png`
   - `icon-512.png`
   - `barcode-detector.js` (Barcode-Scanner)
   - `zxing_reader.wasm` (Barcode-Scanner)
   - `datenschutz.html`

   Die beiden Anleitungen (`.md`) musst du nicht hochladen.
   **Wichtig:** Zieh die Dateien hinein, nicht den ganzen Ordner. Sonst landen sie in einem Unterordner und die Adresse stimmt nicht mehr.
4. Warten, bis alle 9 Dateien in der Liste stehen.
5. Unten unter „Commit changes“ den Text stehen lassen oder „App hochgeladen“ eingeben, dann auf **„Commit changes“** klicken.
6. In der Dateiliste des Repositorys sollten jetzt `index.html` & Co. direkt auf der obersten Ebene stehen.

## Schritt 4: GitHub Pages einschalten
1. Im Repository oben auf **„Settings“** (Zahnrad) klicken.
2. Links im Menü unter „Code and automation“ auf **„Pages“** klicken.
3. Bei **„Build and deployment“**:
   - **Source:** „Deploy from a branch“
   - **Branch:** `main` auswählen, daneben den Ordner **`/ (root)`**
   - Auf **„Save“** klicken.
4. **1–3 Minuten warten** und die Seite neu laden (F5).
   Oben erscheint dann: **„Your site is live at https://BENUTZERNAME.github.io/trainingsplan/“**
5. Mit **„Visit site“** prüfen, ob die App am PC aufgeht.

> Den Fortschritt siehst du auch im Reiter **„Actions“**. Ein grüner Haken bedeutet, dass die Seite online ist.

## Schritt 5: Auf dem iPhone installieren
1. Die Adresse **in Safari** öffnen, nicht in Chrome oder der GitHub-App.
   Tipp: Schick dir die Adresse per Nachricht oder Mail aufs iPhone, damit du sie nicht abtippen musst.
2. Unten auf das **Teilen-Symbol** tippen (Quadrat mit Pfeil nach oben).
3. Nach unten scrollen und **„Zum Home-Bildschirm“** wählen.
   Fehlt der Eintrag, ganz unten auf „Aktionen bearbeiten“ tippen und ihn hinzufügen.
4. Den Namen „Trainingsplan“ stehen lassen und auf **„Hinzufügen“** tippen.
5. Die App **ab jetzt nur noch über das neue Icon** starten.

> **Wichtig:** Auf dem iPhone hat die App vom Home-Bildschirm einen **eigenen Speicher**, getrennt vom Safari-Tab. Gib deine Daten deshalb erst ein, **nachdem** du die App über das Icon geöffnet hast. Sonst sind sie in der App nicht zu sehen.

6. Einmal mit Internet öffnen, danach funktioniert die App auch offline, z. B. im Keller-Fitnessstudio ohne Empfang.

## Schritt 6: Einrichten
1. **Profil:** Größe, Gewicht, Alter, Level und Ziel eingeben.
2. **Zeiten:** Trainingstage antippen, Uhrzeit und Dauer wählen.
3. **Plan:** Deinen Wochenplan ansehen und im Studio auf **„Einheit starten“** tippen.

---

## Später: App aktualisieren
Wenn du eine neue Version der Dateien bekommst:
1. In `sw.js` die Zeile `const CACHE = 'trainingsplan-v1';` auf `v2`, `v3` usw. erhöhen. Das übernehme ich, wenn ich die App für dich ändere.
2. Im Repository auf **„Add file“** und dann **„Upload files“** klicken und die geänderten Dateien hineinziehen. Gleichnamige Dateien werden ersetzt. Danach auf **„Commit changes“** klicken.
3. 1–2 Minuten warten. Dann die App auf dem iPhone öffnen, ganz schließen (vom unteren Rand nach oben wischen und die App wegschieben) und neu öffnen.
   Deine Daten bleiben dabei erhalten.

## Daten sichern
Die Daten liegen nur auf dem iPhone. Wenn du die App vom Home-Bildschirm löschst, sind sie weg.
- In der App unter **Daten** auf **„Sicherung exportieren“** tippen und die Datei z. B. in der Dateien-App oder iCloud Drive speichern.
- Zum Wiederherstellen unter **Daten** auf **Importieren** tippen und die Datei auswählen.
- **Repository nicht umbenennen.** Die Daten hängen an der Adresse, und mit einem neuen Namen startet die App leer. Davor also eine Sicherung exportieren.

---

## Probleme lösen

| Problem | Lösung |
|---|---|
| **404 – There isn't a GitHub Pages site here** | Noch 2–3 Minuten warten. Prüfen, ob `index.html` direkt im Repository liegt und nicht in einem Unterordner, und ob in Settings → Pages der Branch `main` mit `/ (root)` gespeichert ist. |
| Pages-Einstellung fehlt oder ist ausgegraut | Das Repository muss **Public** sein: Settings → General → ganz unten „Change visibility“. |
| App zeigt die alte Version | Ist `CACHE` in `sw.js` erhöht? App komplett schließen und neu öffnen, notfalls zweimal. |
| Kein Icon, nur ein Buchstabe auf dem Home-Bildschirm | Prüfen, ob `icon-180.png` hochgeladen ist. Das Icon vom Home-Bildschirm löschen und neu hinzufügen. |
| „Zum Home-Bildschirm“ fehlt | Die Seite ist nicht in Safari geöffnet. Adresse kopieren und in Safari einfügen. |
| Daten sind nach dem Hinzufügen weg | Das ist normal, siehe Schritt 5: Der Home-Bildschirm-App gehört ein eigener Speicher. Daten einmal in der App eingeben oder eine Sicherung importieren. |
| Adresse vergessen | Auf GitHub: Repository → Settings → Pages, dort steht die Adresse. |
