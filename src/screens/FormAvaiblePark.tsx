import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const FormAvaiblePark = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿A donde vás?</Text>
      <Text style={styles.subtitleText}>
        Todo va a estar registrado por Google Maps
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitleText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    maxWidth: 300,
  },
});
