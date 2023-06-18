import React from 'react'
import { Image, Text, View } from 'react-native'

const TaxiViaje = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 10 }}>
                <Image
                    source={require('../assets/foto-perfil.jpg')}
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
    )
}

export default TaxiViaje