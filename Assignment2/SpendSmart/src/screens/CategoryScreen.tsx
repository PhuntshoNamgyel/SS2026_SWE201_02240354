import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { expenses, categories } from '../data/data';
import ExpenseCard from '../components/ExpenseCard';

const categoryIcons: Record<string, any> = {
  Food: 'fast-food-outline',
  Transport: 'bus-outline',
  Books: 'book-outline',
  Utilities: 'flash-outline',
  Entertainment: 'game-controller-outline',
};

const categoryColors: Record<string, string> = {
  Food: '#FF6B6B',
  Transport: '#4ECDC4',
  Books: '#45B7D1',
  Utilities: '#96CEB4',
  Entertainment: '#A29BFE',
};

export default function CategoryScreen({ navigation }: any) {
  const [selected, setSelected] = useState('Food');

  const filtered = expenses.filter((e) => e.category === selected);
  const totalForCategory = filtered.reduce((sum, e) => sum + e.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Browse by Category</Text>

      <View style={styles.tabRow}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.tab,
              selected === cat && { backgroundColor: categoryColors[cat], borderColor: categoryColors[cat] },
            ]}
            onPress={() => setSelected(cat)}
          >
            <Ionicons
              name={categoryIcons[cat]}
              size={14}
              color={selected === cat ? '#fff' : '#888'}
            />
            <Text style={[styles.tabText, selected === cat && styles.activeTabText]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.summaryBar, { borderLeftColor: categoryColors[selected] }]}>
        <Text style={styles.summaryText}>
          {filtered.length} expense{filtered.length !== 1 ? 's' : ''} in {selected}
        </Text>
        <Text style={[styles.summaryAmount, { color: categoryColors[selected] }]}>
          Nu. {totalForCategory}
        </Text>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ExpenseDetail', { expense: item })}>
            <ExpenseCard expense={item} />
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="receipt-outline" size={48} color="#ccc" />
            <Text style={styles.empty}>No expenses in this category.</Text>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 16,
    marginTop: 10,
  },
  tabRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tabText: {
    fontSize: 13,
    color: '#888',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  summaryBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  summaryText: {
    fontSize: 13,
    color: '#555',
  },
  summaryAmount: {
    fontSize: 15,
    fontWeight: '700',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 60,
    gap: 12,
  },
  empty: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 14,
  },
});