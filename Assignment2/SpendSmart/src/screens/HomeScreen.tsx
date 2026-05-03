import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { expenses, monthlyBudget } from '../data/data';

export default function HomeScreen({ navigation }: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = monthlyBudget - totalSpent;
  const progress = totalSpent / monthlyBudget;

  // Run fade and scale animations together when the screen loads
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Phuntsho 👋</Text>
          <Text style={styles.subtitle}>Track your hostel expenses</Text>
        </View>
        <View style={styles.avatarSmall}>
          <Text style={styles.avatarText}>PN</Text>
        </View>
      </View>

      {/* Animated budget card with fade in and scale effect */}
      <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
        <Text style={styles.cardLabel}>Monthly Budget</Text>
        <Text style={styles.cardAmount}>Nu. {monthlyBudget}</Text>

        <View style={styles.progressBackground}>
          <View style={[styles.progressFill, { width: `${Math.min(progress * 100, 100)}%` }]} />
        </View>
        <Text style={styles.progressLabel}>{Math.round(progress * 100)}% of budget used</Text>

        <View style={styles.cardRow}>
          <View style={styles.cardStat}>
            <Ionicons name="arrow-up-circle-outline" size={18} color="#FFD700" />
            <View style={styles.cardStatText}>
              <Text style={styles.subLabel}>Spent</Text>
              <Text style={styles.spent}>Nu. {totalSpent}</Text>
            </View>
          </View>
          <View style={styles.cardDivider} />
          <View style={styles.cardStat}>
            <Ionicons name="arrow-down-circle-outline" size={18} color="#90EE90" />
            <View style={styles.cardStatText}>
              <Text style={styles.subLabel}>Remaining</Text>
              <Text style={styles.remaining}>Nu. {remaining}</Text>
            </View>
          </View>
        </View>
      </Animated.View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Expenses</Text>
        <Text style={styles.seeAll}>Last 5 entries</Text>
      </View>

      {expenses.slice(0, 5).map((expense) => (
        <TouchableOpacity
          key={expense.id}
          style={styles.recentItem}
          onPress={() => navigation.navigate('Categories', {
            screen: 'ExpenseDetail',
            params: { expense },
          })}
          activeOpacity={0.7}
        >
          <View style={styles.recentLeft}>
            <View style={styles.recentIcon}>
              <Ionicons
                name={
                  expense.category === 'Food' ? 'fast-food-outline' :
                  expense.category === 'Transport' ? 'bus-outline' :
                  expense.category === 'Books' ? 'book-outline' :
                  expense.category === 'Utilities' ? 'flash-outline' :
                  'game-controller-outline'
                }
                size={18}
                color="#4A90D9"
              />
            </View>
            <View>
              <Text style={styles.recentTitle}>{expense.title}</Text>
              <Text style={styles.recentCategory}>{expense.category}</Text>
            </View>
          </View>
          <View style={styles.recentRight}>
            <Text style={styles.recentAmount}>Nu. {expense.amount}</Text>
            <Ionicons name="chevron-forward" size={14} color="#ccc" />
          </View>
        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  avatarSmall: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#4A90D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#1A1A2E',
    borderRadius: 20,
    padding: 22,
    marginBottom: 24,
  },
  cardLabel: {
    color: '#aaa',
    fontSize: 13,
  },
  cardAmount: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '700',
    marginVertical: 6,
  },
  progressBackground: {
    height: 6,
    backgroundColor: '#ffffff30',
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 6,
  },
  progressFill: {
    height: 6,
    backgroundColor: '#FFD700',
    borderRadius: 4,
  },
  progressLabel: {
    color: '#aaa',
    fontSize: 11,
    marginBottom: 16,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardStat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardStatText: {
    gap: 2,
  },
  cardDivider: {
    width: 1,
    height: 36,
    backgroundColor: '#ffffff20',
    marginHorizontal: 12,
  },
  subLabel: {
    color: '#aaa',
    fontSize: 11,
  },
  spent: {
    color: '#FFD700',
    fontWeight: '700',
    fontSize: 15,
  },
  remaining: {
    color: '#90EE90',
    fontWeight: '700',
    fontSize: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  seeAll: {
    fontSize: 12,
    color: '#888',
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  recentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  recentRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  recentIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#EEF4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A2E',
  },
  recentCategory: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  recentAmount: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E74C3C',
  },
});