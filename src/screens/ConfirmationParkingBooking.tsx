import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ConfirmationParkingBooking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmación de Reserva de Aparcamiento</Text>
      <View style={styles.formDataPay}>
        <Text style={styles.titleForm}>Por Favor Introduzca sus datos:</Text>
        <TextInput style={styles.input} placeholder="Matrícula" />
        <TextInput style={styles.input} placeholder="Modelo de Coche" />
        <TextInput style={styles.input} placeholder="Color" />
        <TextInput style={styles.input} placeholder="Teléfono" />
        <TextInput style={styles.input} placeholder="Nombre" />
        <Text style={styles.textPayDescription}>
          Le recordamos que el dinero se quedará suspendido hasta que llegue
          usted a aparcar
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonPay}>
        <Text style={styles.textPay}>
          Pagar ahora: <Text style={styles.price}>3€</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 10,
    width: 250,
  },
  formDataPay: {
    top: 40,
    width: 250,
    flexDirection: 'column',
  },
  price: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  titleForm: {
    fontSize: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonPay: {
    backgroundColor: '#08a600',
    padding: 10,
    marginTop: 100,
  },
  textPay: {
    fontSize: 20,
    color: 'white',
  },
  textPayDescription: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
});
