import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Cards } from '../const/ConstData';

const { width } = Dimensions.get('window');

const CARD_WIDTH = width * 0.85;
const SPACING = 20;

const CreditCard = ({ item, index, scrollX }: any) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * (CARD_WIDTH + SPACING),
      index * (CARD_WIDTH + SPACING),
      (index + 1) * (CARD_WIDTH + SPACING),
    ];

    const scale = interpolate(scrollX.value, inputRange, [0.9, 1, 0.9]);

    const rotate = interpolate(scrollX.value, inputRange, [-8, 0, 8]);

    return {
      transform: [{ scale }, { rotateZ: `${rotate}deg` }],
    };
  });

  return (
    <Animated.View style={[styles.cardWrapper, animatedStyle]}>
      <LinearGradient colors={item.colors} style={styles.card}>
        {/* Decorative circles */}
        <View style={styles.circleOne} />
        <View style={styles.circleTwo} />

        <Text style={styles.bankName}>PREMIUM CARD</Text>

        <Text style={styles.cardNumber}>{item.number}</Text>

        <Text style={styles.slogan}>{item.slogan}</Text>

        <View style={styles.bottomRow}>
          <View>
            <Text style={styles.label}>CARD HOLDER</Text>
            <Text style={styles.value}>{item.holder}</Text>
          </View>

          <Text style={styles.master}>VISA</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const CreditCards = () => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled={true}
      snapToInterval={CARD_WIDTH + SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: 16,
        paddingRight: 0,
      }}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {Cards.map((item, index) => (
        <CreditCard key={item.id} item={item} index={index} scrollX={scrollX} />
      ))}
    </Animated.ScrollView>
  );
};

export default CreditCards;

const styles = StyleSheet.create({
  cardWrapper: {
    width: CARD_WIDTH,
    marginRight: SPACING,
  },

  card: {
    height: 220,
    borderRadius: 28,
    padding: 24,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },

  bankName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },

  cardNumber: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 15,
  },

  slogan: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
    fontWeight: '600',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  label: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 11,
  },

  value: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4,
  },

  master: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
  },

  circleOne: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255,255,255,0.08)',
    top: -60,
    right: -50,
  },

  circleTwo: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.08)',
    bottom: -30,
    left: -20,
  },
});
