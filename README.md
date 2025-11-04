# 📌 TODO App

A beautifully designed **Todo Management** mobile application built with **React Native** and **Expo**, closely inspired by a modern Figma UI.  
This app supports **Dark & Light themes**, task filters, smooth animations, and a clean minimal layout.

---

## 🎨 Features

| Feature | Description |
|--------|-------------|
| ✅ Add new todos | Create tasks easily with a clean input field |
| ✅ Mark tasks as complete | Tap on a task to toggle its completion state |
| ✅ Delete tasks | Remove tasks instantly with the delete icon |
| ✅ Dark / Light theme support | Seamless theme switching with Figma-accurate icons |
| ✅ Filters | View **All**, **Active**, or **Completed** tasks |
| ✅ Modern UI | Styled to match pixel-perfect designs from Figma |
| ✅ Responsive layout | Works on small + large screens gracefully |
| ✅ Organized architecture | Reusable components, clear state management |

---

## 🖥️ Screenshots (Add yours later)

| Light Mode | Dark Mode |
|-----------|-----------|
| ![Light Screenshot](./assets/screens/light.png) | ![Dark Screenshot](./assets/screens/dark.png) |

> (You can capture screenshots later and replace the images.)

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies
```bash
npm install

npx expo start

TODO-APP/
│
├── app/
│   ├── index.tsx            # Main screen
│   └── _layout.tsx          # Router layout
│
├── components/
│   ├── Header.tsx           # "TODO" title & theme toggle
│   ├── ThemeToggle.tsx      # Sun/Moon icon toggle
│   ├── TodoInput.tsx        # Create todo field
│   ├── TodoItem.tsx         # Individual task row
│
├── context/
│   └── ThemeContext.tsx     # Global light/dark state
│
├── theme/
│   └── colors.ts            # Color palette for themes
│
├── assets/
│   ├── icons/               # SVG icons (sun, moon, add, delete, etc.)
│   └── images/              # Banner background images
│
└── README.md

## 🧠 Theme System

# The app uses a global ThemeContext to toggle light/dark mode:

const { theme, toggleTheme } = useThemeContext();


Colors adapt automatically based on theme from:

/theme/colors.ts


Icons switch dynamically in:

/components/ThemeToggle.tsx

## 🛠️ Tech Stack
Tool	Usage
Expo	App runtime environment
React Native	UI components
TypeScript (optional)	Type safety
expo-router	File-based navigation
SVG Assets	Crisp scalable icons
Context API	Theme & state management

## 🌱 Future Enhancements

✅ Drag-and-drop list sorting

✅ Persistent storage (AsyncStorage / SQLite / Supabase)

✅ Cloud sync profile & login support

✅ Task reminders / notifications

## 📄 License

This project is released under the MIT License.
You may use, modify, and distribute freely.

## Built with ❤️ by Lawrence

If you need help deploying or scaling this — I’ve got you 👋