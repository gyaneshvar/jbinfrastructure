# Plan: JB Infrastructure Company Website Improvements Redesign and re implement with fresh Idea
This was a old version website that i dont like at all
Website should look fancy and it should highlight the services it provides. Lokk and theme should represent the work company does
New image added
heroimage.jpeg ---> I want this on behind homepage as some stylish semi transparent  
logo.png
p10.jpeg
p11.jpeg
p12.jpeg
p13.jpeg
p14.jpeg
p15.jpeg
p17.jpeg
p20.jpeg
## Brand Data (from PDF)
- Tagline: "Your Ideas Tuned Into Reality"
- Email: amit.jbinfrastructure@gmail.com | Phone: +91 8452824423
- Office: Plot No. 12/A-401, Priyanka Utkarsh, Sec 21, Ulawe, Navi Mumbai – 410206
- Manufacturing: Lotlikar Compound Gala No. 15, MIDC Taloja, Behind Hindalco Co. Tandre Village, Taluka Panvel Dist. Raigarh
- GST: 27AIAPY0485F1Z3 | License: Maharashtra Company Act 1948 No: 1710300311441085

## Stack
- React 19 + Vite 6
- Tailwind CSS v4 (CSS-first config)
- gh-pages package for deployment
- No router (single-page scroll)

## Sections
1. Navbar (sticky, logo + nav links)
2. Hero (gradient bg, logo, tagline)
3. About Us
4. Our Expertise (4 items with numbered hexagon icons)
5. Services (4 services, 2x2 grid)
6. Our Projects (styled table)
7. Project Gallery (image grid, lightbox)
8. Quality & Standards + Client Benefits (2 subsections)
9. Contact (info card)
10. Footer

## Project Images (resources/)
9 WhatsApp JPEG images + logo.jpg

## GitHub Pages
- Username: gyaneshvar | Repo: jbinfrastructure
- Live URL: https://gyaneshvar.github.io/jbinfrastructure/
- vite.config base: '/jbinfrastructure/'
- CNAME file for future GoDaddy domain
- deploy script: gh-pages -d dist

## Contact Details
- Person: Amit Kumar Yadav
- Mobile: +91 8090898765
- Address: Pandeypur, Varanasi, Uttar Pradesh
- Email: amit.jbinfrastructure@gmail.com
- No contact form — display only

## Files to create
- package.json
- vite.config.js
- index.html
- src/main.jsx
- src/App.jsx
- src/index.css (Tailwind + custom vars)
- src/components/Navbar.jsx
- src/components/Hero.jsx
- src/components/About.jsx
- src/components/Expertise.jsx
- src/components/Services.jsx
- src/components/Projects.jsx
- src/components/Gallery.jsx
- src/components/Quality.jsx
- src/components/Contact.jsx
- src/components/Footer.jsx
- src/data/projects.js (project table data)
- public/CNAME (empty, user fills domain later)
