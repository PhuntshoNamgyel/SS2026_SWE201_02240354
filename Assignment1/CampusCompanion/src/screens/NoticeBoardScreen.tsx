import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { notices, Notice } from '../data/data';

const { width } = Dimensions.get('window');

export default function NoticeBoardScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function handlePress(id: string) {
    setExpandedId(expandedId === id ? null : id);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerBanner}>
        <Text style={styles.headerTitle}>Notice Board</Text>
        <Text style={styles.headerSub}>Tap a notice to read more</Text>
      </View>

      {notices.map((item: Notice) => {
        const isExpanded = expandedId === item.id;

        return (
          <TouchableOpacity
            key={item.id}
            style={[styles.card, isExpanded && styles.cardExpanded]}
            onPress={() => handlePress(item.id)}
            activeOpacity={0.85}
          >
            <View style={styles.cardHeader}>
              <View style={styles.cardLeft}>
                <View style={[styles.dot, isExpanded && styles.dotExpanded]} />
                <View style={styles.titleBox}>
                  <Text
                    style={[styles.cardTitle, isExpanded && styles.cardTitleExpanded]}
                    numberOfLines={isExpanded ? undefined : 2}
                  >
                    {item.title}
                  </Text>
                  <View style={styles.dateRow}>
                    <Text style={[styles.date, isExpanded && styles.dateExpanded]}>
                      📅 {item.date}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.arrowBox, isExpanded && styles.arrowBoxExpanded]}>
                <Text style={[styles.arrow, isExpanded && styles.arrowExpanded]}>
                  {isExpanded ? '▲' : '▼'}
                </Text>
              </View>
            </View>

            {isExpanded && (
              <View style={styles.descriptionBox}>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
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
  headerBanner: {
    backgroundColor: '#3b0764',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 16,
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    elevation: 4,
    shadowColor: '#3b0764',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    borderLeftWidth: 4,
    borderLeftColor: '#6d28d9',
  },
  cardExpanded: {
    backgroundColor: '#3b0764',
    borderLeftColor: '#f5a623',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    marginRight: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6d28d9',
    marginTop: 4,
    marginRight: 10,
  },
  dotExpanded: {
    backgroundColor: '#f5a623',
  },
  titleBox: {
    flex: 1,
  },
  cardTitle: {
    fontSize: width > 380 ? 15 : 13,
    fontWeight: 'bold',
    color: '#3b0764',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  cardTitleExpanded: {
    color: '#f5a623',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: '#7c3aed',
  },
  dateExpanded: {
    color: '#d8b4fe',
  },
  arrowBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ede9fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowBoxExpanded: {
    backgroundColor: '#f5a623',
  },
  arrow: {
    fontSize: 11,
    color: '#6d28d9',
    fontWeight: 'bold',
  },
  arrowExpanded: {
    color: '#3b0764',
  },
  descriptionBox: {
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#6d28d9',
  },
  description: {
    fontSize: 14,
    color: '#d8b4fe',
    lineHeight: 22,
  },
});