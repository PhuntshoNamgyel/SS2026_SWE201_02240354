import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Dashboard: undefined;
  Profile: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
};

export default function DashboardScreen({ navigation }: Props) {
  const { width } = useWindowDimensions();
  const isWide = width >= 600;

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.greeting}>Kuzu Zangpo 👋</Text>
          <Text style={styles.name}>Phuntsho Namgyel</Text>
        </View>

        <View style={[styles.cardRow, isWide && styles.cardRowWide]}>
          <View style={[styles.card, { backgroundColor: '#3b82f6' }]}>
            <Text style={styles.cardIcon}>📋</Text>
            <Text style={styles.cardValue}>4</Text>
            <Text style={styles.cardLabel}>Tasks Today</Text>
          </View>
          <View style={[styles.card, { backgroundColor: '#22c55e' }]}>
            <Text style={styles.cardIcon}>✅</Text>
            <Text style={styles.cardValue}>12</Text>
            <Text style={styles.cardLabel}>Completed</Text>
          </View>
          <View style={[styles.card, { backgroundColor: '#8b5cf6' }]}>
            <Text style={styles.cardIcon}>🔥</Text>
            <Text style={styles.cardValue}>7</Text>
            <Text style={styles.cardLabel}>Day Streak</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityCard}>
          <View style={styles.activityItem}>
            <Text style={styles.activityIcon}>📖</Text>
            <View>
              <Text style={styles.activityTitle}>Studied 1 hour</Text>
              <Text style={styles.activityTime}>Today, 11:00 AM</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.activityItem}>
            <Text style={styles.activityIcon}>🎞️</Text>
            <View>
              <Text style={styles.activityTitle}>Watched Movie</Text>
              <Text style={styles.activityTime}>Today, 4:30 PM</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.activityItem}>
            <Text style={styles.activityIcon}>🛌</Text>
            <View>
              <Text style={styles.activityTitle}>Slept 6 hours</Text>
              <Text style={styles.activityTime}>Yesterday</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.profileButtonText}>View Profile →</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 16,
  },
  header: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 14,
    color: '#a0aec0',
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cardRow: {
    flexDirection: 'column',
    gap: 12,
    marginBottom: 24,
  },
  cardRowWide: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    minWidth: 0,
  },
  cardIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cardLabel: {
    fontSize: 12,
    color: '#ffffff',
    opacity: 0.9,
    marginTop: 2,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 12,
  },
  activityCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
  },
  activityIcon: {
    fontSize: 22,
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1a1a2e',
  },
  activityTime: {
    fontSize: 12,
    color: '#a0aec0',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f4f8',
  },
  profileButton: {
    backgroundColor: '#1a1a2e',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  profileButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});