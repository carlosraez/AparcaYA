import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

import { apiGoogle } from '../config/apiGoogle';

export const SearchGoogleInput = () => {
  const [destination, setDestination] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    if (destination !== '') {
      navigation.navigate('AvaibleParks');
    }
  }, [destination, navigation]);

  return (
    <View style={{ height: 200 }}>
      <GooglePlacesAutocomplete
        placeholder="Escribe a la zona donde quieres ir"
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        styles={{
          textInputContainer: {
            top: 20,
            backgroundColor: 'grey',
            width: 300,
          },
          textInput: {
            height: 50,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        onPress={data => {
          setDestination(data.place_id);
        }}
        query={{
          key: apiGoogle,
          language: 'es',
          rankby: 'distance',
          types: 'address',
        }}
        currentLocation={true}
        currentLocationLabel="Current location"
      />
    </View>
  );
};
