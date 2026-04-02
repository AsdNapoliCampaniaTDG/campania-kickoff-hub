

## Piano: Aggiornare sezione Sponsor con immagine unica

### Cosa fare

1. **Copiare l'immagine caricata** (`PASQUA_copia.png`) in `src/assets/sponsor-banner.png`

2. **Riscrivere `src/components/SponsorSection.tsx`**: Rimuovere i 3 loghi individuali e sostituirli con un'unica `<img>` che mostra l'immagine caricata così com'è, senza alterazioni. L'immagine occuperà tutta la larghezza del contenitore con `object-contain` per rispettare le proporzioni originali.

3. **Dominio personalizzato**: L'utente menziona di aggiornare anche le informazioni sul dominio personalizzato. Dato che ora usa Vercel (non più GitHub Pages), il file `deploy.yml` e il CNAME non sono più rilevanti per il deploy. Le modifiche al codice verranno deployate automaticamente tramite il collegamento GitHub-Vercel.

### Dettagli tecnici

- Import ES6: `import sponsorBanner from "@/assets/sponsor-banner.png"`
- Layout semplificato: un singolo `<img>` con `w-full object-contain` dentro il container
- Rimozione degli import dei vecchi 3 loghi

