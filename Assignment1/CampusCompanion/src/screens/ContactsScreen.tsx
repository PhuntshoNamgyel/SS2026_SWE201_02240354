import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { contacts, Contact } from '../data/data';
import { ContactsStackParamList } from '../navigation/ContactsStackNavigator';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<ContactsStackParamList, 'ContactsList'>;

export default function ContactsScreen() {
  const navigation = useNavigation<NavigationProp>();

  // Track which contact is selected for highlight effect
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handlePress(contact: Contact) {
    // Highlight the tapped contact briefly before navigating
    setSelectedId(contact.id);
    setTimeout(() => {
      setSelectedId(null);
      navigation.navigate('ContactDetail', { contact });
    }, 150);
  }

  function renderContact({ item }: { item: Contact }) {
    // Apply selected style dynamically when this card is tapped
    const isSelected = item.id === selectedId;

    return (
      <TouchableOpacity
        style={[styles.card, isSelected && styles.cardSelected]}
        onPress={() => handlePress(item)}
        activeOpacity={0.8}
      >
        <View style={[styles.avatar, isSelected && styles.avatarSelected]}>
          <Text style={[styles.avatarText, isSelected && styles.avatarTextSelected]}>
            {item.name.charAt(0)}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={[styles.name, isSelected && styles.nameSelected]}>
            {item.name}
          </Text>
          <Text style={[styles.role, isSelected && styles.roleSelected]}>
            {item.role}
          </Text>
          <Text style={[styles.phone, isSelected && styles.phoneSelected]}>
            {item.phone}
          </Text>
        </View>

        <View style={[styles.arrowBox, isSelected && styles.arrowBoxSelected]}>
          <Text style={styles.arrow}>›</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBanner}>
        <Text style={styles.headerTitle}>Campus Contacts</Text>
        <Text style={styles.headerSub}>Tap a contact to view more details</Text>
      </View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContact}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
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
  list: {
    padding: 16,
    paddingBottom: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#3b0764',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    borderLeftWidth: 4,
    borderLeftColor: '#6d28d9',
  },
  // Dynamic style applied when contact card is selected
  cardSelected: {
    backgroundColor: '#3b0764',
    borderLeftColor: '#f5a623',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ede9fe',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  avatarSelected: {
    backgroundColor: '#f5a623',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6d28d9',
  },
  avatarTextSelected: {
    color: '#3b0764',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: width > 380 ? 16 : 14,
    fontWeight: 'bold',
    color: '#3b0764',
    marginBottom: 2,
  },
  nameSelected: {
    color: '#f5a623',
  },
  role: {
    fontSize: 13,
    color: '#7c3aed',
    marginBottom: 2,
  },
  roleSelected: {
    color: '#d8b4fe',
  },
  phone: {
    fontSize: 13,
    color: '#555',
  },
  phoneSelected: {
    color: '#a78bfa',
  },
  arrowBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ede9fe',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  arrowBoxSelected: {
    backgroundColor: '#f5a623',
  },
  arrow: {
    fontSize: 20,
    color: '#6d28d9',
    fontWeight: 'bold',
  },
});