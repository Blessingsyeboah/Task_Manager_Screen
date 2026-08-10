import { View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, RADII } from '../constants/theme';

const SearchBar = ({ value, onChangeText, onFilterPress }) => {
  return (
    <View style={styles.secondRow}>
      <View style={styles.searchBox}>
        <Image source={require('../assets/SearchIcon.png')} style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={COLORS.subtext}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={onFilterPress} activeOpacity={0.7}>
        <Image source={require('../assets/Filter.png')} style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    gap: 12,
  },
  searchBox: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: RADII.pill,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 8,
  },
  searchIcon: {
    width: 22,
    height: 22,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: COLORS.text,
  },
  filterIcon: {
    width: 50,
    height: 48,
  },
});
