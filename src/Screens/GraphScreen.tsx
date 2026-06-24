import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GraphComponent from '../components/GraphComponent';
import { bgPrimaryColor } from '../util/theme/theme';

const GraphScreen = () => {
  return (
    <View style={styles.conatiner}>
      <GraphComponent />
    </View>
  );
};

export default GraphScreen;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: bgPrimaryColor,
    flex: 1,
  },
});
