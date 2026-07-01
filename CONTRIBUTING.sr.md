# Kako doprineti (Contributing Guidelines)

Hvala ti što želiš da doprineseš projektu **Universal AI Engineering Prompts**! Tvoj doprinos pomaže da AI agenti rade preciznije, sigurnije i produktivnije za sve programere.

Evo nekoliko smernica kako možeš pomoći:

---

## 🛠️ Kako doprineti?

### 1. Prijavljivanje problema (Issues)
Ako primetiš da neki prompt navodi AI agente na greške, halucinacije ili prevelike rewrite-ove:
1. Otvori **Issue** na GitHub-u.
2. Opiši problem, koji AI alat i naziv/verziju LLM modela si koristio.
3. Navedi primer koda ili situacije gde je prompt zakazao i predloži rešenje.

### 2. Predlaganje izmena (Pull Requests)
Ako želiš samostalno da unaprediš neki prompt:
1. Fork-uj ovaj repozitorijum.
2. Kreiraj novu granu za tvoje izmene (npr. `git checkout -b feature/unapredjenje-safe-refactor`).
3. Izmeni prompt i obavezno **testiraj** novu verziju u realnom radu sa AI agentom kako bi se uverio da radi ispravno.
4. Otvori **Pull Request** (PR) ka `main` grani ovog repozitorijum i detaljno opiši šta je promenjeno i zašto.

---

## 📐 Pravila i Standardi za Promptove

Kada menjaš ili dodaješ nove promptove, drži se sledećih standarda:
- **Global Safety Rules**: Svaki prompt mora poštovati i imati ugrađene bezbednosne smernice (prompt-injection zaštita, secrets redaction, no-fake-pass).
- **Jasna struktura**: Koristi separatore (`════` i `───`) i jasne XML ili Markdown naslove kako bi LLM lakše parsirao instrukcije.
- **Compact Mode**: Svaki prompt (uključujući nove) mora imati **Compact Mode** sekciju na kraju — kratak blok za ograničen kontekst.
- **Bilingvalni paritet**: Novi promptovi zahtevaju verzije u `prompts/en/` i `prompts/sr/` sa istom strukturom.
- **Agent integracije**: Novi config-i idu u `integrations/<agent>/` i moraju biti u `integrations/README.md`.
- **Srpsko-engleski balans**: Koristi engleske tehničke pojmove, ali opise i instrukcije piši na srpskom.
- **Bez pretpostavki**: Forsiraj AI da označi nepoznanice sa tagovima poput `[PRETPOSTAVKA]`, `[NOT RUN]` ili `[COVERAGE GAP]`.
- **Primeri izlaza**: Značajne promene formata izveštaja ažuriraj u `examples/sample-architecture-report.md` ili dodaj nove primere u `examples/`.

---

Hvala na trudu i srećno kodiranje! 🚀

