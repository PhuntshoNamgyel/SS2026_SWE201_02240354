import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { monthlyBudget, expenses } from '../data/data';

export default function ProfileScreen() {
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = monthlyBudget - totalSpent;
  const progress = totalSpent / monthlyBudget;

  // Decide the notification status message based on spending level
  const spendingPercent = Math.round(progress * 100);
  const notificationMessage = spendingPercent >= 80
    ? 'Warning: You have used over 80% of your budget!'
    : `You will be notified when spending exceeds 80% of your budget.`;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.profileCard}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('../../assets/Jinwoo.jpg')}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>Phuntsho Namgyel</Text>
        <Text style={styles.info}>B.E. Software Engineering • Year 2</Text>
        <Text style={styles.info}>NK Hostel • CST, Phuentsholing</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <View style={[styles.progressFill, { width: `${Math.min(progress * 100, 100)}%` }]} />
          </View>
          <Text style={styles.progressLabel}>{spendingPercent}% of monthly budget used</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>Nu. {monthlyBudget}</Text>
          <Text style={styles.statLabel}>Budget</Text>
        </View>
        <View style={[styles.statBox, styles.statBoxMiddle]}>
          <Text style={[styles.statValue, { color: '#E74C3C' }]}>Nu. {totalSpent}</Text>
          <Text style={styles.statLabel}>Spent</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statValue, { color: '#27AE60' }]}>Nu. {remaining}</Text>
          <Text style={styles.statLabel}>Left</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Settings</Text>
      <View style={styles.settingsCard}>

        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <View style={[styles.iconBox, { backgroundColor: '#FFE8E8' }]}>
              <Ionicons name="notifications-outline" size={18} color="#E74C3C" />
            </View>
            <Text style={styles.settingText}>Notifications</Text>
          </View>
          <Switch
            value={notificationsOn}
            onValueChange={setNotificationsOn}
            trackColor={{ true: '#4A90D9' }}
          />
        </View>

        {/* Status message that reacts to the notifications toggle and spending level */}
        <View style={[
          styles.notifBanner,
          { backgroundColor: notificationsOn
            ? spendingPercent >= 80 ? '#FFF0F0' : '#F0F8FF'
            : '#F5F5F5'
          }
        ]}>
          <Ionicons
            name={notificationsOn
              ? spendingPercent >= 80 ? 'warning-outline' : 'checkmark-circle-outline'
              : 'notifications-off-outline'
            }
            size={14}
            color={notificationsOn
              ? spendingPercent >= 80 ? '#E74C3C' : '#27AE60'
              : '#aaa'
            }
          />
          <Text style={[
            styles.notifText,
            { color: notificationsOn
              ? spendingPercent >= 80 ? '#E74C3C' : '#27AE60'
              : '#aaa'
            }
          ]}>
            {notificationsOn ? notificationMessage : 'Notifications are turned off.'}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <View style={[styles.iconBox, { backgroundColor: '#E8EAFF' }]}>
              <Ionicons name="moon-outline" size={18} color="#4A90D9" />
            </View>
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ true: '#4A90D9' }}
          />
        </View>

        <View style={styles.notifBanner}>
          <Ionicons name="construct-outline" size={14} color="#aaa" />
          <Text style={styles.comingSoonText}>Dark mode support coming soon.</Text>
        </View>

      </View>

      <Text style={styles.sectionTitle}>About</Text>
      <View style={styles.settingsCard}>
        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <View style={[styles.iconBox, { backgroundColor: '#E8FFE8' }]}>
              <Ionicons name="information-circle-outline" size={18} color="#27AE60" />
            </View>
            <Text style={styles.settingText}>SpendSmart v1.0.0</Text>
          </View>
          <Ionicons name="chevron-forward" size={16} color="#ccc" />
        </View>

        <View style={styles.divider} />

        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <View style={[styles.iconBox, { backgroundColor: '#FFF8E8' }]}>
              <Ionicons name="school-outline" size={18} color="#F39C12" />
            </View>
            <Text style={styles.settingText}>CST, Phuentsholing</Text>
          </View>
          <Ionicons name="chevron-forward" size={16} color="#ccc" />
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    padding: 16,
  },
  profileCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 16,
  },
  avatarWrapper: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 3,
    borderColor: '#4A90D9',
    overflow: 'hidden',
    marginBottom: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  info: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 2,
  },
  progressContainer: {
    width: '100%',
    marginTop: 20,
  },
  progressBackground: {
    height: 6,
    backgroundColor: '#ffffff20',
    borderRadius: 4,
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
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statBox: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  statBoxMiddle: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#f0f0f0',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 10,
  },
  settingsCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 34,
    height: 34,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 14,
    color: '#1A1A2E',
  },
  divider: {
    height: 1,
    backgroundColor: '#f5f5f5',
    marginHorizontal: 14,
  },
  notifBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingBottom: 12,
  },
  notifText: {
    fontSize: 12,
    flex: 1,
  },
  comingSoonText: {
    fontSize: 12,
    color: '#aaa',
    flex: 1,
  },
});