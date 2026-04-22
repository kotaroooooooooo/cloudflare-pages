# Kotaro Yamasaki — Systems Engineer Portfolio

A clean, minimal personal portfolio website for a Systems Engineer.

Built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no dependencies, no build step — just open `index.html` in a browser.

---

## Features

- **Bilingual (DE / JP)** — single toggle button switches all page text between German and Japanese; Japanese rendered with Noto Sans JP
- **Mobile responsive** — hamburger menu on small screens, grids reflow to single column below 768px / 480px
- **Company logos** — subtle SVG icons next to each experience entry
- **Smooth scroll + fade-in** — sections animate in on scroll via IntersectionObserver
- **Zero dependencies** — no npm, no bundler, no framework

---

## Structure

```
logo                # svg and img for the site
.gitignore          # just a gitignore for mac
index.html          # entire site — one self-contained file
README.md           # this file
```

All CSS and JavaScript are inlined inside `index.html`. No external assets except Google Fonts (loaded via CDN).

---

## Customization

### Personal info

Open `index.html` in any text editor and search for the placeholder values:

| Placeholder | Where |
|---|---|
| `Kotaro Yamasaki` | `<title>`, nav, hero, footer |
| `Systems Engineer · Berlin, DE` | hero eyebrow |
| `Infra AG`, `DataCore GmbH`, `TechVentures GmbH` | experience entries |

### Adding a company logo

Each experience entry has an `.exp-logo` container with an inline SVG icon. Replace the `<svg>` with an `<img>` tag pointing to your logo file:

```html
<div class="exp-logo">
  <img src="logo-company.png" alt="Company Name" style="width:24px;height:24px;object-fit:contain;">
</div>
```

### Adding a Certificate

```html
<div class="cell-sm">
  <div class="cert-issuer">CERT-ISSUER</div>
  <div class="cert-name" data-de="Certified Kubernetes Administrator" data-jp="認定Kubernetes管理者（CKA）">Certified Kubernetes Administrator</div>
  <div class="cert-year">2022</div>
</div>
```

### Changing colors

All colors are defined as CSS variables at the top of the `<style>` block:

```css
:root {
  --bg: #f5f5f7;       /* page background */
  --white: #ffffff;    /* card surfaces   */
  --black: #1d1d1f;    /* primary text    */
  --mid: #6e6e73;      /* secondary text  */
  --light: #d2d2d7;    /* borders         */
  --lightest: #e8e8ed; /* subtle borders  */
}
```

### Adding or removing sections

Each section follows this pattern:

```html
<section id="my-section" class="fade">
  <p class="eyebrow" data-de="German label" data-jp="日本語ラベル">German label</p>
  <h2 data-de="German heading." data-jp="日本語見出し。">German heading.</h2>
  <!-- content -->
</section>
<hr>
```

Add `data-de` and `data-jp` attributes to any element you want translated. The language switcher picks them up automatically.

### Adding more languages

In the JavaScript section, `applyLang(lang)` reads `data-{lang}` attributes from all elements. To add English:

1. Add `data-en="..."` attributes alongside `data-de` and `data-jp`
2. Update the toggle button logic to cycle through `de → jp → en → de`

---

## Fonts

| Font | Usage | Source |
|---|---|---|
| DM Sans | All body and heading text | Google Fonts |
| Noto Sans JP | Japanese text in JP mode | Google Fonts |

Both are loaded from Google Fonts CDN. For offline use, download and self-host via `@font-face`.

---

## Deployment

Since this is a single HTML file, deployment is straightforward:

**GitHub Pages**
1. Push `index.html` and `README.md` to a repository
2. Go to Settings → Pages → Source: `main` branch, `/ (root)`

**Custom domain**
Add a `CNAME` file with your domain name next to `index.html` for GitHub Pages, or configure the custom domain in your hosting provider's dashboard.

---

## Browser support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

---

## License

Feel free to use, modify, and adapt this for your own portfolio. Attribution appreciated but not required.

---

*Erstellt mit Unterstützung von KI (Claude, Anthropic)*
