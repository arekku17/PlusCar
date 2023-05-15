import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Logo() {
  return <View style={styles.container}>
    <Image source={require('../assets/logo_delfines.png')} style={styles.imageDelfines} />
    <Image source={require('../assets/logo_taxi.png')} style={styles.imageTaxi} />
  </View>
  
  
}

const styles = StyleSheet.create({
  imageDelfines: {
    width: 150,
    height: 80,
    marginBottom: 8
  },
  imageTaxi: {
    width: 150,
    height: 100,
    marginBottom: 8
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  }
})
