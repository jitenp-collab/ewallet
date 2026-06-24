import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LeftArrowSVG, ShareSVG } from '../assets/svg/SVGs';
import { bgPrimaryColor } from '../util/theme/theme';
import { useNavigation } from '@react-navigation/native';

const ReciptHeader = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonBg}
      >
        <LeftArrowSVG width={30} height={30} />
      </TouchableOpacity>
      <Text style={styles.recipt}>Receipt</Text>
      <TouchableOpacity style={styles.buttonBg}>
        <ShareSVG width={23} height={23} fill={bgPrimaryColor} />
      </TouchableOpacity>
    </View>
  );
};

export default ReciptHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
  },

  buttonBg: {
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff3d',
  },

  recipt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
