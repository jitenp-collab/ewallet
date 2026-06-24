import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { bgPrimaryColor } from '../util/theme/theme';
import {
  HistorySVG,
  RecieveMoneySVG,
  SendMoneySVG,
  WalletTopUpSVG,
} from '../assets/svg/SVGs';

const TransictionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <WalletTopUpSVG height={25} width={25} />
        <Text style={styles.sametext}>Top Up</Text>
      </View>

      <View style={styles.box}>
        <SendMoneySVG height={25} width={25} />
        <Text style={styles.sametext}>Send</Text>
      </View>
      <View style={styles.box}>
        <RecieveMoneySVG height={25} width={25} />
        <Text style={styles.sametext}>Request</Text>
      </View>
      <View style={styles.box}>
        <HistorySVG height={25} width={25} />
        <Text style={styles.sametext}>History</Text>
      </View>
    </View>
  );
};

export default TransictionComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgPrimaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 15,
    width: '90%',
    marginHorizontal: 'auto',
    elevation: 2,
  },
  sametext: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,
  },

  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
