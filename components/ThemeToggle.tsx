// components/ThemeToggle.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import SunIcon from '../assets/icons/sun.svg';
import MoonIcon from '../assets/icons/moon.svg';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.toggle}>
      {theme === 'light' ? (
        <MoonIcon width={26} height={26} />
      ) : (
        <SunIcon width={26} height={26} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  toggle: {
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent', // ✅ No background
    borderRadius: 0,                 // ✅ Remove circle shape
    width: 'auto',                   // ✅ Let icon define size
    height: 'auto',
  },
});
