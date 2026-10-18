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
app/
  [locale]/               → all pages, served in English (/about) and Portuguese (/pt/about)
    page.js               → Home
    about/page.js
    services/page.js      → Services (includes Import & Export section)
    services/fertilizer-trading/page.js
    services/commodity-trading/page.js
    services/supply-chain-solutions/page.js
    markets/page.js
    contact/page.js
    request-a-quote/page.js
    privacy-policy/page.js
    terms-and-conditions/page.js
    layout.js             → <html lang>, Header, Footer, language provider
    not-found.js          → localized 404
  api/contact, api/quote  → form email delivery (Resend), not translated
  robots.js, sitemap.js   → SEO files (sitemap lists both languages)
components/               → reusable pieces (Header, Footer, forms, cards…)
i18n/                     → language setup (routing, navigation helpers)
messages/en.json          → ALL English texts
messages/pt.json          → ALL Portuguese texts
middleware.js             → handles the /pt prefix
public/logo.jpg           → your logo, used in Header/Footer
```

## 3. Formulários (Contact + Request a Quote)

Os dois formulários enviam email a sério, através do Resend
(`app/api/contact/route.js` e `app/api/quote/route.js`). Precisam destas
variáveis de ambiente (no Vercel: Settings > Environment Variables; em local:
ficheiro `.env.local`, que NUNCA vai para o Git):

- `RESEND_API_KEY` — obrigatória.
- `CONTACT_TO_EMAIL` / `QUOTE_TO_EMAIL` — opcionais; sem elas, os pedidos vão
  para `info@fertitrade.co.mz`. Úteis só para testar com outro destinatário.

O remetente é `no-reply@fertitrade.co.mz` (domínio verificado no Resend). Se
mudares as variáveis no Vercel, é preciso fazer Redeploy.

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

## 6. Idiomas (EN / PT)

O site existe em inglês (por defeito, sem prefixo: `/about`) e em português
(com prefixo `/pt`: `/pt/about`). Usa a biblioteca `next-intl`.

**Editar um texto**: abre `messages/en.json` e/ou `messages/pt.json`, procura a
frase e altera. Cada texto tem a MESMA chave nos dois ficheiros (ex.:
`Home.whoWeAre.title`). Não é preciso mexer no código das páginas.

**Adicionar uma página nova**
1. Cria a página dentro de `app/[locale]/...` (copia uma existente como modelo:
   tem `setRequestLocale(locale)` e `generateMetadata` com `getAlternates`).
2. Acrescenta os textos nos DOIS ficheiros `messages/*.json`.
3. Acrescenta o caminho em `app/sitemap.js`.
4. Nos links internos usa `import { Link } from '@/i18n/navigation'`
   (NUNCA `next/link`, senão o link perde o idioma).

**Adicionar um terceiro idioma**: acrescenta o código em `i18n/routing.js`
(`locales`) e cria `messages/xx.json` com as mesmas chaves.

**Deteção automática do idioma do browser**: está DESLIGADA de propósito (quem
chega a `/` vê inglês, como o cliente pediu). Para redirecionar automaticamente
visitantes com browser em português, muda `localeDetection` para `true` em
`i18n/routing.js`.

**Emails dos formulários**: continuam em inglês (são para a equipa), mas cada
email indica "Site language: Portuguese (PT)" ou "English (EN)" para saberem em
que língua responder.

## 7. Conteúdo ainda provisório

- As páginas Privacy Policy e Terms & Conditions são placeholders: dizem
  "This page is a placeholder". Têm de ser substituídas pelo texto legal final
  do cliente (em `messages/en.json` e `messages/pt.json`, secção `Legal`).
- Fertilizantes/commodities: as páginas têm blocos reservados ("Coming Soon")
  para categorias, origem, volumes, etc., a preencher quando o cliente
  confirmar a informação.

Já confirmados e em uso: telefone/WhatsApp `+258 84 114 2911`, email
`info@fertitrade.co.mz`, LinkedIn `linkedin.com/company/fertitrade-africa`.
