import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SettingsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings ⚙️</Text>

      <Text style={styles.option}>🖼️ Wallpaper</Text>
      <Text style={styles.option}>💾 Storage</Text>
      <Text style={styles.option}>🔔 Notifications</Text>
      <Text style={styles.option}>🔒 Privacy</Text>
      <Text style={styles.option}>📱 Display</Text>

      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#c4ea83', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 24 },
  option: { fontSize: 18, marginBottom: 16, color: '#333' },
});