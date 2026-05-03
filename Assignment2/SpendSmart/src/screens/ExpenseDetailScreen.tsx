import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { expenses, monthlyBudget } from '../data/data';

const categoryColors: Record<string, string> = {
  Food: '#FF6B6B',
  Transport: '#4ECDC4',
  Books: '#45B7D1',
  Utilities: '#96CEB4',
  Entertainment: '#A29BFE',
};

const categoryIcons: Record<string, any> = {
  Food: 'fast-food-outline',
  Transport: 'bus-outline',
  Books: 'book-outline',
  Utilities: 'flash-outline',
  Entertainment: 'game-controller-outline',
};

export default function ExpenseDetailScreen({ route }: any) {
  const { expense } = route.params;

  const slideAnim = useRef(new Animated.Value(60)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  const categoryTotal = expenses
    .filter((e) => e.category === expense.category)
    .reduce((sum, e) => sum + e.amount, 0);

  // Percentage of the monthly budget this single expense consumes
  const budgetPercent = expense.amount / monthlyBudget;

  // Percentage this expense represents within its category
  const categoryPercent = expense.amount / categoryTotal;

  const similar = expenses.filter((e) => e.category === expense.category && e.id !== expense.id);

  const color = categoryColors[expense.category] || '#ccc';
  const icon = categoryIcons[expense.category] || 'receipt-outline';

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      // Delayed so the progress bar animates after the card finishes sliding in
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 900,
        delay: 400,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animated.View
        style={[styles.card, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
      >
        <View style={[styles.iconHeader, { backgroundColor: color + '20' }]}>
          <View style={[styles.iconCircle, { backgroundColor: color }]}>
            <Ionicons name={icon} size={28} color="#fff" />
          </View>
          <View style={[styles.badge, { backgroundColor: color + '30' }]}>
            <Text style={[styles.badgeText, { color }]}>{expense.category}</Text>
          </View>
        </View>

        <Text style={styles.title}>{expense.title}</Text>
        <Text style={styles.amount}>Nu. {expense.amount}</Text>

        <View style={styles.divider} />

        <View style={styles.detailRow}>
          <View style={styles.detailLeft}>
            <Ionicons name="calendar-outline" size={16} color="#888" />
            <Text style={styles.label}>Date</Text>
          </View>
          <Text style={styles.value}>{expense.date}</Text>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.detailLeft}>
            <Ionicons name="chatbubble-outline" size={16} color="#888" />
            <Text style={styles.label}>Note</Text>
          </View>
          <Text style={styles.value}>{expense.note}</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.insightTitle}>Budget Impact</Text>

        <Text style={styles.insightLabel}>
          This expense is {Math.round(budgetPercent * 100)}% of your monthly budget
        </Text>
        <View style={styles.progressBackground}>
          <Animated.View
            style={[
              styles.progressFill,
              {
                backgroundColor: color,
                width: progressAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', `${Math.min(budgetPercent * 100, 100)}%`],
                }),
              },
            ]}
          />
        </View>

        <Text style={[styles.insightLabel, { marginTop: 14 }]}>
          This is {Math.round(categoryPercent * 100)}% of all your {expense.category} spending
        </Text>
        <View style={styles.progressBackground}>
          <Animated.View
            style={[
              styles.progressFill,
              {
                backgroundColor: '#4A90D9',
                width: progressAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', `${Math.min(categoryPercent * 100, 100)}%`],
                }),
              },
            ]}
          />
        </View>

        <View style={styles.divider} />

        <Text style={styles.insightTitle}>Other {expense.category} Expenses</Text>
        {similar.length === 0 ? (
          <Text style={styles.emptyText}>No other expenses in this category.</Text>
        ) : (
          similar.map((item) => (
            <View key={item.id} style={styles.similarRow}>
              <View style={styles.similarLeft}>
                <View style={[styles.similarDot, { backgroundColor: color }]} />
                <View>
                  <Text style={styles.similarTitle}>{item.title}</Text>
                  <Text style={styles.similarNote}>{item.note}</Text>
                </View>
              </View>
              <Text style={styles.similarAmount}>Nu. {item.amount}</Text>
            </View>
          ))
        )}

        {/* Category total across all expenses, not just the similar list above */}
        <View style={[styles.totalBox, { backgroundColor: color + '15' }]}>
          <Text style={styles.totalLabel}>Total spent on {expense.category}</Text>
          <Text style={[styles.totalValue, { color }]}>Nu. {categoryTotal}</Text>
        </View>

      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 30,
    marginTop: 10,
  },
  iconHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '700',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 6,
  },
  amount: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: '#888',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A2E',
    maxWidth: '55%',
    textAlign: 'right',
  },
  insightTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 10,
  },
  insightLabel: {
    fontSize: 13,
    color: '#888',
    marginBottom: 8,
  },
  progressBackground: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  progressFill: {
    height: 8,
    borderRadius: 4,
  },
  similarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  similarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  similarDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  similarTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1A1A2E',
  },
  similarNote: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 2,
  },
  similarAmount: {
    fontSize: 13,
    fontWeight: '700',
    color: '#E74C3C',
  },
  totalBox: {
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  totalLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  totalValue: {
    fontSize: 24,
    fontWeight: '700',
  },
  emptyText: {
    fontSize: 13,
    color: '#aaa',
    textAlign: 'center',
    marginVertical: 10,
  },
});