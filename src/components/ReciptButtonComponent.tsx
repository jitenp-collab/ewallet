import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  primaryColor,
  turneryColor,
} from '../util/theme/theme';
import LinearGradient from 'react-native-linear-gradient';

const ReciptButtonComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <LinearGradient
          colors={[primaryColor, turneryColor]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.text}>Done</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ReciptButtonComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f2f2',
    justifyContent: 'flex-end',
    flex: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },

  button: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    marginHorizontal: 15,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
