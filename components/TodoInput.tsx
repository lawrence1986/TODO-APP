// components/TodoInput.tsx
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import { COLORS } from '../theme/colors';
import AddIcon from '../assets/icons/add.svg';
import DeleteIcon from '../assets/icons/delete.svg';

export default function TodoInput({ onAdd }: { onAdd: (title: string) => void }) {
  const { theme } = useThemeContext();
  const color = COLORS[theme];
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const val = text.trim();
    if (!val) return;
    onAdd(val);
    setText('');
  };

  const clearInput = () => setText('');

  const hasText = text.trim().length > 0;

  return (
    <View
      style={[
        styles.inputContainer,
        {
          backgroundColor: theme === 'dark' ? '#25273D' : '#FFFFFF',
          borderColor: theme === 'dark' ? 'transparent' : color.border,
        },
      ]}
    >
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Create a new todo..."
        placeholderTextColor={color.text + '66'}
        style={[styles.input, { color: color.text }]}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />

      {/* ✅ Show ADD when typing; show DELETE only when empty */}
      {hasText ? (
        <TouchableOpacity onPress={handleSubmit} hitSlop={10} accessibilityLabel="Add todo">
          <AddIcon width={26} height={26} fill={color.primary} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={clearInput} hitSlop={10} accessibilityLabel="Clear input">
          <DeleteIcon width={22} height={22} fill={color.text} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 14,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingRight: 10, // leaves space so the icon remains clickable
  },
});
