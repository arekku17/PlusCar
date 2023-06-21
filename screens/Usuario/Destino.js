import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { Text } from 'react-native';


const Destino = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    obtenerUbicacion();
  }, []);

  const obtenerUbicacion = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.log('No se otorgaron los permisos de ubicación');
        return;
      }

      const ubicacion = await Location.getCurrentPositionAsync({});
      setLocation(ubicacion.coords);
    } catch (error) {
      console.log('Error al obtener la ubicación:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Destino</Text>
      </View>
      {location && (
        <MapView style={styles.map} initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          <Marker coordinate={location} />
          <Circle center={location} radius={50} fillColor="rgba(0, 0, 255, 0.3)" strokeColor="blue" />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },
});

export default Destino;
