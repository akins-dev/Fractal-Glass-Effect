# Glassform / L'AURA

A luxury landing page concept exploring refractive glass distortions, Swiss-style typography, and WebGL performance.

## Demo Video
Watch the demo below:

<p align="center">
  <img src="./public/video.gif" width="600" alt="App demo" />
</p>

> If the video does not play, open [public/video.gif](public/video.gif) directly.

## 🛠 Tech Stack & Tools

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Custom "Swiss" & "Cozy" config)
* **3D / WebGL:**
    * [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) (R3F)
    * [@react-three/drei](https://github.com/pmndrs/drei) (Utilities)
    * [Three.js](https://threejs.org/)
* **Shaders:** Custom GLSL (Fractal Glass/Refraction logic)

## ✨ Key Features

* **Custom GLSL Shader:** Implements a "Fractal Glass" effect using iterative displacement and parallax mapping.
* **Orthographic Projection:** Uses an orthographic camera to map 3D geometry 1:1 with the 2D viewport for a "wallpaper" feel.
* **Responsive Canvas:** Dynamic viewport scaling ensures the shader stretches perfectly across mobile and desktop without distortion.

## 🎨 Design System

* **Typography:** Serif (Playfair Display) + Sans (Inter) for high-contrast hierarchy.
* **Palette:** Organic Beige (`#e8e4dc`) & Deep Charcoal (`#1a1918`).
* **Layout:** Minimalist "Swiss Style" grid with corner-anchored navigation.

---

*Part of my 20-Day UI/Interaction Challenge.*