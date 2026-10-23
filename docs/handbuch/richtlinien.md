---
title: Best Practices & Richtlinien
---

# 💡 Best Practices & Richtlinien

Damit wir im Team alle die gleiche Sprache sprechen und unser Projekt sauber bleibt, halten wir uns an diese einfachen Leitfäden.

---

### 🧑‍💻 Code- & Schreibstil

- **Verständnis geht vor:** Schreibe Dokumentationen so einfach wie möglich. Vermeide unnötige Fachbegriffe, wo sie nicht gebraucht werden.
- **Aussagekräftige Commits:** Nutze klare Commit-Nachrichten (z. B. `docs: füge richtlinien hinzu` statt `update`).
- **Dateinamen:** Erstelle Markdown-Dateien immer in Kleinschreibung und nutze Bindestriche (z. B. `richtlinien-neu.md` statt `Richtlinien_Neu.md`).

---

### 🛡️ Sicherheit & Qualität

::: danger 🛑 Niemals Passwörter oder Tokens committen!
Achte vor jedem Push penibel darauf, dass keine echten API-Schlüssel, Passwörter oder privaten Zugangsdaten im Code oder in den Markdown-Dateien stehen. Nutze dafür immer Umgebungsvariablen.
:::

::: tip 💡 Entwurfsmodus nutzen
Wenn ein neuer Artikel oder eine Richtlinie noch nicht ganz fertig ist, setze einfach `draft: true` in den Kopf der Datei (Front Matter). So wird sie im Live-System erst veröffentlicht, wenn du bereit dazu bist.
