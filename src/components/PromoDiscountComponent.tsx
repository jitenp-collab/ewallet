import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { bgPrimaryColor, primaryColor } from '../util/theme/theme';
import CreditCards from './CreditCard';

const PromoDiscountComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.promo}>Promo & Discount</Text>
        <TouchableOpacity>
          <Text style={styles.seemore}>See more</Text>
        </TouchableOpacity>
      </View>
      <CreditCards />
    </View>
  );
};

export default PromoDiscountComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgPrimaryColor,
    paddingHorizontal: 15,
    paddingBottom: 100,
  },
  promo: {
    fontSize: 17,
    fontWeight: '700',
  },

  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  seemore: {
    color: primaryColor,
    fontWeight: '800',
  },
});
