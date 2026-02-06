# 🔐 Password Manager

A simple and secure **Password Manager** built with **React**, focused on clean UX and predictable user actions.  
It allows users to **edit, save, and manage passwords** with clear feedback and validation.

---

## ✨ Features

- 🔒 Masked password input by default
- 👁️ Show / hide password toggle
- ✏️ Edit password functionality
- 💾 Save password with confirmation
- 🚫 Prevents empty form submission
- 🔔 Toast notifications for user actions
- 🧠 Clear separation between **Edit**, **Save**, and **Delete** actions

---

## 🧩 Core UX Logic

- **Edit**  
  Enables password editing without mutating stored data.

- **Save**  
  Validates input, saves the password, and shows an **“Edited”** toast only after successful submission.

- **Delete**  
  Explicit user action with a separate handler and toast feedback.

> Toasts are triggered **only on user actions**, not on state changes.

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **React Toast Library** (`react-toastify`)

