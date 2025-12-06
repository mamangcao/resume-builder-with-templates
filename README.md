**Project Title: Real-Time Reactive Resume Builder**

**Description:**

**A modern, high-performance web application tailored for professionals to craft ATS-friendly resumes. Built with Next.js 14 and TypeScript, the application features a reactive split-screen interface that updates in real-time as the user types.**

**Unlike traditional resume builders that rely on heavy server-side PDF generation, this project utilizes a CSS-first architecture for printing, ensuring pixel-perfect A4 output directly from the browser. State management is handled by Zustand with local persistence, ensuring users never lose their progress even if they refresh the page—all without requiring a login or database.**

## 🚀 Features

- **Real-time Editing:** See changes instantly as you type.
- **Smart Grouping:** Automatically groups positions under the same company (Promotions).
- **Multiple Templates:**
  - *Harvard:* Classic, text-heavy, ATS-friendly.
  - *Modern:* Clean aesthetics with accent colors and sidebars.
- **Customizable Themes:** Switch between Emerald, Blue, Purple, and more.
- **Privacy First:** No database required. All data is persisted locally in your browser.
- **Mobile Friendly:** fully responsive editor interface.
- **Print to PDF:** Optimized CSS layout for perfect A4 printing.

**1.Core Framework & Language**
- **Next.js 14 (App Router):** The React framework used for structure, routing, and optimized build performance.
- **TypeScript:** Used for strict type safety (interfaces like ResumeData, Education) to prevent bugs and ensure data consistency between the Editor and Preview.
- **React:** The library for building the component-based UI (Split Screen, Editor, Preview).

**2. Styling & UI**
- **Tailwind CSS:** Used for all styling, including the responsive grid layouts (mobile/desktop switching) and the generic UI components.
- **CSS Media Queries (@media print):** The "secret sauce" used to generate the PDF. Instead of heavy libraries, we used native CSS to format the HTML perfectly for A4 paper when printing.
- **Lucide React:** The icon library used for the UI elements (Trash bin, Plus sign, Download button).
- **React Icons (Simple Icons):** Used in the footer for brand logos (Next.js and Tailwind icons).

**3. State Management (The Brain)**
**Zustand:** A lightweight state management library. We used it to:
- Store the resume data globally.
- Handle updates without prop-drilling.
- Persist Middleware: Automatically saves the user's progress to the browser's LocalStorage so data isn't lost on refresh.
  
**4. Utilities**
- **clsx & tailwind-merge:** Used to conditionally combine CSS classes (often used in the cn() utility helper).

**5. DEMO**
Check out the live demo [here](https://resume-mamangcao.vercel.app)


**6. License / Copyright**
© 2025 **Abdul Haleem Mamangcao. All Rights Reserved.**
Do not copy, redistribute, or reproduce any part of this project without permission.

**7. Contact**
For questions, suggestions, or collaborations, reach out via:
**Email: abdulhaleem.mamangcao.@gmail.com**
Visit my website [here](https://mamangcao.vercel.app)
