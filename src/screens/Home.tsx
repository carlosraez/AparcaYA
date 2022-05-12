import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aparca YA</Text>
      <Text style={styles.subtitleText}>
        la app que pone en contacto gente que busca aparcar, y gente que conoce
        o tiene un aparcamiento
      </Text>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('FormAvaiblePark')}>
        <Text style={styles.text}>Busco Aparcamiento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Ofrezco Aparcamiento</Text>
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
  option: {
    borderColor: 'green',
    borderWidth: 3,
    borderRadius: 20,
    marginVertical: 10,
    width: 250,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});
