import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Parking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Precio: 1€</Text>
      </View>
      <View style={styles.container}>
        <Text>Aparca YA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  profile: {
    fontSize: 20,
  },
});
