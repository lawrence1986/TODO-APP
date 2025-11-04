// components/TodoItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import { COLORS } from '../theme/colors';
import DeleteIcon from '../assets/icons/delete.svg';
import { LinearGradient } from 'expo-linear-gradient';

export default function TodoItem({ item, onToggle, onDelete }) {
  const { theme } = useThemeContext();
  const color = COLORS[theme];

  const gradientColors = theme === 'dark'
    ? ['#57DDFF', '#C058F3']   // Neon blue → purple (Dark mode)
    : ['#3A7CFD', '#57DDFF'];  // Blue → aqua (Light mode)

  return (
    <View style={[styles.row, { borderBottomColor: color.border }]}>
      
      {/* ✅ Check / Toggle */}
      <TouchableOpacity onPress={() => onToggle(item.id)} activeOpacity={0.8}>
        {item.completed ? (
          // === Completed State → Gradient Fill
          <LinearGradient colors={gradientColors} style={styles.checkedCircle}>
            <Text style={styles.checkMark}>✓</Text>
          </LinearGradient>
        ) : (
          // === Incomplete State → Hollow Circle
          <View style={[styles.circle, { borderColor: color.border }]} />
        )}
      </TouchableOpacity>

      {/* Task Text */}
      <Text
        style={[
          styles.text,
          {
            color: item.completed ? color.text + '66' : color.text,
            textDecorationLine: item.completed ? 'line-through' : 'none',
          },
        ]}
      >
        {item.title}
      </Text>

      {/* Delete Icon */}
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <DeleteIcon width={20} height={20} fill={color.text + '88'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    marginRight: 12,
  },
  checkedCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    shadowColor: '#57DDFF',
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },
  checkMark: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'JosefinSans_400Regular',
  },
});
