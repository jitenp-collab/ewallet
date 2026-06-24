import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ExpenceCard } from '../const/ConstData';
import { bgPrimaryColor } from '../util/theme/theme';


export const ExpenceGridComponent = () => {

    
  const renderItem = ({ item }: any) => {
    const Icon = item.Icon;

    return (
      <View style={[styles.card, { backgroundColor: item.color }]}>
        <View style={[styles.iconBox]}>
          <Icon width={23} height={23} />
        </View>
        <View style={styles.bigIcon}>
          <Icon width={90} height={90} />
        </View>

        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={ExpenceCard}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
        columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  card: {
    flex: 1,
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  iconBox: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginTop: 10,
    marginEnd: 100,
    backgroundColor: bgPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },

  label: {
    fontSize: 14,
    color: '#f3ebebad',
    marginEnd: 80,
  },

  amount: {
    fontSize: 20,
    color: '#ffffff',
    marginTop: 2,
    marginEnd: 30,
    fontWeight: '700',
  },
  bigIcon: {
    backgroundColor: '#ffffff3d',
    width: 180,
    height: 180,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -47,
    bottom: -30,
  },
});