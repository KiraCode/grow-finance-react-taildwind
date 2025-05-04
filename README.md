# 🌿 Grow With Data

A modern, responsive **data analytics landing page** built using **React** and **Tailwind CSS**. Users can explore analytics services, subscribe to a newsletter, and learn more about the company's solutions, legal terms, and other offerings. Deployed via **Netlify**.

---

## 🚀 Tech Stack

- **React** (Frontend)
- **Tailwind CSS**  
  Tailwind is configured using the official Vite setup guide:[Tailwind Setup with Vite](https://v3.tailwindcss.com/docs/guides/vite)
- **React Icons** (`react-icons`)
- **React Typed** (`react-typed`)
- **Netlify** (Deployment)

---

## 🎨 UI Features

- **Hero Section**: Includes animated typing text using `react-typed`.
- **Responsive Layout**: Built using Flexbox and Grid with Tailwind CSS.
- **Newsletter Section**: UI for entering an email address to get notified (no backend).
- **Pricing Cards**:
  - Single User
  - Double User
  - Triple/Quadra User
- **Footer**:
  - Social media icons (via `react-icons`)
  - Links to: Company, Sports, Legal, Solutions

---

## 📍 Deployment

This project is deployed on **Netlify**:  
🔗 [View Live Site](https://finance-grow-data.netlify.app/)

---

## 📁 Project Structure

<pre>
grow-with-data/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/                      # All image assets
│   ├── components/                      # Reusable React components
│   │   ├── Analytics.jsx
│   │   ├── Cards.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Newsletter.jsx
│   ├── App.css                          # App-level styling
│   ├── index.css                        # Tailwind and base styles
│   ├── App.jsx                          # Root React component
│   └── main.jsx                         # Entry point
├── index.html                           # HTML template
├── package.json                         # Project dependencies and scripts
├── tailwind.config.js                   # Tailwind CSS configuration
├── vite.config.js                       # Vite build configuration
└── README.md                            # Project documentation
</pre>

---

## 📝 Notes

- This is a front-end UI project only.
- No form submissions or user data is handled.

---

## 📄 License

Open source under the [MIT License](LICENSE).


