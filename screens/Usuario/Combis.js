import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Background from '../../components/Background';

const Combis = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedSeat, setSelectedSeat] = useState('');

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
  };

  const handleSeatChange = (seat) => {
    setSelectedSeat(seat);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Solicitar Combi</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.rectangle}>
          <Text style={styles.rectangleText}>Fecha</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.rectangleText}>Horarios</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.rectangleText}>Ruta</Text>
          <Picker
            selectedValue={selectedRoute}
            onValueChange={handleRouteChange}
            style={styles.picker}
          >
            <Picker.Item label="Campeche" value="campeche" />
            <Picker.Item label="Champotón" value="champoton" />
            <Picker.Item label="Escarcega" value="escarcega" />
            <Picker.Item label="Seiba Playa" value="seiba_playa" />
          </Picker>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.rectangleText}>Asientos</Text>
          <Picker
            selectedValue={selectedSeat}
            onValueChange={handleSeatChange}
            style={styles.picker}
          >
            {[...Array(22).keys()].map((seat) => (
              <Picker.Item key={seat + 1} label={`${seat + 1}`} value={`${seat + 1}`} />
            ))}
          </Picker>
        </View>
        <View style={styles.blueRectangle}>
          <Text style={styles.smallText}>Tarifa</Text>
          <Text style={styles.largeText}>50 MXN</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  content: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  },
  rectangle: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  rectangleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  blueRectangle: {
    backgroundColor: 'skyblue',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  smallText: {
    fontSize: 12,
    color: 'white',
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  picker: {
    color: 'black',
  },
});

export default Combis;
