# Bhavnoor Singh — Portfolio Website

A fast, responsive, accessible, and themeable portfolio website showcasing research projects, engineering experience, skills, and academic achievements of **Bhavnoor Singh** (Computer Science and Engineering undergraduate at IIT Kanpur).

---

## 🌟 Key Features

- **🌓 Dark & Light Mode Theme Support**: Sleek, modern design system with automatic OS color-scheme detection (`prefers-color-scheme`) and persistent manual toggle saved in `localStorage`.
- **⚡ Lightweight & Dependency-Free**: Pure HTML5, modern CSS3 (Custom Properties & Flexbox/Grid), and Vanilla JavaScript — zero runtime dependencies or build steps required.
- **🔍 Project Filtering**: Category filter tabs on the [Projects page](projects.html) (*Deep Learning & BCI*, *Systems & Hardware*, *Software & Apps*).
- **♿ Accessibility (a11y)**: Focus-visible states for keyboard navigation, ARIA expanded/controls on mobile menu, and accessible labels on all interactive elements.
- **📱 Fully Responsive**: Fluid layouts with breakpoint optimization for desktop, tablet, and mobile displays.
- **🚀 SEO & Social Sharing Ready**: Complete OpenGraph, Twitter Cards, SVG favicon, `robots.txt`, and `sitemap.xml`.
- **📄 Asset Protection & Fallbacks**: Integrated 404 error page, clipboard fallback copy helper, and resume download link.

---

## 📂 Project Structure

```text
BS-Portfolio/
├── index.html          # Homepage with hero, stats, and featured projects
├── about.html          # Bio, education timeline, and scholastic achievements
├── projects.html       # Research and engineering projects with category filter
├── experience.html     # Internship (Samsung Research) and leadership roles
├── skills.html         # Languages, frameworks, and tools proficiency
├── contact.html        # Contact details, social links, resume, and form
├── 404.html            # Custom styled 404 page
├── favicon.svg         # Monogram SVG favicon
├── robots.txt          # Search engine crawler instructions
├── sitemap.xml         # SEO sitemap
├── assets/
│   └── resume.pdf      # Resume download document
├── css/
│   └── styles.css      # Design tokens, typography, components, and media queries
└── js/
    └── main.js         # Navigation, theme toggle, project filter, animations, form handler
```

---

## 🛠️ Tech Stack

- **Markup**: Semantic HTML5 with ARIA attributes
- **Styling**: Modern CSS3 (CSS Variables, Flexbox, CSS Grid, Glassmorphism backdrop blur)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter), [Poppins](https://fonts.google.com/specimen/Poppins), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Scripting**: Vanilla JavaScript (ES6+, IntersectionObserver API, Clipboard API)

---

## 💻 Local Development

You can run and test this portfolio locally using any static web server:

### Option 1: Python 3 (Recommended)
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option 2: VS Code Live Server
1. Install the **Live Server** extension in Visual Studio Code.
2. Right-click `index.html` and select **"Open with Live Server"**.

### Option 3: Node.js `serve` / `npx`
```bash
npx serve .
```

---

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push this repository to GitHub.
2. Go to **Repository Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Your portfolio will be live at `https://<username>.github.io/<repo-name>/`.

### Vercel / Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Set build command to `None` (Static Site) and publish directory to `.`.
3. Deploy instantly with zero configuration.

---

## 🎨 Customization Guide

- **Theme Colors & Typography**: Edit CSS tokens in [`css/styles.css`](css/styles.css) under `:root` and `[data-theme="light"]`.
- **Projects**: Add or update cards in [`projects.html`](projects.html) with `data-category="deeplearning"` or your custom categories.
- **Resume**: Replace [`assets/resume.pdf`](assets/resume.pdf) with your updated resume PDF.
- **Social / Contact Links**: Update URLs in [`contact.html`](contact.html) and footer sections across pages.

---

## 📄 License

Designed and developed by Bhavnoor Singh.