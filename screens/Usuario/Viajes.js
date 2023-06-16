import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Background from '../../components/Background';

const Viajes = () => {
  return (
    <Background>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', paddingTop: 10 }}>
        {/* Encabezado */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Viajes</Text>
        </View>

        {/* Botones */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          {/* Taxis button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#e6f0fb',
              borderRadius: 10,
              width: 170,
              marginRight: 10,
              padding: 10,
            }}
            onPress={() => console.log('Taxis button pressed')}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Taxis</Text>
          </TouchableOpacity>
          {/* Combi button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#2b47be',
              borderRadius: 10,
              width: 170,
              padding: 10,
            }}
            onPress={() => console.log('Combi button pressed')}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Combi</Text>
          </TouchableOpacity>
        </View>

        {/* Rectángulo con fecha */}
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: '#2b47be',
              borderRadius: 30,
              width: 300,
              padding: 15,
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>20 de Abril de 2023</Text>
          </View>
        </View>

        {/* fondo */}
        <View
          style={{
            backgroundColor: '#f7f8fe',
            borderRadius: 10,
            width: 360,
            padding: 10,
            marginTop: -10,
            marginBottom: 20,
            zIndex: -1,
          }}
        >
          {/* Título e imagen */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginRight: 40 }}>
              CHAMPOTON
            </Text>
            <Image
              source={require('../../assets/bus.png')}
              style={{ width: 50, height: 50, marginRight: 30 }}
            />
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>CAMPECHE</Text>
          </View>

          {/* Texto a la izquierda del cuadro blanco */}
          <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
            <View style={{ width: 300 }}>
              {/* No. De Servicio */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ color: '#2c2c2d', fontWeight: 'bold' }}>No. De Servicio:</Text>
                <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}>AA-00001</Text>
              </View>

              {/* No. De Combi */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ color: '#2c2c2d', fontWeight: 'bold' }}>No. De Combi:</Text>
                <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 40 }}>001</Text>
              </View>

              {/* HORA */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ color: '#2c2c2d', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Hora:</Text>
                <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 72 }}>10:00 AM</Text>
              </View>

              {/* Lugares */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ color: '#2c2c2d', fontWeight: 'bold', marginRight: 20 }}>Lugares:</Text>
              </View>
              <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 18 }}>01</Text>
            </View>
          </View>

          {/* Cuadro blanco */}
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'flex-start',
              borderRadius: 15,
              marginVertical: -115,
              marginLeft: 210,
              width: 130,
              padding: 10,
            }}
          >
            <Text style={{ color: 'black', textAlign: 'center' }}>Tarifa</Text>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>50.00 MXN</Text>
          </View>

          {/* Botón Imprimir Recibo */}
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              marginBottom: 10,
              marginVertical: 150,
              width: 170,
              padding: 10,
              justifyContent: 'center',
              backgroundColor: '#e6f0fb',
            }}
            onPress={() => console.log('Imprimir Recibo button pressed')}
          >
            <Text style={{ color: 'black', marginRight: 10, textAlign: 'center' }}>Imprimir Recibo</Text>
            <Image
              source={require('../../assets/bdescarga.png')}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>

        {/* Segundo contenedor */}
        {/* Rectángulo con fecha */}
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              backgroundColor: '#2b47be',
              borderRadius: 30,
              width: 300,
              padding: 15,
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>21 de Abril de 2023</Text>
          </View>
        </View>

        {/* fondo */}
        <View
          style={{
            backgroundColor: '#f7f8fe',
            borderRadius: 10,
            width: 360,
            padding: 10,
            marginTop: -10,
            marginBottom: 20,
            zIndex: -1,
          }}
        >
          {/* Título e imagen */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginRight: 40 }}>
              CHAMPOTON
            </Text>
            <Image
              source={require('../../assets/bus.png')}
              style={{ width: 50, height: 50, marginRight: 30 }}
            />
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>CAMPECHE</Text>
          </View>

          {/* Texto a la izquierda del cuadro blanco */}
          <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
            <View style={{ width: 300 }}>
              {/* No. De Servicio */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ color: '#2c2c2d', fontWeight: 'bold' }}>No. De Servicio:</Text>
                <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}>AA-00001</Text>
              </View>

              {/* No. De Combi */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ color: '#2c2c2d', fontWeight: 'bold' }}>No. De Combi:</Text>
                <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 40 }}>001</Text>
              </View>

              {/* HORA */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ color: '#2c2c2d', fontSize: 15, fontWeight: 'bold', extAlign: 'center' }}>Hora:</Text>
                <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 72 }}>10:00 AM</Text>
              </View>

              {/* Lugares */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ color: '#2c2c2d', fontWeight: 'bold', marginRight: 20 }}>Lugares:</Text>
              </View>
              <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 18 }}>01</Text>
            </View>
          </View>

          {/* Cuadro blanco */}
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'flex-start',
              borderRadius: 15,
              marginVertical: -115,
              marginLeft: 210,
              width: 130,
              padding: 10,
            }}
          >
            <Text style={{ color: 'black', textAlign: 'center' }}>Tarifa</Text>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>50.00 MXN</Text>
          </View>

          {/* Botón Imprimir Recibo */}
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              marginBottom: 10,
              marginVertical: 150,
              width: 170,
              padding: 10,
              justifyContent: 'center',
              backgroundColor: '#e6f0fb',
            }}
            onPress={() => console.log('Imprimir Recibo button pressed')}
          >
            <Text style={{ color: 'black', marginRight: 10, textAlign: 'center' }}>Imprimir Recibo</Text>
            <Image
              source={require('../../assets/bdescarga.png')}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Background>
  );
};

export default Viajes;
