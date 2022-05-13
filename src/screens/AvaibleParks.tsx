import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Parking } from '../components/Parking';

export const AvaibleParks = () => {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        numColumns={1}
        ListHeaderComponent={<Text>Parking Disponible</Text>}
        renderItem={() => <Parking />}
        onEndReachedThreshold={0.4}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};
