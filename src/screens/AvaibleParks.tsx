import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Parking } from '../components/Parking';

export const AvaibleParks = ({ navigation }: any) => {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        numColumns={1}
        ListHeaderComponent={
          <Text style={styles.title}>Parking Disponible</Text>
        }
        renderItem={() => <Parking navigation={navigation} />}
        onEndReachedThreshold={0.4}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    top: 10,
  },
});
