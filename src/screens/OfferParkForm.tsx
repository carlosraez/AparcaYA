import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const OfferParkForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ofrece Plaza de Parking</Text>
      <View style={styles.formDataPay}>
        <Text style={styles.titleForm}>Por favor entra en tu cuenta</Text>
        <TextInput style={styles.input} placeholder="email@emai.com" />
        <TextInput style={styles.input} placeholder="password" />
        <Text style={styles.textPriceDescription}>
          Por favor introduzca el precio que quiere cobrar reservar por el
          aparcamiento
        </Text>
        <TextInput
          style={styles.inputPrice}
          value={'1€'}
          placeholder="1€"
          keyboardType="numeric"
        />
        <Text style={styles.textPriceWinUser}>
          Ganarías un total de <Text style={styles.priceWin}>0,80€</Text> por
          esta reserva si confirmas.
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonSteps}>
        <Text style={styles.textUploadPhoto}>Subir Fotos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSteps}>
        <Text style={styles.textUploadPhoto}>Confirma tu ubicacion</Text>
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
    width: 300,
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
  buttonSteps: {
    backgroundColor: '#08a600',
    padding: 10,
    marginTop: 100,
  },
  textUploadPhoto: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  textPriceDescription: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    width: 300,
    top: 20,
  },
  inputPrice: {
    borderTopColor: 'white',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textPriceWinUser: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
  priceWin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#08a600',
  },
  map: {
    flex: 1,
  },
});
