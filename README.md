# 🛍️ MiniShop - React E-Commerce SPA

A minimal, responsive single-page e-commerce application built with **React + Vite**, featuring:

- Product listing and details
- Add to cart with persistent cart UI
- Toast notifications
- Checkout form with validation
- Cart sidebar with quantity control

---

## 🚀 Live Demo

👉 [View Live on Netlify](https://mini-ecommerce-spa.netlify.app/)

---

## 🧱 Tech Stack

- **React + Vite**
- **TypeScript**
- **TailwindCSS**
- **Zustand** – lightweight state management
- **React Hook Form + Zod** – form validation
- **Lucide React** – elegant icons
- **React Router** – client-side routing
- **clsx** – conditional classnames

---

## 🧩 Features

- ✅ Modern responsive UI with TailwindCSS
- ✅ Product List and Detail Page
- ✅ Slide-in Cart Sidebar with:
    - Quantity control
    - Remove items
    - Total calculation
- ✅ Toast notifications using `react-hot-toast`
- ✅ Checkout modal with form validation using `zod-resolver` 
- ✅ Clean routing with `react-router-dom`

---

## 📦 Installation

```bash
git clone https://github.com/your-username/minishop.git
cd minishop
npm install
npm run dev
```

---

## 🏗️ Project Structure

```bash
src/
├── components/         # Navbar, CartSidebar, ProductCard, etc.
├── features/           # cart and products feature folders
│   ├── cart/           # Zustand store
│   └── products/       # Product fetching hook
├── pages/              # Home, ProductDetail
├── types/              # Product types
├── utils/              # Toast utilities
├── App.tsx
├── main.tsx
└── index.css
```

---

## 📥 Dummy Data

All product data is stored in a local static file or hook. You can replace it with your own API or backend later.

---

## 🧪 Future Improvements

- 🛒 Persistent cart via `localStorage`
- 🔐 Auth flow (login/signup)
- 🌐 Backend connection for real product data
- 📦 Order history / checkout confirmation page

---

## 🧑‍💻 Author

Made by [Shahriar Alvi](https://github.com/ShahriarAlvi)

---

## 📄 License

This project is open source and free to use under the [MIT License](LICENSE).