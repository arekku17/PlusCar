import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Background from '../components/Background';

const InicioAdministrador = ({ navigation }) => {
  return (
    <Background>
      <Text>Administrador</Text>
    </Background>
  )
}

export default InicioAdministrador

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});