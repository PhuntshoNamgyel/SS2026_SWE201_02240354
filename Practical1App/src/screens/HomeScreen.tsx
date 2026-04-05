import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Marcel.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to my App!</Text>
      <Text style={styles.subtitle}>Hi, I'm Phuntsho!</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#abf5c4', padding: 20 },
  image: { width: 155, height: 230, borderRadius: 100, marginBottom: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 24, color: '#555' },
});