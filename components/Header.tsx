import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useThemeContext } from "../context/ThemeContext";
import { COLORS } from "../theme/colors";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { theme } = useThemeContext();
  const color = COLORS[theme];

  return (
    <View style={styles.header}>
      <Text style={[styles.title, { color: color.text }]}>TODO</Text>
      <ThemeToggle />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "90%",
    maxWidth: 500,
    flexDirection: "row",
    justifyContent: "space-between",    // ✅ keeps them closer
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,                        // ✅ matches Figma sizing
    fontWeight: "700",
    letterSpacing: 8,                    // ✅ Figma spacing style
  },
});
