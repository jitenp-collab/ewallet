import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DownArrowSVG } from '../assets/svg/SVGs';
import { BarChart } from 'react-native-gifted-charts';
import { barData } from '../const/ConstData';
import { primaryColor } from '../util/theme/theme';
import { ExpenceGridComponent } from './ExpenceGridComponent';
import Animated from 'react-native-reanimated';

import { useCountAnimation } from '../util/useCountAnimation';

const GraphComponent = () => {
  const [chartData, setChartData] = useState<any>([]);
  const animationAmount = useCountAnimation(21350.54);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartData(barData);
      console.log('data Showed');
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.static}>Statistic</Text>
      <Text style={styles.totalText}>Total Balance</Text>
      <Animated.Text style={styles.amount}>{animationAmount}</Animated.Text>
      <View style={styles.box1}>
        <Text style={styles.overview}>Overview</Text>
        <TouchableOpacity style={styles.box2}>
          <Text style={styles.month}>Month</Text>
          <DownArrowSVG />
        </TouchableOpacity>
      </View>
      <View style={styles.chartBox}>
        <BarChart
          data={chartData}
          barWidth={11.5}
          endSpacing={0}
          spacing={20}
          roundedTop
          roundedBottom
          xAxisThickness={0}
          yAxisThickness={0}
          yAxisTextStyle={{ color: 'gray' }}
          noOfSections={5}
          maxValue={50}
          isAnimated
          animationDuration={2500}
          rulesColor="#b9bdc5"
        />
      </View>
      <View style={styles.box3}>
        <View style={styles.IncomeBox}></View>
        <Text style={styles.text}>Income</Text>
        <View style={styles.ExpenceBox}></View>
        <Text style={styles.text}>Expense</Text>
      </View>

      <ExpenceGridComponent />
    </View>
  );
};

export default GraphComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: bgPrimaryColor,
    flex: 1,
    paddingHorizontal: 15,
  },

  static: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 2,
    marginBottom: 25,
  },

  totalText: {
    color: '#969393',
  },

  amount: {
    fontSize: 30,
    fontWeight: '700',
  },

  box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
  },

  box2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderColor: '#c9c8c8',
    backgroundColor: '#faf9f9',
  },

  overview: {
    fontSize: 20,
    fontWeight: '700',
  },
  month: {
    fontWeight: '600',
    marginEnd: 5,
  },
  chartBox: {
    // marginHorizontal: 10,
  },
  box3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 52,
    marginTop: 15,
    marginBottom: 20,
  },

  IncomeBox: {
    height: 12,
    width: 12,
    backgroundColor: '#000',
    borderRadius: 3,
    marginEnd: 3,
  },

  ExpenceBox: {
    height: 12,
    width: 12,
    backgroundColor: primaryColor,
    borderRadius: 3,
    marginEnd: 3,
  },

  text: {
    color: '#969393',
    marginEnd: 20,
  },
});
