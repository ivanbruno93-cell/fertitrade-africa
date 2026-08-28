# FertiTrade Africa — Website

Site built with **Next.js 14** (App Router) + **Tailwind CSS**. Static pages,
no database required to run. Forms currently validate on the frontend and
show a success message; they are **not yet wired to send anywhere** (see
"Connecting the forms" below).

## 1. Run it locally (Windows + VS Code)

1. Install [Node.js LTS](https://nodejs.org) if you don't have it (open a
   terminal and run `node -v` — if you see a version number, you're set).
2. Unzip this folder and open it in VS Code (`File > Open Folder`).
3. Open a terminal in VS Code (`` Ctrl+` ``) and run, one at a time:
   ```
   npm install
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser. Edit any file under `app/`
   or `components/` and save (Ctrl+S) — the browser updates automatically.

## 2. Project structure

```
app/                      → one folder per page (App Router)
  page.js                 → Home
  about/page.js
  services/page.js        → Services (includes Import & Export section)
  services/fertilizer-trading/page.js
  services/commodity-trading/page.js
  services/supply-chain-solutions/page.js
  markets/page.js
  contact/page.js
  request-a-quote/page.js
  privacy-policy/page.js
  terms-and-conditions/page.js
components/                → reusable pieces (Header, Footer, forms, cards…)
public/logo.jpg             → your logo, used in Header/Footer
```

## 3. Connecting the forms (Contact + Request a Quote)

Right now, submitting either form just shows "Thank you" — nothing is sent
anywhere yet. In `components/ContactForm.js` and `components/QuoteForm.js`
there's a `// TODO` marking exactly where to add a real submission, e.g.:

```js
await fetch('/api/quote', { method: 'POST', body: JSON.stringify(values) })
```

To make that work you'd add an API route (e.g. `app/api/quote/route.js`)
that emails you, saves to a database, or forwards to WhatsApp/CRM. Since you
already have an Express backend for IndicoGo, the simplest path is likely
pointing these forms at an endpoint on that backend instead of building a
new one here — happy to wire that up once you tell me which approach you want.

## 4. Deploying

This is a standard Next.js app, so it deploys the same way as most modern
sites:
- **Vercel** (made by the creators of Next.js, has a generous free tier,
  simplest option): push this folder to a GitHub repo, then import it at
  vercel.com — no configuration needed.
- **Railway** (since you already use it for IndicoGo): also supports
  Next.js directly from a GitHub repo.

Either way, the flow is: push to GitHub → connect the repo → deploy. If you
want, I can walk you through that step by step, the same way we've done it
for the IndicoGo backend.

## 5. As imagens (placeholders com etiqueta)

Adicionei animações reais de scroll (a biblioteca `framer-motion` já estava
instalada mas nunca tinha sido usada) e slots de imagem em: Hero, secção
"Who We Are", cards de Serviços, e página Markets (foto da Beira).

As fotos que lá estão agora **são placeholders com o nome do que deve lá ir**
— não são fotos reais, são só rectângulos navy/verde com texto a dizer o
que procurar. Não posso descarregar fotos de stock automaticamente porque
o meu ambiente só tem acesso a domínios de npm/GitHub, não a sites de
imagens.

Para substituir, é só trocar o ficheiro em `public/images/` mantendo o
mesmo nome (ex: `about-africa-trade.jpg`):

> **Nota:** o Hero (topo da Home) usa um carousel de 5 fotos em crossfade
> lento (`components/HeroCarousel.js`), 5 segundos por foto, com pausa
> ao passar o rato/foco, bolinhas de navegação manual, e sem auto-rotação
> quando "reduzir movimento" está ativo no sistema. As fotos ficam em
> `public/images/hero-slides/`.

| Ficheiro | Onde aparece | O que procurar |
|---|---|---|
| `hero-slides/hero-slide-1-field.jpg` | Hero, slide 1 | Campos agrícolas africanos |
| `hero-slides/hero-slide-2-port.jpg` | Hero, slide 2 | Porto / terminal de containers |
| `hero-slides/hero-slide-3-vessel.jpg` | Hero, slide 3 | Navio de carga no mar |
| `hero-slides/hero-slide-4-transport.jpg` | Hero, slide 4 | Camião / transporte rodoviário |
| `hero-slides/hero-slide-5-warehouse.jpg` | Hero, slide 5 | Armazém / sacos de fertilizante |
| `about-africa-trade.jpg` | Secção "Who We Are" na Home | Navio de carga / porto em África |
| `service-fertilizer.jpg` | Card "Fertilizer Trading" | Sacos de fertilizante / armazém |
| `service-import-export.jpg` | Card "Import & Export" | Containers / navio |
| `service-commodity.jpg` | Card "Commodity Trading" | Armazém de commodities / grão |
| `service-supply-chain.jpg` | Card "Supply Chain Solutions" | Camião + armazém + porto |
| `beira-location.jpg` | Página Markets | Porto da Beira / costa de Moçambique |

Fontes gratuitas e seguras para uso comercial (sem violar direitos de
autor): [unsplash.com](https://unsplash.com) e [pexels.com](https://pexels.com).
Baixa a foto, renomeia para o nome exacto da tabela acima, e substitui o
ficheiro em `public/images/`.

## 6. Content still marked "confirm later"

Per the brief, these are placeholders and **not real, confirmed information**
— replace before launch:
- Email: `info@fertitradeafrica.com`
- LinkedIn link (currently a dead `#` link — no real profile provided)
- Fertilizer/commodity product specifics (categories, origin, volumes) —
  the two service pages have clearly marked placeholder blocks for this

The phone/WhatsApp number `+258 84 114 2911` **is treated as confirmed** and
is live throughout the site (header, footer, contact page).
