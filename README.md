# Accessible Personal Portfolio (Internship Task 1)

Multi-page portfolio for Raghulram S using semantic HTML5, CSS3 and vanilla JavaScript. No frameworks.

## Run locally
1. Open the `accessible-portfolio` folder in VS Code (File > Open Folder).
2. Install the **Live Server** extension (Ritwick Dey).
3. Right-click `index.html` > **Open with Live Server**.

## Replace before submitting
- Placeholder projects (`index.html`, `projects.html`) and the photo (`assets/images/profile-placeholder.svg`; keep `width`/`height` and update the `alt`).
- `https://your-domain.example` in every `<head>`, `robots.txt` and `sitemap.xml`.
- Contact form backend: see the BACKEND PLACEHOLDER comments in `contact.html` and `js/script.js`. The form does not send email yet.

## Test
- **Lighthouse**: Chrome DevTools > Lighthouse > tick Accessibility and SEO > Analyze, in an Incognito window. Fix anything reported. Scores vary by browser and conditions; 100 is the target, not a guarantee.
- **HTML**: https://validator.w3.org/nu/ > "Validate by direct input", paste each page.
- **CSS**: https://jigsaw.w3.org/css-validator/ > paste `css/style.css`.
- **Keyboard**: press Tab from the top of each page. The skip link should appear first, focus must always be visible, the Menu button works with Enter/Space, Escape closes it, and the form is fully usable.
- **Responsive**: DevTools > Toggle device toolbar at 320, 375, 768 and 1280px; zoom to 200% and check nothing is cut off.
- **Screen reader**: NVDA (Windows), VoiceOver (Mac) or TalkBack. Check landmarks, headings, menu state, and that form errors are announced.

## Checklist
- [ ] All nav and footer links work on all 4 pages
- [ ] Each page has a unique title and description, and one `h1`
- [ ] Form fields have visible labels; errors and status message are announced
- [ ] Focus is visible everywhere; no keyboard traps
- [ ] No broken images or links; works at mobile and desktop widths
- [ ] Lighthouse Accessibility and SEO audits run and issues fixed
- [ ] HTML and CSS validators show no errors
- [ ] Placeholders replaced (domain, projects, photo, backend)
