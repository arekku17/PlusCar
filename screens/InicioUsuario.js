import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Combis, Destino, Ubicacion, Viajes, Yo } from './Usuario';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar, faLocationDot, faRoad, faUser, faVanShuttle } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const InicioUsuario = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: { padding: 10 },
        tabBarStyle: {height: 70}
      }}
    >
      <Tab.Screen name="Ubicacion" component={Ubicacion} options={{
          tabBarLabel: 'Ubicacion',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faLocationDot} color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Destino" component={Destino} options={{
          tabBarLabel: 'Destino',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faCar} color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Combis" component={Combis} options={{
          tabBarLabel: 'Combis',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faVanShuttle} color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Viajes" component={Viajes} options={{
          tabBarLabel: 'Viajes',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faRoad} color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Yo" component={Yo} options={{
          tabBarLabel: 'Yo',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  )
}

export default InicioUsuario

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});