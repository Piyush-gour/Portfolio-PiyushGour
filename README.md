# Piyush Gour - Full Stack Developer Portfolio

Welcome to the source code for my personal portfolio! This project is a world-class, fully responsive, and highly interactive web application designed to showcase my skills, experience, and engineering capabilities.

## 🚀 Live Demo
[Insert Your Vercel URL Here] (e.g., https://portfolio-piyushgour.vercel.app/)

## ✨ Premium Features

This portfolio goes beyond a standard static website by incorporating premium interactive elements and complex animations:

1. **Space-Themed Interactive Hero:** A dynamic landing section with a custom `TypewriterText` effect and a glowing, parallax universe background.
2. **Custom Hardware-Accelerated Animations:** Extensively uses `framer-motion` for buttery smooth reveal effects, magnetic physics-based buttons, and natural scroll-driven animations.
3. **Engineering Process Timeline:** A detailed vertical timeline highlighting my SDLC approach (Discovery, Architecture, Agile, Deployment) using glassmorphic UI.
4. **Digital Garden (Blog Integration):** A thematic showcase of thought-leadership articles with rich typography and micro-interactions.
5. **Code Snippet Showcase:** An interactive, terminal-styled code explorer powered by `react-syntax-highlighter` to provide tangible proof of code quality.
6. **3D Tilt Project Cards:** Immersive 3D transformation effects mapped to cursor position for examining portfolio projects.
7. **Premium Page Transitions:** Custom pre-loader screen mimicking a snappy desktop curtain wipe.

## 🛠️ Technology Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + Custom Vanilla CSS variants
- **Animations:** Framer Motion, maath (for physics)
- **3D Rendering (Optional Add-ons):** Three.js, React Three Fiber, React Three Drei
- **Icons:** Lucide React
- **Email Processing:** EmailJS (Client-side SMTP handling)
- **Syntax Highlighting:** react-syntax-highlighter

## 💻 Local Development

To run this project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Piyush-gour/Portfolio-PiyushGour.git
   cd Portfolio-PiyushGour
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`.

## 🌐 Deploying to Vercel

Vercel is the recommended hosting platform for Vite/React applications. Follow these steps for a zero-configuration deployment:

1. Sign up/Log in to [Vercel](https://vercel.com/).
2. Click **Add New...** > **Project** from your Vercel Dashboard.
3. Import your GitHub repository (`Piyush-gour/Portfolio-PiyushGour`).
4. **CRITICAL CONFIGURATION:** Under the "Configure Project" section, you must change the **Root Directory** from the default `./` to `frontend`.
   - Click Edit next to Root Directory.
   - Select `frontend` and click Save.
5. Ensure the Framework Preset is set to **Vite**.
6. Click **Deploy**. Vercel will automatically run `npm install` and `npm run build` from inside your `frontend` folder, and provision a live HTTPS URL within 60 seconds!

## 📬 Contact

If you'd like to reach out, feel free to use the contact form within the live portfolio or message me directly on LinkedIn.

---
*Designed & Engineered by Piyush Gour*
