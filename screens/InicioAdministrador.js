import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar, faUser, faVanShuttle } from '@fortawesome/free-solid-svg-icons';
import { Combis, Taxistas, Yo } from './Administrador';

const Tab = createBottomTabNavigator();

const InicioUsuario = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: { padding: 10 },
        tabBarStyle: {height: 70},
        headerShown: false
      }}
    >
      <Tab.Screen name="Taxistas" component={Taxistas} options={{
          tabBarLabel: 'Taxistas',
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