import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Dashboard: undefined;
  Profile: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Profile'>;
};

export default function ProfileScreen({ navigation }: Props) {
  const { width } = useWindowDimensions();
  const isWide = width >= 600;

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>

        <View style={styles.profileHeader}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('../../assets/YSS.jpg')}
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.profileName}>Phuntsho Namgyel</Text>
          <Text style={styles.profileRole}>User</Text>
        </View>

        <View style={[styles.infoRow, isWide && styles.infoRowWide]}>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>phuntshonamgyel@gmail.com</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Location</Text>
            <Text style={styles.infoValue}>Thimphu, Bhutan</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.prefCard}>
          <View style={styles.prefItem}>
            <Text style={styles.prefLabel}>Theme</Text>
            <Text style={styles.prefValue}>Light</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.prefItem}>
            <Text style={styles.prefLabel}>Language</Text>
            <Text style={styles.prefValue}>English</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.prefItem}>
            <Text style={styles.prefLabel}>Notifications</Text>
            <Text style={styles.prefValue}>On</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Go Back</Text>
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
  profileHeader: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarWrapper: {
    width: 90,
    height: 90,
    borderRadius: 45,
    overflow: 'hidden',
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#3b82f6',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  profileRole: {
    fontSize: 14,
    color: '#a0aec0',
  },
  infoRow: {
    flexDirection: 'column',
    gap: 12,
    marginBottom: 24,
  },
  infoRowWide: {
    flexDirection: 'row',
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
  },
  infoLabel: {
    fontSize: 12,
    color: '#a0aec0',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1a1a2e',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 12,
  },
  prefCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  prefItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  prefLabel: {
    fontSize: 15,
    color: '#1a1a2e',
  },
  prefValue: {
    fontSize: 15,
    color: '#3b82f6',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f4f8',
  },
  backButton: {
    backgroundColor: '#1a1a2e',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});