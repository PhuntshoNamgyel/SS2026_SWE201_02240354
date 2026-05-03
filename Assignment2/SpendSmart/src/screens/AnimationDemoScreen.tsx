import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

export default function AnimationDemoScreen() {
  const bounceAnim = useRef(new Animated.Value(1)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  const lottieRef = useRef<LottieView>(null);
  const [bounceCount, setBounceCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const handleBounce = () => {
    setBounceCount((prev) => prev + 1);
    Animated.sequence([
      Animated.spring(bounceAnim, {
        toValue: 1.4,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.spring(bounceAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    // Capture touch events so the ScrollView does not intercept the drag
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {
      setIsDragging(true);
      // Store current position as offset so dragging starts from where the card is
      pan.setOffset({ x: (pan.x as any)._value, y: (pan.y as any)._value });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event(
      [null, { dx: pan.x, dy: pan.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      setIsDragging(false);
      // Merge offset into value before snapping back so position resets cleanly
      pan.flattenOffset();
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        friction: 5,
        tension: 40,
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    // Disable scrolling while dragging so the gesture is not interrupted
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEnabled={!isDragging}
    >
      <Text style={styles.heading}>Animation Demo</Text>
      <Text style={styles.subheading}>Interactive animations</Text>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={[styles.iconBox, { backgroundColor: '#E8F5E9' }]}>
            <Ionicons name="sparkles-outline" size={18} color="#27AE60" />
          </View>
          <View>
            <Text style={styles.sectionTitle}>Lottie Animation</Text>
            <Text style={styles.description}>Tap the animation to pause or play</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            if (isPlaying) {
              lottieRef.current?.pause();
            } else {
              lottieRef.current?.play();
            }
            setIsPlaying(!isPlaying);
          }}
        >
          <LottieView
            ref={lottieRef}
            source={require('../../assets/Money.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
        </TouchableOpacity>
        <Text style={styles.counter}>{isPlaying ? 'Tap to pause' : 'Tap to play'}</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={[styles.iconBox, { backgroundColor: '#FFF3E0' }]}>
            <Ionicons name="radio-button-on-outline" size={18} color="#F39C12" />
          </View>
          <View>
            <Text style={styles.sectionTitle}>Bounce Animation</Text>
            <Text style={styles.description}>Tap the card to trigger a spring effect</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleBounce} activeOpacity={0.9}>
          <Animated.View style={[styles.bounceBox, { transform: [{ scale: bounceAnim }] }]}>
            <Ionicons name="wallet-outline" size={28} color="#fff" />
            <Text style={styles.bounceText}>Nu. 120</Text>
            <Text style={styles.bounceLabel}>Tap to bounce!</Text>
          </Animated.View>
        </TouchableOpacity>

        <View style={styles.counterRow}>
          <Ionicons name="finger-print-outline" size={14} color="#888" />
          <Text style={styles.counter}>Tapped {bounceCount} {bounceCount === 1 ? 'time' : 'times'}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={[styles.iconBox, { backgroundColor: '#E8F0FF' }]}>
            <Ionicons name="move-outline" size={18} color="#4A90D9" />
          </View>
          <View>
            <Text style={styles.sectionTitle}>Drag Gesture</Text>
            <Text style={styles.description}>Drag the card, it snaps back on release</Text>
          </View>
        </View>

        <View style={styles.dragArea}>
          <Animated.View
            style={[styles.dragCard, { transform: pan.getTranslateTransform() }]}
            {...panResponder.panHandlers}
          >
            <Ionicons name="cash-outline" size={26} color="#fff" />
            <Text style={styles.dragText}>Drag me</Text>
          </Animated.View>
        </View>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Animations in this app</Text>
        {[
          { icon: 'eye-outline', label: 'Fade in on Home screen budget card' },
          { icon: 'expand-outline', label: 'Scale spring on Home screen budget card' },
          { icon: 'arrow-up-outline', label: 'Slide up on Expense Detail screen' },
          { icon: 'sparkles-outline', label: 'Lottie animation (this screen)' },
          { icon: 'radio-button-on-outline', label: 'Bounce on tap (this screen)' },
          { icon: 'move-outline', label: 'Smooth drag gesture with snap back' },
        ].map((item, index) => (
          <View key={index} style={styles.summaryRow}>
            <Ionicons name={item.icon as any} size={16} color="#4A90D9" />
            <Text style={styles.summaryText}>{item.label}</Text>
          </View>
        ))}
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
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A2E',
    marginTop: 10,
  },
  subheading: {
    fontSize: 13,
    color: '#888',
    marginBottom: 24,
    marginTop: 4,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  description: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  lottie: {
    width: '100%',
    height: 200,
  },
  bounceBox: {
    backgroundColor: '#4A90D9',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    alignSelf: 'center',
    width: 160,
    gap: 6,
  },
  bounceText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  bounceLabel: {
    color: '#ffffff90',
    fontSize: 12,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 14,
  },
  counter: {
    textAlign: 'center',
    color: '#888',
    fontSize: 13,
    marginTop: 10,
  },
  dragArea: {
    height: 180,
    backgroundColor: '#F0F4FF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#dde3f0',
    borderStyle: 'dashed',
  },
  dragCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
    width: 120,
    gap: 8,
  },
  dragText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  summaryCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    gap: 12,
  },
  summaryTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  summaryText: {
    fontSize: 13,
    color: '#aaa',
  },
});