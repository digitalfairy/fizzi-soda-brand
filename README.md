# 🌌 Scroll-Animated 3D Landing Page

A high-performance, immersive landing page built with modern frontend and 3D technologies, featuring scroll-driven animations and dynamic content managed via a Headless CMS.

## ✨ Project Highlights

* **Immersive 3D Scroll-Link:** Leverages **Three.js** and **React Three Fiber (R3F)** for high-fidelity 3D scene rendering, tightly synchronized with native browser scroll using **GSAP's ScrollTrigger**.
* **Next.js 14 Performance:** Built on Next.js 14's **App Router** for optimized build times and server-side rendering benefits, ensuring fast loading and SEO.
* **Decoupled Content Management:** Utilizes **Prismic** as a Headless CMS, separating content (text, metadata) from the presentation layer, enabling easy content updates without touching code.
* **Type-Safe Development:** Developed entirely with **TypeScript**, ensuring code reliability and improved developer experience across the complex integration of GSAP, R3F, and Prismic.

---

## 🛠️ Tech Stack Expertise

This project demonstrates strong skills in:

* **3D Rendering:** **Three.js / React Three Fiber (R3F)** – *Complex 3D scene setup, custom material integration, and performance optimization for web environments.*
* **Animation & UX:** **GSAP (GreenSock)** – *Advanced timeline and scroll-trigger choreography, achieving smooth, native-feeling parallax effects.*
* **Frontend Core:** **Next.js 14 (App Router)** – *Full-stack capabilities, routing, and modern React development.*
* **Styling & UI/UX:** **Tailwind CSS** – *Utility-first styling for building responsive and complex layouts efficiently.*
* **Content Management:** **Prismic CMS** – *Integration of Slices, custom types, and client queries for dynamic content.*

---

## 🚀 Quick Setup (For Reviewers)

1.  **Clone the repository:**
    ```bash
    git clone [Your-Repo-URL]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run Dev Server:** *(Requires Prismic configuration to be set up locally)*
    ```bash
    npm run dev
    # This concurrently runs the Next.js dev server and Slice Machine UI
    ```
4.  Navigate to `http://localhost:3000`.

---

## 📁 Key Files & Code Highlights

* **`src/webgl/` (Conceptual):** Focuses on the core logic for the 3D scene and R3F canvas setup, including model handling and lighting.
* **GSAP Integration:** Look for `gsap.to()` or `ScrollTrigger.create()` calls within components to review the scroll-linked animation logic.
* **`src/slices/`:** Demonstrates how **Slice Machine** generates components that pull content dynamically from the Prismic CMS.

---

## 📧 Connect

For more projects and to discuss my skills:

* **Email:** jelicanita7@gmail.com

---

## 📄 License

```The base structure of this project is adapted from a Prismic starter template, licensed under the Apache License, Version 2.0.

Copyright 2013-2022 Prismic <contact@prismic.io> (https://prismic.io)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.```

