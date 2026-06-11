# KRITIKA NAMDEV | Portfolio

A high-end, responsive personal portfolio website for **Kritika Namdev**, a Computer Science Engineering student specializing in **MERN-stack software development** and **Cisco Enterprise Networking (CCNA)**.

## 🚀 Tech Stack

* **Build Tool**: Vite (Rolldown)
* **Library**: React.js & JavaScript
* **Styling**: Tailwind CSS v4 (Modern CSS-first theme engine)
* **Animations**: Framer Motion (Smooth scroll reveals, staggered list drops, floating components)
* **Icons**: Lucide React Icons & Custom inline SVGs for Brand logos
* **Background Effect**: Custom HTML5 Canvas-based interactive network node simulation

---

## ✨ Features

* **Network Canvas Backdrop**: Interactive nodes that float, connect with fine paths, and respond dynamically to mouse hover (resembling network switches and host devices).
* **Fading Typewriter Banner**: Rotating roles representing MERN Developer, CS Engineer, and CCNA Enthusiast.
* **Responsive Layouts**: Designed using backdrop-blur glassmorphic modules.
* **3D Perspective Tilt Cards**: Custom React script mapping mouse coordinates over project cards to rotate them in 3D space.
* **Staggered Timelines**: Beautiful scroll reveals for Education milestones and Experience logs.
* **Validated Contact Form**: Complete state-validation checks for inputs (Name, Email, Message) with an animated success overlay screen.

---

## 💻 Folder Structure

```text
src/
 ├── assets/          # Project images & profile avatar
 ├── components/      # Reusable components (Navbar, ParticleBackground, etc.)
 ├── sections/        # Main landing sections (Hero, About, Skills, Projects, etc.)
 ├── data/            # Centralized portfolio data (portfolioData.js)
 ├── hooks/           # Custom React hooks (useActiveSection)
 ├── App.jsx          # Component coordinator
 └── main.jsx         # App bootstrap
```

---

## 🛠️ Local Development Setup

To run this project locally, execute the following commands in the directory:

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Local Dev Server
```bash
npm run dev
```
Open `http://localhost:5173` in your web browser.

### 3. Build for Production
```bash
npm run build
```
Build assets will be generated in the `/dist` directory.
