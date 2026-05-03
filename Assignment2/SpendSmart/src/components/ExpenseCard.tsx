import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Expense } from '../data/data';

type Props = {
  expense: Expense;
};

const categoryColors: Record<string, string> = {
  Food: '#FF6B6B',
  Transport: '#4ECDC4',
  Books: '#45B7D1',
  Utilities: '#96CEB4',
  Entertainment: '#FFEAA7',
};

export default function ExpenseCard({ expense }: Props) {
  return (
    <View style={styles.card}>
      <View style={[styles.dot, { backgroundColor: categoryColors[expense.category] || '#ccc' }]} />
      <View style={styles.info}>
        <Text style={styles.title}>{expense.title}</Text>
        <Text style={styles.meta}>{expense.category} • {expense.date}</Text>
        <Text style={styles.note}>{expense.note}</Text>
      </View>
      <Text style={styles.amount}>Nu. {expense.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  meta: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  note: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 2,
  },
  amount: {
    fontSize: 15,
    fontWeight: '700',
    color: '#E74C3C',
  },
});