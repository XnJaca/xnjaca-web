# xnjaca.com

Sitio personal de **Jonathan Cruz Ayala** — desarrollador full-stack basado en Costa Rica.

Stack: **Astro 4 + Tailwind CSS + React (islas) + TypeScript** · i18n nativo ES/EN · dark mode · Vercel hybrid (SSG + serverless API) · Resend para el formulario de contacto.

---

## Desarrollo local

```bash
npm install
cp .env.example .env   # pegar RESEND_API_KEY adentro
npm run dev            # http://localhost:4321
```

Build de producción:

```bash
npm run build
npm run preview
```

---

## Estructura

```
src/
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Audiences.astro       # 01 · Para quién
│   ├── Projects.astro        # 02 · Proyectos
│   ├── Process.astro         # 03 · Cómo trabajo
│   ├── Packages.astro        # 04 · Paquetes
│   ├── About.astro           # 05 · Sobre mí
│   ├── Contact.astro         # 06 · Contacto
│   ├── Footer.astro
│   ├── LangToggle.astro
│   └── ThemeToggle.tsx       # isla React
├── i18n/
│   ├── es.ts                 # diccionario ES (default)
│   ├── en.ts                 # diccionario EN
│   └── utils.ts
├── layouts/
│   └── BaseLayout.astro      # meta tags OG/Twitter, hreflang, JSON-LD
├── pages/
│   ├── index.astro           # home ES
│   ├── cv.astro              # CV ES
│   ├── en/index.astro        # home EN
│   ├── en/cv.astro           # CV EN
│   └── api/contact.ts        # endpoint Resend
└── styles/
    └── global.css
```

---

## Decisiones de arquitectura

- **Astro over Next.js**: el sitio es ~95% estático. HTML puro + islas React solo donde hay interactividad (ThemeToggle, form).
- **Output `hybrid`**: páginas prerendered, solo `/api/contact` corre como serverless function en Vercel.
- **i18n nativo de Astro**: ES default, EN en `/en/`. Sin librerías externas.
- **Dark mode**: clase en `<html>`, persistencia en `localStorage`, respeta `prefers-color-scheme` al primer render.
- **View Transitions**: navegación entre páginas con transiciones nativas del browser.
- **SEO**: meta tags OG/Twitter, canonical, hreflang ES/EN/x-default, JSON-LD Person schema, sitemap autogenerado.

---

## Paleta

| Token | Hex | Uso |
|-------|-----|-----|
| cream | `#F8F7F2` | Fondo principal light |
| ink | `#0E0E0E` | Texto principal light / fondo dark |
| accent | `#E8B547` | Highlight de "software", badges, hover |
| success | `#16A34A` | Disponibilidad, checks |

---

## Deploy

Configurado para Vercel con `@astrojs/vercel/serverless`. Requiere variable de entorno `RESEND_API_KEY` en producción.

---

## Licencia

Código sin licencia explícita — el contenido (copy, datos personales, CV) es de Jonathan Cruz Ayala.
