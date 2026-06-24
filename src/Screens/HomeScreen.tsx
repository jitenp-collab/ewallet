import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { homeGradientOne, homeGradienttwo } from '../util/theme/theme';
import Header from '../components/Header';
import TransictionComponent from '../components/TransictionComponent';
import PaymentListComponent from '../components/PaymentListComponent';
import PromoDiscountComponent from '../components/PromoDiscountComponent';
import COntactUsCOmponent from '../components/COntactUsCOmponent';
import { ScrollView } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withSequence,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';

const HomeScreen = () => {
  const translateY = useSharedValue(-800); // hidden above screen

  useEffect(() => {
    translateY.value = withDelay(
      500, // wait for page to render
      withSequence(
        // 1. drop down fast — like a ball falling
        withTiming(30, {
          duration: 500,
          easing: Easing.in(Easing.quad),
        }),
        // 2. bounce up a little
        withTiming(-40, {
          duration: 200,
          easing: Easing.out(Easing.quad),
        }),
        // 3. drop back down
        withTiming(15, {
          duration: 180,
          easing: Easing.in(Easing.quad),
        }),
        // 4. small bounce up
        withTiming(-18, {
          duration: 150,
          easing: Easing.out(Easing.quad),
        }),
        // 5. settle to final position
        withSpring(0, {
          damping: 15,
          stiffness: 180,
        }),
      ),
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <LinearGradient
          colors={[homeGradientOne, homeGradienttwo]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.container}
        >
          <Header />
          <View style={{ position: 'relative', bottom: -35, zIndex: 2 }}>
            <TransictionComponent />
          </View>
          <PaymentListComponent />
          <PromoDiscountComponent />
        </LinearGradient>
      </ScrollView>

      <Animated.View style={[styles.contactButton, animatedStyle]}>
        <COntactUsCOmponent />
      </Animated.View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contactButton: {
    position: 'absolute',
    bottom: 80,  
    right: 15,
    zIndex: 3,
  },
});