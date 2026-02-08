# 🌌 Scroll-Animated 3D Landing Page

A high-performance, immersive landing page built with modern frontend and 3D technologies, featuring scroll-driven animations and dynamic content managed via a Headless CMS.

**[🌐 View Live Demo](https://fizzi.anitacreativestudio.com/)**

---

## ✨ Project Highlights

* **Immersive 3D Scroll-Link:** Leverages **Three.js** and **React Three Fiber (R3F)** for high-fidelity 3D scene rendering, tightly synchronized with native browser scroll using **GSAP's ScrollTrigger**.
* **Next.js 14 Performance:** Built on Next.js 14's **App Router** for optimized build times and server-side rendering benefits, ensuring fast loading and SEO.
* **Decoupled Content Management:** Utilizes **Prismic** as a Headless CMS, separating content from the presentation layer for easy updates.
* **Type-Safe Development:** Developed entirely with **TypeScript**, ensuring code reliability across the integration of GSAP, R3F, and Prismic.

---

## 🛠️ Tech Stack Expertise

| Category | Technology |
| :--- | :--- |
| **3D Rendering** | Three.js / React Three Fiber (R3F) |
| **Animation** | GSAP (GreenSock) & ScrollTrigger |
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS |
| **CMS** | Prismic (Slice Machine) |

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
    # Runs the Next.js dev server and Slice Machine UI
    ```
4.  Navigate to `http://localhost:3000`.

---

## 📁 Key Files & Code Highlights

* **`src/webgl/`**: Core logic for the 3D scene, R3F canvas setup, model handling, and lighting.
* **GSAP Integration**: Advanced timeline choreography using `gsap.context()` and `ScrollTrigger` for performance-friendly animations.
* **`src/slices/`**: Prismic Slices that generate dynamic UI components with linked CMS data.

---

## 📧 Connect

For more projects and to discuss my skills:

* **Website:** [anitacreativestudio.com](https://anitacreativestudio.com)
* **Email:** [jelicanita7@gmail.com](mailto:jelicanita7@gmail.com)

---

## 📄 License

The base structure of this project is adapted from a Prismic starter template, licensed under the Apache License, Version 2.0.

Copyright 2013-2022 Prismic (https://prismic.io)
Licensed under the Apache License, Version 2.0.