
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
##Project Structure
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
