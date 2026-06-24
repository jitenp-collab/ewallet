import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import UserProfileSvg from '../assets/svg/UserProfileSvg';
import BellSVG from '../assets/svg/BellSvg';
import { headerTextColor, TextSeconderyText } from '../util/theme/theme';
import Animated from 'react-native-reanimated';
import { useCountAnimation } from '../util/useCountAnimation';

const Header = () => {
  const animationAmount = useCountAnimation(4560.54);

  return (
    <View>
      <View style={styles.Container}>
        <TouchableOpacity>
          <UserProfileSvg />
        </TouchableOpacity>
        <TouchableOpacity>
          <BellSVG />
        </TouchableOpacity>
      </View>

      <Text style={styles.textOne}>Available Balance</Text>

      <Animated.Text style={styles.balence}>{animationAmount}</Animated.Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textOne: {
    textAlign: 'center',
    fontSize: 14,
    color: headerTextColor,
  },
  balence: {
    textAlign: 'center',
    color: TextSeconderyText,
    fontSize: 45,
  },
});
