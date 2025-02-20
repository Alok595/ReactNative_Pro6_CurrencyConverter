import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import type {PropsWithChildren} from 'react';
type CurrencyBtnProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyBtn = (props: CurrencyBtnProps): JSX.Element => {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

export default CurrencyBtn;

const styles = StyleSheet.create({
  btnContainer: {
   
   
    alignItems: 'center',
    
    
  },
  flag: {
    fontSize: 30,
    color: 'green',
    
  },
  name: {
    fontSize: 15,
    color: 'black',
    
  },
});
