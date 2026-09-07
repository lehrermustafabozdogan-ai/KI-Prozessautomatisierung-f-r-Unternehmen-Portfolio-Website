# CLAUDE.md

## Projekt
Persönliche Portfolio-/Marketing-Website für Mustafa Bozdogan. Tagline: "Mustafa Bozdogan —
KI & Prozessautomatisierung für Unternehmen". Zeigt Automatisierungs- und
KI-Dienstleistungen für Unternehmen. Zielgruppe: Firmen und Entscheider in Deutschland,
die Prozesse automatisieren wollen. Ziel der Seite: Vertrauen aufbauen und Kontaktanfragen
generieren (kein E-Commerce, kein Blog-CMS).

## Tech-Stack
- Reines HTML/CSS/JavaScript. Kein Build-Tool, kein Framework, kein npm.
- Lokal testen: Datei direkt im Browser öffnen, oder `npx serve .` / VS Code "Live Server"
  für einen lokalen Server (nötig sobald `fetch`/Formulare getestet werden).
- Grund: einmalige Präsentationsseite ohne komplexe Logik — jeder Build-Schritt wäre
  unnötiger Overhead und macht spätere Wartung (auch durch den Nutzer selbst) schwerer.

## Struktur
- `index.html` — One-Pager, Sections per Anchor-Links (#services, #about, #contact)
- `styles.css` — alle Styles; CSS-Variablen (Farben, Spacing, Fonts) oben in `:root`
- `script.js` — minimales Vanilla JS (Mobile-Menü, Smooth Scroll, Formular-Handling)
- `assets/` — Bilder, Icons (komprimiert, WebP wo möglich)
- `impressum.html`, `datenschutz.html` — siehe Abschnitt "Rechtliches"

## Design
- Dunkles, technisches Theme: dunkler Hintergrund, eine klare Akzentfarbe, dezente
  Grid-/Code-Ästhetik (passend zu "Automatisierung/KI").
- Mobile-first und responsive (Flexbox/Grid, keine feste px-Breiten).
- Systemschriftart oder eine performante Google-Font-Alternative — keine schweren
  Font-Ladezeiten auf einer Seite, die schnell wirken soll.

## Sprache & Ton
- Gesamte Seite auf Deutsch, förmliche Anrede ("Sie") — B2B-Standard in Deutschland.
- Klar und konkret, keine leeren Marketing-Floskeln. Konkrete Beispiele/Ergebnisse
  wirken glaubwürdiger als generische Buzzwords.

## Inhalte / Sections
1. Hero — "Mustafa Bozdogan — KI & Prozessautomatisierung für Unternehmen",
   ein klarer CTA (z. B. "Kostenloses Erstgespräch")
2. Services — vier Kernbereiche:
   - Prozessautomatisierung (n8n, Zapier)
   - KI-/Chatbot-Integrationen
   - Daten-/Report-Automatisierung
   - individuelle Software-/Schnittstellenprojekte
3. Über mich — kurze Positionierung, Vertrauensaufbau
4. Referenzen/Case Studies — Platzhalter bis echte Projekte vorliegen, klar als
   Beispiel/Demo kennzeichnen statt erfundene Kundennamen zu verwenden
5. Kontakt — Formular oder mailto-Link, niedrige Hemmschwelle
6. Footer — Links zu Impressum & Datenschutz

## Rechtliches (Pflicht für den deutschen Markt)
- Jede kommerzielle Website mit Kontaktmöglichkeit braucht in Deutschland ein
  **Impressum** (§5 TMG/DDG) und eine **Datenschutzerklärung** (DSGVO) — auch als
  Einzelperson/Freelancer. Fehlt das, drohen Abmahnungen.
- Beide Seiten mit Platzhaltertext anlegen, aber deutlich markieren: vor dem Livegang
  durch echte Angaben ersetzen (Name, Anschrift, ggf. anwaltlich geprüfter Text).
- Kein Analytics/Tracking-Skript einbauen, solange keine DSGVO-konforme
  Cookie-Consent-Lösung vorhanden ist.

## Konventionen
- Kein Inline-CSS/JS in HTML — alles in `styles.css` / `script.js`.
- Bilder mit `width`/`height`-Attributen (verhindert Layout-Shift) und Alt-Text.
- SEO-Grundlagen im `<head>`: `title`, `meta description`, Open-Graph-Tags.
- Name/Tagline sind final: "Mustafa Bozdogan — KI & Prozessautomatisierung für Unternehmen".

## Deployment
- Empfehlung: Vercel oder Netlify — kostenlos, automatisches Deploy bei Git Push,
  einfache Anbindung einer eigenen Domain. Kein Server-Backend nötig (rein statisch).
