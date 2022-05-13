import React, { useState } from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { apiGoogle } from '../config/apiGoogle';

export const SearchGoogleInput = () => {
  const [destination, setDestination] = useState('');

  return (
    <View style={{ height: 200 }}>
      <GooglePlacesAutocomplete
        placeholder="Destino Aproximado"
        minLength={2}
        fetchDetails={true}
        styles={{
          textInputContainer: {
            width: 300,
            borderColor: 'green',
            borderWidth: 3,
            borderRadius: 10,
            marginTop: 20,
          },
          textInput: {
            fontWeight: 'bold',
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
