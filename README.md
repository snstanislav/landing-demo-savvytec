
# Landing Demo Savvytec

Recreation of a test landing page according to the provided design example.

**Live demo:** https://landing-demo-savvytec.vercel.app/

---

## Getting Started

### 1. GitGub
```bash
cd <your_folder>
git clone https://github.com/snstanislav/landing-demo-savvytec.git
```
Now the start page index.html is avalable from <your_folder>

### 2. DockerHub
```bash
cd <your_folder>
docker pull stanislav47/landing-demo-savvytec:latest
docker run --rm -p 80:80 stanislav47/landing-demo-savvytec
```
Now the page is avalable on http://localhost:80/  

To stop running press **Ctrl + C**
---

## Page structure

- Header: logo (clickable), menu bar (with submenus), language switch, day-night theme toggle, burger menu toggle (available in mobile mode)  
- Hero section: intro, image slider  
- Advantages  
- Case study section (with navigation)  
- Use case section  
- Footer: CTA section, basement section  

---

## Tech Stack

- HTML5  
- CSS3  
- JavaScript  
- GSAP libraty  
