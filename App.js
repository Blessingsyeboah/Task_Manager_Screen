import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryCard from './components/CategoryCard';
import TaskCard from './components/TaskCard';

import { categories } from './data/categories';
import { tasks } from './data/tasks';
import { COLORS, SPACING } from './constants/theme';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.objects}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Header name="Devs" taskCount={tasks.length + 6} />

        <SearchBar
          value={search}
          onChangeText={setSearch}
          onFilterPress={() => {}}
        />

        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesRow}
        >
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <View style={styles.tasksList}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  objects: {
    paddingHorizontal: SPACING.screenX,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 12,
    color: COLORS.text,
  },
  categoriesRow: {
    gap: 16,
    paddingRight: 4,
    marginBottom: 30,
  },
  tasksList: {
    marginTop: 2,
  },
});
