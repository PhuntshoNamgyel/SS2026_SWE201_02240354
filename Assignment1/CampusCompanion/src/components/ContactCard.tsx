import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Contact } from '../data/data';

const { width } = Dimensions.get('window');

type Props = {
  contact: Contact;
  onPress: (contact: Contact) => void;
  isSelected: boolean;
};

// This is a reusable component for displaying a single contact card
export default function ContactCard({ contact, onPress, isSelected }: Props) {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]}
      onPress={() => onPress(contact)}
      activeOpacity={0.8}
    >
      {/* Avatar circle with first letter of name */}
      <View style={[styles.avatar, isSelected && styles.avatarSelected]}>
        <Text style={styles.avatarText}>{contact.name.charAt(0)}</Text>
      </View>

      {/* Contact info */}
      <View style={styles.info}>
        <Text style={[styles.name, isSelected && styles.nameSelected]}>
          {contact.name}
        </Text>
        <Text style={styles.role}>{contact.role}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>
      </View>

      {/* Arrow */}
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardSelected: {
    backgroundColor: '#1a5276',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#aed6f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  avatarSelected: {
    backgroundColor: '#fff',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a5276',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: width > 380 ? 16 : 14,
    fontWeight: 'bold',
    color: '#1a5276',
    marginBottom: 2,
  },
  nameSelected: {
    color: '#fff',
  },
  role: {
    fontSize: 13,
    color: '#888',
    marginBottom: 2,
  },
  phone: {
    fontSize: 13,
    color: '#555',
  },
  arrow: {
    fontSize: 24,
    color: '#aed6f1',
    marginLeft: 8,
  },
});