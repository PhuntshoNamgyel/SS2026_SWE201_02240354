import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { schedule, ClassItem } from '../data/data';

const { width } = Dimensions.get('window');

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Unique color per module code for visual variety
const MODULE_COLORS: { [key: string]: string } = {
  MAT110: '#00c3ff',
  ACS101: '#f5a623',
  CSF101: '#0891b2',
  DBS101: '#059669',
  NWC201: '#dc2626',
};

export default function ScheduleScreen() {
  // Track the currently selected day tab, default to Monday
  const [selectedDay, setSelectedDay] = useState('Monday');

  // Filter classes based on the selected day
  const filteredClasses = schedule.filter(
    (item) => item.day === selectedDay
  );

  return (
    <View style={styles.container}>

      <View style={styles.headerBanner}>
        <Text style={styles.headerTitle}>Class Schedule</Text>
        <Text style={styles.headerSub}>Select a day to view your classes</Text>
      </View>

      {/* Horizontal scrollable day selector tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabBar}
        contentContainerStyle={styles.tabBarContent}
      >
        {DAYS.map((day) => (
          <TouchableOpacity
            key={day}
            style={[styles.tab, selectedDay === day && styles.tabSelected]}
            onPress={() => setSelectedDay(day)}
          >
            <Text style={[styles.tabText, selectedDay === day && styles.tabTextSelected]}>
              {day.slice(0, 3)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        style={styles.classList}
        contentContainerStyle={styles.classListContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredClasses.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyEmoji}>🎉</Text>
            <Text style={styles.emptyTitle}>No Classes!</Text>
            <Text style={styles.emptyText}>Enjoy your free day on {selectedDay}.</Text>
          </View>
        ) : (
          filteredClasses.map((item: ClassItem) => {
            // Fall back to default purple if module code is not in the list
            const color = MODULE_COLORS[item.code] || '#6d28d9';
            return (
              <View key={item.id} style={styles.classCard}>
                <View style={[styles.colorBar, { backgroundColor: color }]} />
                <View style={styles.cardContent}>
                  <View style={styles.cardTop}>
                    <View style={[styles.codeBadge, { backgroundColor: color }]}>
                      <Text style={styles.codeText}>{item.code}</Text>
                    </View>
                    <Text style={styles.roomText}>📍 {item.room}</Text>
                  </View>
                  <Text style={styles.moduleName}>{item.module}</Text>
                  <View style={styles.timeRow}>
                    <Text style={styles.timeText}>🕐 {item.time}</Text>
                  </View>
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f0ff',
  },
  headerBanner: {
    backgroundColor: '#3b0764',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f5a623',
    marginBottom: 4,
  },
  headerSub: {
    fontSize: 13,
    color: '#d8b4fe',
  },
  tabBar: {
    flexGrow: 0,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ede9fe',
  },
  tabBarContent: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f0ff',
    marginRight: 8,
  },
  // Dynamic style applied when day tab is selected
  tabSelected: {
    backgroundColor: '#6d28d9',
  },
  tabText: {
    fontSize: 13,
    color: '#6d28d9',
    fontWeight: '600',
  },
  tabTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  classList: {
    flex: 1,
  },
  classListContent: {
    padding: 16,
    paddingBottom: 30,
  },
  classCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 14,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#3b0764',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  colorBar: {
    width: 6,
  },
  cardContent: {
    flex: 1,
    padding: 14,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  codeBadge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  codeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  roomText: {
    fontSize: 12,
    color: '#888',
  },
  moduleName: {
    fontSize: width > 380 ? 15 : 13,
    fontWeight: 'bold',
    color: '#3b0764',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 13,
    color: '#6d28d9',
    fontWeight: '500',
  },
  emptyBox: {
    alignItems: 'center',
    marginTop: 80,
  },
  emptyEmoji: {
    fontSize: 52,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b0764',
    marginBottom: 6,
  },
  emptyText: {
    fontSize: 14,
    color: '#888',
  },
});