PROJECT DOCUMENTATION — PORTFOLIO WEBSITE

This document explains the entire architecture, folder structure, file responsibilities, and how to safely modify the project without breaking layout, styling, or behavior.

This project is a one-page portfolio website built using React, Vite, Tailwind CSS v4, CSS variables, and Vercel serverless functions.

The project uses a layout-first architecture where layout is persistent and content is injected as sections inside a scrollable container.

---

PROJECT TYPE

Single page scroll-snap website  
Not a multi-page app  
Not router based  
Navigation uses anchor scrolling  
Content is data-driven where possible

---

TECH STACK

React → UI framework  
Vite → build tool and dev server  
Tailwind CSS v4 → layout, spacing, responsiveness  
CSS Variables → colors, glow, theme control  
Vercel → hosting and serverless backend  
Resend → contact form email delivery  
Vercel Analytics → visitor count (privacy safe)

---

ROOT ARCHITECTURE FLOW

App.jsx  
 → AppShell (persistent layout frame)  
 → TopBar  
 → DesktopNav  
 → Scroll Container (main)  
 → Home.jsx  
 → Hero  
 → About  
 → Certificates  
 → Projects  
 → Contact  
 → Footer (desktop only)

---

FOLDER STRUCTURE

src/

components/
Reusable UI building blocks.
These should stay small and reusable.

sections/
Actual page content sections.

layouts/
Persistent UI frame pieces (navigation, shell, footer, top bar).

data/
Content storage. Text, lists, project info, certificates, etc.

api/
Serverless backend functions (contact form email).

styles/
Design system and Tailwind entry files.

pages/
Page composition layer (Home combines all sections).

---

COMPONENTS FOLDER DOCUMENTATION

components/Button.jsx  
Controls global button look and behavior.  
Edit here if you want to change all button styling.

components/Surface.jsx  
Controls card backgrounds, borders, shadows, glow hooks.  
Used by cards, accordions, certificates, project containers.

components/Section.jsx  
Controls section spacing, snap behavior, section padding.  
If sections feel too tall or too tight, change here.

components/SectionTitle.jsx  
Controls section header appearance and spacing.

components/Container.jsx  
Controls readable width of content.  
If content feels too narrow or too wide, change max width here.

---

LAYOUT FOLDER DOCUMENTATION

layouts/AppShell.jsx  
Controls main layout frame.  
Contains navigation, scroll container, and footer.  
Only main scrolls. Layout never scrolls.

Do not add section content here.

layouts/TopBar.jsx  
Top horizontal bar. Logo and actions live here.

layouts/DesktopNav.jsx  
Left side desktop navigation.  
Anchor links connect to section IDs.

layouts/MobileNav.jsx  
Bottom mobile navigation.  
Visible only on small screens.

layouts/Footer.jsx  
Desktop only footer.  
Should never be part of sections or scroll snap.

---

SECTIONS FOLDER DOCUMENTATION

sections/Hero.jsx  
Landing identity section.  
Safe to edit text, CTA, image.

sections/About.jsx  
Accordion Q&A content.  
Content usually comes from data/about.json.

sections/Certificates.jsx  
Certificate grid.  
Supports view more / view less logic.

sections/Projects.jsx  
Project cards.  
Includes image, description, tech tags, demo button, repo button.

sections/Contact.jsx  
Two column layout:  
Left → Contact form  
Right → Map iframe

Form submits to /api/contact.

---

DATA FOLDER DOCUMENTATION

This folder stores editable content separate from UI code.

If you want to update text, lists, projects, or certificates, change data files here instead of editing JSX.

Example files:

data/about.json → About questions and answers  
data/projects.json → Project list  
data/certificates.json → Certificate images

---

API FOLDER DOCUMENTATION

api/contact.js  
Serverless email endpoint.  
Runs only on Vercel server environment.  
Uses RESEND_API_KEY environment variable.

Never move secrets into frontend code.

---

STYLES FOLDER DOCUMENTATION

styles/theme.css  
Main design tokens.  
Edit here to change brand colors or glow strength.

styles/base.css  
Global resets and base text rules.

styles/components.css  
Reusable visual classes like glow and surfaces.

styles/index.css  
Tailwind entry file.

---

SCROLL SYSTEM

Scroll happens only inside AppShell main container.

Scroll snapping is enabled.

Each section must have an ID:
home  
about  
certificates  
projects  
contact

Navigation uses anchor links to these IDs.

---

HOW TO CHANGE COMMON THINGS

Change colors → styles/theme.css  
Change spacing between sections → components/Section.jsx  
Change site width → components/Container.jsx  
Change navigation items → DesktopNav.jsx + MobileNav.jsx  
Change project content → data/projects.json  
Change about content → data/about.json  
Change contact email behavior → api/contact.js

---

SECURITY NOTES

API keys never live in repository.  
Environment variables live only in Vercel dashboard.  
Public repo does not expose email sending credentials.

---

DEPLOYMENT NOTES

Deployment handled by Vercel.  
Push to main triggers deployment.  
Serverless API works only when deployed with environment variables.

---

ANALYTICS NOTES

Visitor tracking handled by Vercel Analytics.  
No tracking scripts are injected into frontend code.

---

FINAL ARCHITECTURE RULES

Layout handles structure.  
Sections handle content.  
Components handle UI pieces.  
Data folder handles editable content.  
API folder handles backend logic.  
Styles folder handles visual system.

Never mix these responsibilities.

---

END OF DOCUMENTATION
