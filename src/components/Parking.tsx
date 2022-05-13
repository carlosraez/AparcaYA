import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export const Parking = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/carlos.png')} style={styles.profile} />
      <Text style={styles.rating}>
        <Text style={styles.ratingNumber}>5/5*</Text>
      </Text>
      <Icon style={styles.icon} name="camera" size={25} color="black" />
      <Text style={styles.distance}>
        5<Text style={styles.description}>km</Text>
      </Text>
      <Text style={styles.distance}>
        1<Text style={styles.description}>€</Text>
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ConfirmationParkingBooking')}
          style={styles.bookingAction}>
          <Text style={styles.bookingActionText}>Aparca YA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 30,
    flex: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderBottomWidth: 5,
    borderTopWidth: 5,
    marginLeft: 3,
    marginRight: 3,
  },
  profile: {
    marginLeft: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  rating: {
    fontSize: 10,
    marginLeft: 1,
  },
  ratingNumber: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
  },
  distance: {
    fontSize: 35,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
  },
  bookingAction: {
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 10,
    height: 30,
    width: 100,
    backgroundColor: '#08a600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookingActionText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
