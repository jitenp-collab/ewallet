import { Pressable, StyleSheet, View, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Svg, { Path, Defs, Filter, FeDropShadow } from 'react-native-svg';

import {
  HomeSVG,
  AnaliticsSVG,
  ReciptSVG,
  ProfileSVG,
} from '../assets/svg/SVGs';
import {
  bgPrimaryColor,
  primaryColor,
  seconderyColor,
} from '../util/theme/theme';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const SCREEN_WIDTH = Dimensions.get('window').width;
const BAR_HEIGHT = 70;
const ICON_SIZE = 28;
const TABS = [
  {
    name: 'Home',
    isStack: false,
    renderIcon: (color: string) => (
      <HomeSVG width={ICON_SIZE} height={ICON_SIZE} color={color} />
    ),
  },
  {
    name: 'Graph',
    isStack: false,
    renderIcon: (color: string) => (
      <AnaliticsSVG width={ICON_SIZE} height={ICON_SIZE} color={color} />
    ),
  },
  {
    name: 'Recipt',
    isStack: true, 
    renderIcon: (color: string) => (
      <ReciptSVG width={ICON_SIZE} height={ICON_SIZE} color={color} />
    ),
  },
  {
    name: 'Profile',
    isStack: false,
    renderIcon: (color: string) => (
      <ProfileSVG width={ICON_SIZE} height={ICON_SIZE} color={color} />
    ),
  },
];
const TAB_COUNT = TABS.length;
const TabWidth = SCREEN_WIDTH / TAB_COUNT;

const NOTCH_WIDTH = TabWidth * 1;
const NOTCH_DEPTH = 34;
const CURVE_SPREAD = 18;

const SOFT_SPRING = {
  damping: 20,
  stiffness: 120,
  mass: 1,
};

const getBarPath = (center: number) => {
  'worklet';
  const w = SCREEN_WIDTH;
  const h = BAR_HEIGHT;
  const half = NOTCH_WIDTH / 2;

  const left = center - half;
  const right = center + half;

  return `
    M0,0
    L${left},0
    C${left + CURVE_SPREAD},0 ${
    left + CURVE_SPREAD
  },${NOTCH_DEPTH} ${center},${NOTCH_DEPTH}
    C${right - CURVE_SPREAD},${NOTCH_DEPTH} ${right - CURVE_SPREAD},0 ${right},0
    L${w},0
    L${w},${h}
    L0,${h}
    Z
  `;
};

const BottomTabComponent = ({ state, navigation }: any) => {
  const curveCenter = useSharedValue(TabWidth * 0.5);
  const [activeTabIndex, setActiveTabIndex] = useState(0); 
  useEffect(() => {
    curveCenter.value = withSpring(
      TabWidth * activeTabIndex + TabWidth * 0.5,
      SOFT_SPRING,
    );
  }, [activeTabIndex]);

  useEffect(() => {

    const tabRouteToTabsIndex: Record<string, number> = {
      Home: 0,
      Graph: 1,
      Profile: 3,
    };
    const currentRouteName = state.routes[state.index].name;
    if (tabRouteToTabsIndex[currentRouteName] !== undefined) {
      setActiveTabIndex(tabRouteToTabsIndex[currentRouteName]);
    }
  }, [state.index]);

  const animatedProps = useAnimatedProps(() => ({
    d: getBarPath(curveCenter.value),
  }));

  const handlePress = (i: number) => {
    const tab = TABS[i];
    if (tab.isStack) {
      navigation.navigate(tab.name);
    } else {
      setActiveTabIndex(i);
      navigation.navigate(tab.name);
    }
  };

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <Svg
        width={SCREEN_WIDTH}
        height={BAR_HEIGHT + 16}
        style={[StyleSheet.absoluteFill, { top: 0 }]}
        pointerEvents="none"
      >
        <Defs>
          <Filter id="shadow" x="-10%" y="-30%" width="120%" height="200%">
            <FeDropShadow
              dx="0"
              dy="-4"
              stdDeviation="6"
              floodColor="#000"
              floodOpacity="0.15"
            />
          </Filter>
        </Defs>
        <AnimatedPath
          animatedProps={animatedProps}
          fill={bgPrimaryColor}
          filter="url(#shadow)"
        />
      </Svg>

      <View style={styles.tabsRow}>
        {TABS.map((tabConfig, i) => {
          const isActive = activeTabIndex === i; 
          return (
            <Pressable
              key={tabConfig.name}
              style={[styles.tab, isActive && styles.tabLifted]}
              android_ripple={{ color: 'transparent' }}
              onPress={() => handlePress(i)}
            >
              {tabConfig.renderIcon(isActive ? primaryColor : seconderyColor)}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTabComponent;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: BAR_HEIGHT,
    width: SCREEN_WIDTH,
  },
  tabsRow: {
    flexDirection: 'row',
    height: BAR_HEIGHT,
    width: '100%',
  },
  tab: {
    width: TabWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // iconLifted: {
  //   transform: [{ translateY: -30 }],
  // },
  tabLifted: {
    transform: [{ translateY: -30 }],
  },
});
