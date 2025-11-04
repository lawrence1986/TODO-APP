// app/_layout.tsx
import { Stack } from 'expo-router';
import { ThemeProvider } from '../context/ThemeContext';
import { useFonts, JosefinSans_400Regular, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';
import { View, ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ JosefinSans_400Regular, JosefinSans_700Bold });
  if (!fontsLoaded) return <View><ActivityIndicator /></View>;

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}