import {
  Button,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { PlusSVG, WhatsAppSVG } from '../assets/svg/SVGs';
import {
  netflixappStoreUrl,
  netflixplayStoreeUrl,
  netflixsApp,
  whatsAppPlayStore,
} from '../const/Constname';

const COntactUsCOmponent = () => {
  const openWhatsApp = async () => {
    const mobileNummber = '918490951618';
    const message = 'Helloo..';

    const whatsappUrl = `whatsapp://send?phone=${mobileNummber}&text=${encodeURIComponent(
      message,
    )}`;

    try {
      await Linking.openURL(whatsappUrl);
        // await Linking.openURL(netflixsApp);
      console.log('Open App');
    } catch (error) {
      await Linking.openURL(whatsAppPlayStore);
      //   if (Platform.OS === 'android') {
      //     await Linking.openURL(netflixplayStoreeUrl);
      //     console.log('Open PlayStore');
      //   } else {
      //     await Linking.openURL(netflixappStoreUrl);
      //     console.log('Open AppStore');
      //   }
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={openWhatsApp} style={styles.plusButton}>
        <WhatsAppSVG />
      </TouchableOpacity>
    </View>
  );
};

export default COntactUsCOmponent;

const styles = StyleSheet.create({
  plusButton: {
    // height: 75,
    // width: 75,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#6841d44d',
    // borderRadius: 50,
  },
});
