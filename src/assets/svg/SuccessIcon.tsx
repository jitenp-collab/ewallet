import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const SuccessIcon = () => {
  return (
    <View style={styles.container}>
      <Svg width={80} height={80} viewBox="0 0 160 160">
        <Circle cx="80" cy="80" r="80" fill="#b2dfbd" />
        <Circle cx="80" cy="80" r="60" fill="#2a7a45" />
        <Path
          d="M52 80 L68 96 L108 58"
          stroke="#fff"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </Svg>
    </View>
  );
};

export default SuccessIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
