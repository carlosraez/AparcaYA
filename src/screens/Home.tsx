import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Busco Aparcamiento</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Ofrezco Aparcamiento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
