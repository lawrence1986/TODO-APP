// app/index.tsx
import React, { useState, useMemo } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { useThemeContext } from '../context/ThemeContext';
import { COLORS } from '../theme/colors';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';

type FilterType = 'All' | 'Active' | 'Completed';

export default function HomeScreen() {
  const { theme } = useThemeContext();
  const color = COLORS[theme];

  const [todos, setTodos] = useState<{ id: number; title: string; completed: boolean }[]>([]);
  const [filter, setFilter] = useState<FilterType>('All');

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'Active':
        return todos.filter(t => !t.completed);
      case 'Completed':
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  }, [filter, todos]);

  const itemsLeft = todos.filter(t => !t.completed).length;

  const addTodo = (title: string) =>
    setTodos([...todos, { id: Date.now(), title, completed: false }]);

  const toggleTodo = (id: number) =>
    setTodos(todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTodo = (id: number) =>
    setTodos(todos.filter(t => t.id !== id));

  const clearCompleted = () =>
    setTodos(todos.filter(t => !t.completed));

  return (
    <View style={{ flex: 1, backgroundColor: theme === 'dark' ? '#181824' : '#FAFAFA' }}>
      
      {/* ✅ HERO BANNER (TOP SECTION) */}
      <ImageBackground
        source={
          theme === 'dark'
            ? require('../assets/images/hero-bg-dark.jpg')
            : require('../assets/images/hero-bg-light.jpg')
        }
        resizeMode="cover"
        style={styles.hero}
      >
        <SafeAreaView style={styles.headerArea}>
          <Header />

          {/* ✅ Input directly under Header */}
          <View style={styles.inputWrapper}>
            <TodoInput onAdd={addTodo} />
          </View>
        </SafeAreaView>
      </ImageBackground>

      {/* ✅ MAIN CONTENT (BOTTOM SECTION) */}
      <View style={styles.contentArea}>
        <View style={styles.centerWrapper}>
          <View style={[styles.todoCard, { backgroundColor: color.card }]}>

            <FlatList
              data={filteredTodos}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <TodoItem item={item} onToggle={toggleTodo} onDelete={deleteTodo} />
              )}
              ListEmptyComponent={
                <Text style={[styles.emptyText, { color: color.text + '99' }]}>
                  No tasks found
                </Text>
              }
            />

            {/* ✅ Footer */}
            <View style={[styles.footer, { borderTopColor: color.border }]}>
              <Text style={[styles.counter, { color: color.text + '99' }]}>
                {itemsLeft} item{itemsLeft !== 1 ? 's' : ''} left
              </Text>

              <View style={styles.filters}>
                {(['All', 'Active', 'Completed'] as FilterType[]).map(f => (
                  <TouchableOpacity key={f} onPress={() => setFilter(f)}>
                    <Text
                      style={[
                        styles.filterText,
                        { color: f === filter ? color.primary : color.text + '99' },
                      ]}
                    >
                      {f}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity onPress={clearCompleted}>
                <Text style={[styles.clear, { color: color.text + '99' }]}>
                  Clear Completed
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* ✅ Drag & Drop Label */}
          <Text style={[styles.reorderInfo, { color: color.text + '66' }]}>
            Drag and drop to reorder list
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    paddingBottom: 60, // height space of banner section
  },

  headerArea: {
    alignItems: 'center',
    width: '100%',
  },

  inputWrapper: {
    width: '90%',
    maxWidth: 500,
    marginTop: 20,
    marginBottom: 15,
  },

  contentArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#181824', // ✅ Dark lower background
  },

  centerWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: -20, // pulls card slightly into banner for Figma look
  },

  todoCard: {
    width: '90%',
    maxWidth: 500,
    borderRadius: 10,
    paddingVertical: 14,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 12,
    marginTop: 10,
  },

  counter: { fontSize: 13, flex: 1 },

  filters: { flexDirection: 'row', gap: 15 },

  filterText: { fontSize: 14 },

  clear: { fontSize: 13 },

  emptyText: { textAlign: 'center', paddingVertical: 40, fontSize: 15 },

  reorderInfo: { marginTop: 20, fontSize: 14, textAlign: 'center' },
});
