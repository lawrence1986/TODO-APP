
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
TODO-APP/
│
├── app/
│   ├── index.tsx              # Main screen (lists all todos)
│   └── _layout.tsx            # Router layout and navigation wrapper
│
├── components/
│   ├── Header.tsx             # App header: "TODO" title & theme toggle
│   ├── ThemeToggle.tsx        # Sun/Moon icon toggle button
│   ├── TodoInput.tsx          # Input field to create new todos
│   ├── TodoItem.tsx           # Single task row (text + actions)
│   ├── TodoList.tsx           # Wrapper that maps todos to TodoItem
│   └── EmptyState.tsx         # Optional: Shown when there are no tasks
│
├── context/
│   ├── ThemeContext.tsx       # Provides global light/dark theme
│   └── TodoContext.tsx        # Provides todo list state globally
│
├── theme/
│   ├── colors.ts              # Centralized color palette for themes
│   └── typography.ts          # (Optional) Font sizes and weights
│
├── assets/
│   ├── icons/                 # SVG icons (sun, moon, add, delete, edit)
│   │   ├── sun.svg
│   │   ├── moon.svg
│   │   ├── add.svg
│   │   ├── delete.svg
│   │   └── edit.svg
│   └── images/                # Background or banner images
│       └── banner-bg.png
│
├── utils/
│   ├── storage.ts             # LocalStorage or AsyncStorage helpers
│   └── helpers.ts             # Reusable utility functions (e.g., filters)
│
├── hooks/
│   ├── useTheme.ts            # Custom hook for theme access
│   └── useTodos.ts            # Custom hook for todo CRUD logic
│
├── styles/
│   └── global.css             # Global styling (if web project)
│
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md                  # Project overview and setup guide


---

## 🚀 Getting Started

### 1️⃣ Install Dependencies
```bash
npm install

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
# TODO-APP
