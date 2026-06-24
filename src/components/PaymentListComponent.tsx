import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { bgPrimaryColor } from '../util/theme/theme';
import { Items } from '../const/ConstData';

const PaymentListComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.paymentList}>Payment List</Text>
      </View>

      <View style={styles.grid}>
        {Items.map(item => (
          <TouchableOpacity key={item.id} style={styles.item}>
            <View style={styles.iconBox}>
              <item.Icon width={32} height={32} />
            </View>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PaymentListComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgPrimaryColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 50,
  },

  box: {
    paddingHorizontal: 15,
  },

  paymentList: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '25%',
    alignItems: 'center',
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(208, 194, 221, 0.27)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 13,
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
    width: '65%',
  },
});
