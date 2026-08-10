import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, RADII } from '../constants/theme';

const CategoryCard = ({ category, onPress }) => {
  const { title, taskCount, image, icon, accent } = category;

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.cardTopicTexts}>{title}</Text>
      <Text style={styles.cardSubTexts}>{taskCount} Tasks</Text>

      {image ? (
        <Image source={image} style={styles.avatar} />
      ) : (
        <View style={[styles.iconWrap, { backgroundColor: accent }]}>
          <Ionicons name={icon} size={54} color={COLORS.text} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    height: 192,
    width: 186,
    borderRadius: RADII.card,
  },
  cardTopicTexts: {
    fontWeight: '700',
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 15,
    color: COLORS.text,
  },
  cardSubTexts: {
    fontWeight: '400',
    fontSize: 12,
    paddingLeft: 15,
    marginBottom: 5,
    color: COLORS.subtext,
  },
  avatar: {
    width: 151,
    height: 140,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  iconWrap: {
    width: 92,
    height: 92,
    borderRadius: 46,
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
