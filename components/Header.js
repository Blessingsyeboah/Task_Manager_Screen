import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';

const Header = ({ name, taskCount }) => {
  return (
    <View style={styles.firstRow}>
      <View>
        <Text style={styles.helloDevs}>Hello, {name}</Text>
        <Text style={styles.tasksToday}>{taskCount} tasks today</Text>
      </View>
      <Image source={require('../assets/ProfileImage.png')} style={styles.profile} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 52,
  },
  helloDevs: {
    fontWeight: '700',
    fontSize: 32,
    color: COLORS.text,
  },
  tasksToday: {
    fontWeight: '500',
    fontSize: 12,
    color: COLORS.subtext,
    marginTop: 4,
  },
  profile: {
    width: 50,
    height: 52,
    borderRadius: 26,
  },
});
