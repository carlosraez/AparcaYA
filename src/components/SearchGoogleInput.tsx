import React, { useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { apiGoolge } from '../config/api';

export const SearchGoogleInput = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('Some Text');
  }, []);

  return (
    <View>
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
            width: 270,
          },
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: apiGoolge,
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
