import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const { width } = Dimensions.get('window');

type TabParamList = {
  Home: undefined;
  Contacts: undefined;
  Schedule: undefined;
  NoticeBoard: undefined;
};

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.banner}>
        <View style={styles.bannerBadge}>
          <Text style={styles.bannerBadgeText}>CST • Bhutan</Text>
        </View>
        <Text style={styles.bannerTitle}>Campus Companion</Text>
        <Text style={styles.bannerSubtitle}>College of Science and Technology</Text>
        <Text style={styles.bannerLocation}>Rinchending, Phuentsholing</Text>
      </View>

      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeEmoji}>👋</Text>
        <View style={styles.welcomeTextBox}>
          <Text style={styles.welcomeTitle}>Welcome, Student!</Text>
          <Text style={styles.welcomeText}>
            In pursuit of preparing for tomorrow's Technologist
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Links</Text>

      <View style={styles.cardGrid}>
        <TouchableOpacity
          style={[styles.card, styles.cardPurple]}
          onPress={() => navigation.navigate('Contacts')}
        >
          <Text style={styles.cardEmoji}>📞</Text>
          <Text style={styles.cardLabel}>Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.cardGold]}
          onPress={() => navigation.navigate('Schedule')}
        >
          <Text style={styles.cardEmoji}>📅</Text>
          <Text style={styles.cardLabel}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.cardDark]}
          onPress={() => navigation.navigate('NoticeBoard')}
        >
          <Text style={styles.cardEmoji}>📋</Text>
          <Text style={styles.cardLabel}>Notice Board</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Campus Info</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoEmoji}>📍</Text>
          <Text style={styles.infoText}>Rinchending, Phuentsholing, Bhutan</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoEmoji}>🌐</Text>
          <Text style={styles.infoText}>www.cst.edu.bt</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoEmoji}>📞</Text>
          <Text style={styles.infoText}>+975-17160538</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f0ff',
  },
  content: {
    paddingBottom: 30,
  },
  banner: {
    backgroundColor: '#3b0764',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  bannerBadge: {
    backgroundColor: '#f5a623',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginBottom: 14,
  },
  bannerBadgeText: {
    color: '#3b0764',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  bannerTitle: {
    fontSize: width > 380 ? 30 : 26,
    fontWeight: 'bold',
    color: '#f5a623',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  bannerSubtitle: {
    fontSize: 15,
    color: '#d8b4fe',
    marginTop: 6,
    textAlign: 'center',
  },
  bannerLocation: {
    fontSize: 13,
    color: '#a78bfa',
    marginTop: 4,
    textAlign: 'center',
  },
  welcomeBox: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#3b0764',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    borderLeftWidth: 5,
    borderLeftColor: '#f5a623',
  },
  welcomeEmoji: {
    fontSize: 36,
    marginRight: 14,
  },
  welcomeTextBox: {
    flex: 1,
  },
  welcomeTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3b0764',
    marginBottom: 4,
  },
  welcomeText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b0764',
    marginLeft: 16,
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  cardGrid: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 48) / 3,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  cardPurple: {
    backgroundColor: '#6d28d9',
    shadowColor: '#6d28d9',
  },
  cardGold: {
    backgroundColor: '#f5a623',
    shadowColor: '#f5a623',
  },
  cardDark: {
    backgroundColor: '#3b0764',
    shadowColor: '#3b0764',
  },
  cardEmoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 11,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#3b0764',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 18,
    elevation: 4,
    shadowColor: '#3b0764',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  infoTitle: {
    color: '#f5a623',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoEmoji: {
    fontSize: 16,
    marginRight: 10,
  },
  infoText: {
    color: '#d8b4fe',
    fontSize: 13,
  },
});