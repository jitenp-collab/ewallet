import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { bgPrimaryColor } from '../util/theme/theme';
import UserProfileSvg from '../assets/svg/UserProfileSvg';
import { DownArrowSVG } from '../assets/svg/SVGs';
import SuccessIcon from '../assets/svg/SuccessIcon';

const ReciptList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.animationBox}>
        <SuccessIcon />
      </View>
      <Text style={[styles.alignText, styles.transfer]}>
        Transfer Succesfull!
      </Text>
      <Text style={[styles.alignText, styles.message, styles.textColor]}>
        Your money has been transfered succesfully!
      </Text>
      <View style={styles.Dcoration}></View>
      <View style={styles.box1}>
        <Text style={[styles.textColor]}>Transfer Amount</Text>
        <Text style={[styles.textcolor2]}>$120.24</Text>
      </View>
      <View style={styles.box2}>
        <UserProfileSvg />
        <View>
          <Text style={[styles.textcolor2, styles.name]}>Clarissa Bates</Text>
          <Text style={[styles.textColor]}>Bank - 0002 1887 2532</Text>
        </View>
      </View>

      <View style={styles.box3}>
        <Text style={[styles.textColor]}>Date & time</Text>
        <Text style={[styles.textcolor2]}>12 Feb 2022, 10:30 PM</Text>
      </View>
      <View style={styles.box3}>
        <Text style={[styles.textColor]}>No. Ref</Text>
        <Text style={[styles.textcolor2]}>11223548656532</Text>
      </View>

      <TouchableOpacity style={styles.seeDetail}>
        <Text style={[styles.textcolor2, styles.name]}>See Detail</Text>
        <DownArrowSVG />
      </TouchableOpacity>
    </View>
  );
};

export default ReciptList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgPrimaryColor,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 30,
    marginHorizontal: 15,
    position: 'relative',
    zIndex: 1,
  },

  alignText: {
    textAlign: 'center',
  },

  transfer: {
    fontWeight: '700',
    fontSize: 17,
  },

  message: {
    marginHorizontal: 50,
    paddingTop: 7,
    paddingBottom: 15,
  },

  Dcoration: {
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#00000034',
  },

  box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },

  textColor: {
    color: '#0000008e',
  },

  textcolor2: {
    color: '#000',
    fontWeight: '700',
  },

  box2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: '#00000034',
    paddingVertical: 2,
    borderRadius: 10,
  },

  name: {
    fontSize: 16,
  },

  box3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  seeDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 20,
  },
  animationBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
