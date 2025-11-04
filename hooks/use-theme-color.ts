import { Colors } from "@/constants/theme";
import { useAppTheme } from "@/context/ThemeContext";

export function useThemeColor(props: { light?: string; dark?: string }, colorName: keyof typeof Colors.light & keyof typeof Colors.dark) {
  const { theme } = useAppTheme();
  const colorFromProps = theme === 'light' ? props.light : props.dark;
  if (colorFromProps) return colorFromProps;
  return Colors[theme][colorName];
}
