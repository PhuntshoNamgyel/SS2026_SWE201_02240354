import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ContactsStackParamList } from '../navigation/ContactsStackNavigator';

const { width } = Dimensions.get('window');

type Props = NativeStackScreenProps<ContactsStackParamList, 'ContactDetail'>;

export default function ContactDetailScreen({ route }: Props) {
  const { contact } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.header}>
        <View style={styles.avatarRing}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{contact.name.charAt(0)}</Text>
          </View>
        </View>
        <Text style={styles.name}>{contact.name}</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>{contact.role}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>

        <View style={styles.detailCard}>
          <View style={styles.detailRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📞</Text>
            </View>
            <View style={styles.detailText}>
              <Text style={styles.detailLabel}>Phone</Text>
              <Text style={styles.detailValue}>{contact.phone}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📧</Text>
            </View>
            <View style={styles.detailText}>
              <Text style={styles.detailLabel}>Email</Text>
              <Text style={styles.detailValue}>{contact.email}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📍</Text>
            </View>
            <View style={styles.detailText}>
              <Text style={styles.detailLabel}>Location</Text>
              <Text style={styles.detailValue}>{contact.office}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.noteBox}>
        <Text style={styles.noteIcon}>🕘</Text>
        <Text style={styles.noteText}>
          Office hours are Monday to Friday, 9:00 AM to 5:00 PM. Contact via phone or email for appointments.
        </Text>
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
  header: {
    backgroundColor: '#3b0764',
    alignItems: 'center',
    paddingVertical: 36,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  avatarRing: {
    width: width > 380 ? 100 : 85,
    height: width > 380 ? 100 : 85,
    borderRadius: width > 380 ? 50 : 42.5,
    backgroundColor: '#f5a623',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: width > 380 ? 86 : 72,
    height: width > 380 ? 86 : 72,
    borderRadius: width > 380 ? 43 : 36,
    backgroundColor: '#6d28d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: width > 380 ? 38 : 30,
    fontWeight: 'bold',
    color: '#f5a623',
  },
  name: {
    fontSize: width > 380 ? 22 : 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  roleBadge: {
    backgroundColor: '#f5a623',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  roleText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#3b0764',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6d28d9',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  detailCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 6,
    elevation: 4,
    shadowColor: '#3b0764',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ede9fe',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  icon: {
    fontSize: 18,
  },
  detailText: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 11,
    color: '#7c3aed',
    marginBottom: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    fontWeight: 'bold',
  },
  detailValue: {
    fontSize: width > 380 ? 15 : 13,
    color: '#333',
    flexWrap: 'wrap',
  },
  divider: {
    height: 1,
    backgroundColor: '#f3f0ff',
    marginHorizontal: 14,
  },
  noteBox: {
    backgroundColor: '#3b0764',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    elevation: 4,
    shadowColor: '#3b0764',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  noteIcon: {
    fontSize: 18,
    marginRight: 10,
    marginTop: 2,
  },
  noteText: {
    fontSize: 13,
    color: '#d8b4fe',
    lineHeight: 20,
    flex: 1,
  },
});