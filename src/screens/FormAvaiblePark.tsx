import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SearchGoogleInput } from '../components/SearchGoogleInput';

export const FormAvaiblePark = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿A donde vás?</Text>
      <Text style={styles.subtitleText}>
        Todo va a estar registrado por Google Maps
      </Text>
      <SearchGoogleInput />
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
