import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Background from '../../components/Background';

const Viajes = () => {
  return (
    <Background>
      <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 10 }}>
        {/* Encabezado */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Viajes</Text>
        </View>
        
        {/* Botones */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#2b47be',
              borderRadius: 10,
              width: 170,
              marginRight: 10,
              padding: 10,
            }}
            onPress={() => console.log('Taxis button pressed')}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Taxis</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#e6f0fb',
              borderRadius: 10,
              width: 170,
              padding: 10,
            }}
            onPress={() => console.log('Combi button pressed')}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Combi</Text>
          </TouchableOpacity>
        </View>
        
        {/* viajes 1 */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 10 }}>
            <Image
              source={require('../../assets/foto-perfil.jpg')}
              style={{ width: 230, height: 150, marginRight: 10 }}
            />
            <View>
              <Text style={{ fontWeight: 'bold' }}>En espera</Text>
              <Text>ITESCHAM</Text>
              <Text>20 abril</Text>
              <Text>$40.00 MXN</Text>
            </View>
          </View>
        </View>
        
        {/* viajes 2 */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 10 }}>
            <Image
              source={require('../../assets/logo.png')}
              style={{ width: 230, height: 150, marginRight: 10 }}
            />
            <View>
              <Text style={{ fontWeight: 'bold' }}>En espera</Text>
              <Text>ITESCHAM</Text>
              <Text>20 abril</Text>
              <Text>$40.00 MXN</Text>
            </View>
          </View>
        </View>
        
        {/* viajes 3 */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 10 }}>
            <Image
              source={require('../../assets/logo.png')}
              style={{ width: 230, height: 150, marginRight: 10 }}
            />
            <View>
              <Text style={{ fontWeight: 'bold' }}>En espera</Text>
              <Text>ITESCHAM</Text>
              <Text>20 abril</Text>
              <Text>$40.00 MXN</Text>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Viajes;

