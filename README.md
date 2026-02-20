# Apple MacBook Pro 3D Landing Page Clone

This project is a high-performance, visually stunning landing page inspired by Apple's MacBook Pro product pages. It features interactive 3D models, smooth scroll animations, and dynamic transitions that create a premium feel.

## 🚀 Features

- **Interactive 3D Models:** Realistic 3D MacBook Pro models built using React Three Fiber.
- **Scroll-Controlled Animations:** Seamless storytelling powered by GSAP and ScrollTrigger. 
- **Dynamic Color Switching:** Ability to change the 3D model's color and on-screen textures interactively.
- **Glassmorphism UI:** Modern, sleek interface items using backdrop blurs and subtle transparencies.
- **Responsive Design:** Completely fluid layout utilizing Tailwind CSS, ensuring quality across all devices.
- **Video Integration:** Synchronized video playing inside the 3D model's screen.

## 🛠 Tech Stack

- **React.js & Vite:** Fast frontend framework and build tool.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI styling.
- **GSAP (GreenSock):** Professional-grade animation library for complex scroll sequences. 
- **Three.js & React Three Fiber:** For rendering and manipulating the 3D `.glb` models.
- **Zustand:** Lightweight state management for handling the 3D model's selected color and texture state.

## 📂 Project Structure

- `src/components/`: Reusable UI sections, organized sequentially as they appear on the page (e.g. `Hero.jsx`, `Highlights.jsx`, `Features.jsx`).
- `src/components/models/`: Contains the specific geometry configuration for the 3D models.
- `src/components/three/`: Contains the Canvas setup, lighting (`StudioLights.jsx`), and scene management logic.
- `src/constants/`: Centralized content data for features, models, galleries, and navigational links.
- `src/store/`: Contains the global Zustand store (`index.js`).

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone or download the repository to your local machine.
2. Navigate to the project directory:
   ```bash
   cd gsap_macbook_landing
   ```
3. Install the project dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📜 Notice

The 3D assets, icons, and structure in this project are used for educational purposes to demonstrate advanced GSAP animation and React Three Fiber integration capabilities. All rights for the MacBook Pro brand and imagery belong to Apple Inc.
