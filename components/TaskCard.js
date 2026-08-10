import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, RADII } from '../constants/theme';

const TaskCard = ({ task, onPress }) => {
  const { title, subtitle, progress, icon, accent } = task;

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.iconWrap, { backgroundColor: accent }]}>
        <Ionicons name={icon} size={26} color={COLORS.text} />
      </View>

      <View style={styles.textCol}>
        <Text style={styles.cardTopicTexts}>{title}</Text>
        <Text style={styles.cardSubTexts}>{subtitle}</Text>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${Math.round(progress * 100)}%` }]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    height: 128,
    borderRadius: RADII.card,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 14,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCol: {
    flex: 1,
  },
  cardTopicTexts: {
    fontWeight: '700',
    fontSize: 20,
    color: COLORS.text,
  },
  cardSubTexts: {
    fontWeight: '400',
    fontSize: 12,
    color: COLORS.subtext,
    marginTop: 2,
    marginBottom: 8,
  },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.progressTrack,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: COLORS.progressFill,
  },
});
