import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Background from '../components/Background';

const InicioUsuario = ({ navigation }) => {
  return (
    <Background>
      <Text>Usuario</Text>
    </Background>
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