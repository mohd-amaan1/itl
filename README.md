# ITL – Institute for Trusted Leadership

A pixel-perfect, responsive website implementation for the **Institute for Trusted Leadership (ITL)**, built from a provided Figma design as part of a technical assignment.

The project focuses on **design accuracy**, **clean component architecture**, and **smooth user experience**, using modern frontend tools.

---

## 🚀 Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **HTML5 / CSS3**
- **Vercel** (Deployment)

---

## 🎯 Key Features

- ✅ Pixel-accurate implementation of the Figma design  
- ✅ Fully responsive (desktop & mobile layouts)
- ✅ Component-based architecture
- ✅ Smooth accelerated scroll interaction
- ✅ Custom gradient-based dashed lines (Figma-faithful)
- ✅ Clean typography hierarchy using serif + sans-serif
- ✅ Optimized assets & modern layout techniques

---

## 🧱 Project Structure

```text
src/
├── assets/            # Images & icons 
├── components/        # Reusable UI components
│   ├── Hero.jsx
│   ├── OurNorthStar.jsx
│   ├── MeetFounder.jsx
│   ├── WhyWeExist.jsx
│   ├── TransformLeadership.jsx
│   └── ParallelDashedLines.jsx
├── App.jsx
├── main.jsx
└── index.css
public/
└── itl.png          # Favicon
````

---

## 🖥️ Sections Implemented

1. **Hero Section**

   * Gradient background
   * Custom typography
   * Accelerated scroll-to-bottom interaction

2. **Our North Star**

   * Circular visual system
   * Custom icon placement
   * Progress indicator

3. **Meet Our Founder**

   * 2×2 grid layout
   * Image + text alignment
   * Figma-style pagination

4. **This Is Why We Exist**

   * Centered messaging
   * Three-step framework
   * Vertical connectors & dashed baseline

5. **How We Transform Leadership**

   * Stair-step column layout
   * Bars positioned below text (Figma-accurate)
   * Equal bar heights with structural staggering

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd itl-website
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run locally

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🌍 Deployment

The project is deployed on **Vercel**.

### Deploy steps:

```bash
npm run build
```

Then deploy the `dist/` folder using Vercel CLI or the Vercel dashboard.

---

## 🎨 Design Notes

* All spacing, alignment, and hierarchy decisions closely follow the provided Figma file.
* Native CSS borders were avoided for dashed lines to ensure **precise dash spacing**, achieved using `repeating-linear-gradient`.
* Layout staggering is handled structurally (column flow), not with arbitrary margins.
* Custom scroll animation uses `requestAnimationFrame` for a premium feel.

---

## ♿ Accessibility & UX

* Semantic HTML structure
* Clickable interactive elements with hover states
* Smooth motion without jarring transitions
* Mobile-first adjustments where required by design

---

## 📌 Assumptions

* Images/icons are provided via Figma exports.
* No backend or API integration required.
* Content is static and design-driven.

---

## 👤 Author

**Mohd Amaan**
Frontend Developer
CSE, IIIT Kota

---

## 📄 License

This project is created for evaluation and demonstration purposes only.

```

