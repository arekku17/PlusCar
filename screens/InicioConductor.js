import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Background from '../components/Background';

const InicioConductor = ({ navigation }) => {
  return (
        <Background>
          <Text>Conductor</Text>
        </Background>
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