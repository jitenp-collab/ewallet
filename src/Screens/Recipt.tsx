import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { homeGradientOne, homeGradienttwo } from '../util/theme/theme';
import ReciptHeader from '../components/ReciptHeadet';
import ReciptList from '../components/ReciptList';
import ReciptButtonComponent from '../components/ReciptButtonComponent';

const Recipt = () => {
  return (
    <LinearGradient
      colors={[homeGradientOne, homeGradienttwo]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <ReciptHeader />
      <View style={styles.button}>
        <ReciptButtonComponent />
      </View>
      <View style={{ position: 'absolute', top: 60 }}>
        <ReciptList />
      </View>
    </LinearGradient>
  );
};

export default Recipt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    flex: 1,
    marginTop: 220,
  },
});
