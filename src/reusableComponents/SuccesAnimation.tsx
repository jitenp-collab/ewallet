import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSpring,
  withRepeat,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

const SuccesAnimation = () => {
  const outerScale = useSharedValue(0);
  const middleScale = useSharedValue(0);
  const innerScale = useSharedValue(0);
  const checkOpacity = useSharedValue(0);
  const wave1Scale = useSharedValue(1);
  const wave1Opacity = useSharedValue(0.6);
  const wave2Scale = useSharedValue(1);
  const wave2Opacity = useSharedValue(0.6);

  useEffect(() => {
    // --- entry ---
    outerScale.value = withSpring(1, { damping: 12, stiffness: 100 });
    middleScale.value = withDelay(150, withSpring(1, { damping: 12, stiffness: 100 }));
    innerScale.value  = withDelay(300, withSpring(1, { damping: 12, stiffness: 100 }));
    checkOpacity.value = withDelay(500, withTiming(1, { duration: 300 }));

    // --- wave 1 ---
    wave1Scale.value = withDelay(700,
      withRepeat(
        withSequence(
          withTiming(1.8, { duration: 1200, easing: Easing.out(Easing.ease) }),
          withTiming(1,   { duration: 0 }),
        ), -1, false,
      ),
    );
    wave1Opacity.value = withDelay(700,
      withRepeat(
        withSequence(
          withTiming(0, { duration: 1200, easing: Easing.out(Easing.ease) }),
          withTiming(0.6, { duration: 0 }),
        ), -1, false,
      ),
    );

    // --- wave 2 (staggered 600ms) ---
    wave2Scale.value = withDelay(1300,
      withRepeat(
        withSequence(
          withTiming(1.8, { duration: 1200, easing: Easing.out(Easing.ease) }),
          withTiming(1,   { duration: 0 }),
        ), -1, false,
      ),
    );
    wave2Opacity.value = withDelay(1300,
      withRepeat(
        withSequence(
          withTiming(0, { duration: 1200, easing: Easing.out(Easing.ease) }),
          withTiming(0.6, { duration: 0 }),
        ), -1, false,
      ),
    );
  }, []);

  const outerStyle  = useAnimatedStyle(() => ({ transform: [{ scale: outerScale.value  }] }));
  const middleStyle = useAnimatedStyle(() => ({ transform: [{ scale: middleScale.value }] }));
  const innerStyle  = useAnimatedStyle(() => ({ transform: [{ scale: innerScale.value  }] }));
  const checkStyle  = useAnimatedStyle(() => ({ opacity: checkOpacity.value }));

  const wave1Style = useAnimatedStyle(() => ({
    transform: [{ scale: wave1Scale.value }],
    opacity: wave1Opacity.value,
  }));
  const wave2Style = useAnimatedStyle(() => ({
    transform: [{ scale: wave2Scale.value }],
    opacity: wave2Opacity.value,
  }));

  return (
    <View style={styles.container}>

      <View style={styles.waveWrapper}>
        <Animated.View style={[styles.wave, wave1Style]} />
        <Animated.View style={[styles.wave, wave2Style]} />

        <Animated.View style={[styles.outer, outerStyle]}>
          <Animated.View style={[styles.middle, middleStyle]}>
            <Animated.View style={[styles.inner, innerStyle]}>
              <Animated.View style={checkStyle}>
                <Svg width={50} height={50} viewBox="0 0 50 50">
                  <Path
                    d="M10 25 L20 35 L40 15"
                    stroke="#fff"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </Svg>
              </Animated.View>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </View>

    </View>
  );
};

export default SuccesAnimation;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
  },

 
  waveWrapper: {
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',       
  },

  wave: {
    position: 'absolute',       // ← stacked on same center point
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#3cb96a',
  },

  outer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#1a3a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#3cb96a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2e8f52',
    alignItems: 'center',
    justifyContent: 'center',
  },
});