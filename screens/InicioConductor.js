import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar, faUser } from '@fortawesome/free-solid-svg-icons';
import { Servicios, Yo } from './Conductor';

const Tab = createBottomTabNavigator();

const InicioConductor = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: { padding: 10 },
        tabBarStyle: {height: 70}
      }}
    >
      <Tab.Screen name="Servicios" component={Servicios} options={{
          tabBarLabel: 'Servicios',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faCar} color={color} size={size} />
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

export default InicioConductor

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});