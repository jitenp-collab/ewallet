import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { gradientOne, gradienttwo } from '../util/theme/theme';

import { useSelector } from 'react-redux';
import { StoreState } from '../redux/store/store';

const StatusBarBackground = ({
  colors = [gradientOne, gradienttwo],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
}) => {
  const insets = useSafeAreaInsets();
  const [isgradient, setisgradient] = useState(false);
  const { routeName }: any = useSelector((state: StoreState) => state);


  useEffect(() => {
    if (routeName.routeNmae === 'Home' || routeName.routeNmae === 'Recipt') {
      setisgradient(true);
    } else {
      setisgradient(false);
    }
  }, [routeName]);

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
       barStyle={isgradient ? 'light-content' : 'dark-content'}
      />
      <LinearGradient
        colors={isgradient ? colors : ['#fff', '#fff']}
        start={start}
        end={end}
        style={{ height: insets.top }}
      />
    </>
  );
};

export default StatusBarBackground;