# 🎨 Multi-Theme React Application

A React + TypeScript project built for the **Hipster Pte. Ltd. Frontend Developer Assessment**.  
The application showcases three fully distinct themes, responsive layouts, and dynamic content fetching.

---

## 🔍 Project Overview

This project demonstrates a **theme-switcher application** where users can toggle between **three unique themes** that differ in:

- Layout structure
- Font styles
- Color schemes
- Component rendering (e.g., sidebar, card-based layouts)

The application also fetches product data from an external API and displays it responsively.

---

## 🚀 Features

- ✅ Fixed header with logo and theme dropdown
- ✅ **Three distinct themes**:
  - **Theme 1** – Minimalist, light background, sans-serif font
  - **Theme 2** – Dark mode, sidebar layout, serif font
  - **Theme 3** – Colorful card-based grid layout, playful font
- ✅ Theme changes include fonts, layouts, margins, and hover effects
- ✅ Theme persists across reloads using `localStorage`
- ✅ Uses **Context API** for theme state management
- ✅ Responsive design using **Tailwind CSS**
- ✅ Product cards fetched from [https://fakestoreapi.com/products](https://fakestoreapi.com/products)
- ✅ Routing for **Home**, **About**, and **Contact** pages using `React Router`
- ✅ Subtle animation for theme transitions
- ✅ Fully mobile and desktop compatible
- ✅ Built without large UI libraries (no MUI, Ant Design)

---

## 🛠️ Tech Stack

- **React** (with Hooks)
- **TypeScript**
- **Tailwind CSS (JIT mode)**
- **React Router v6**
- **Context API**
- **Vite** (for fast dev/build)

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Adrijchakraborty/Frontend_Assignment.git
cd Frontend_Assignment
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start development server
```bash
npm run dev
```
### 4. Build for production
```bash
npm run build
```

## 🗂️ Folder Structure
```bash
src/
├── components/
│   ├── Header.tsx
│   └── Navigation.tsx
├── context/
│   └── ThemeContext.tsx
├── layout/
│   └── AppLayout.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```
## Developed by: Adrij Chakraborty