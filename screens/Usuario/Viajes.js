import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Background from '../../components/Background';
import CombiViaje from '../../components/CombiViaje';
import TaxiViaje from '../../components/TaxiViaje';

const Viajes = () => {

  const [opcion, setOpcion] = useState("taxis");

  return (
    <Background>

      {/* Encabezado */}
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Viajes</Text>
      </View>

      {/* Botones */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10, width: "90%" }}>
        {/* Taxis button */}
        <TouchableOpacity
          style={opcion === "taxis" ? styles.selected : styles.noSelected}
          onPress={() => setOpcion("taxis")}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Taxis</Text>
        </TouchableOpacity>
        {/* Combi button */}
        <TouchableOpacity
          style={opcion === "combis" ? styles.selected : styles.noSelected}
          onPress={() => setOpcion("combis")}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Combi</Text>
        </TouchableOpacity>
      </View>



      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', paddingTop: 10 }}>

        {
          opcion === "combis" ?
            <>
              <CombiViaje />
              <CombiViaje />
              <CombiViaje />
              <CombiViaje />
              <CombiViaje />
              <CombiViaje />
            </>
            :
            <>
              <TaxiViaje/>
            </>
        }


      </ScrollView>


    </Background>
  );
};

const styles = StyleSheet.create({
  selected: {
    backgroundColor: '#2b47be',
    borderRadius: 10,
    width: "48%",
    padding: 10,
    color: 'white'
  },
  noSelected: {
    backgroundColor: '#c2bfe4',
    borderRadius: 10,
    width: "48%",
    padding: 10,
    color: 'black'
  }
});


export default Viajes;
