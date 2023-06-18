import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import InicioUsuario from '../screens/InicioUsuario';
import InicioConductor from '../screens/InicioConductor';
import InicioAdministrador from '../screens/InicioAdministrador';
import LoginScreen from '../screens/Login';
import { StatusBar } from 'react-native';
import { theme } from '../core/theme';

const Stack = createNativeStackNavigator();



const MainStack = () => {
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null);


    return (
        <NavigationContainer>

            <StatusBar 
                backgroundColor= {theme.colors.primary}
            />

            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                // initialParams={{ setUserToken }}
                />
                <Stack.Screen
                    name="Usuario"
                    component={InicioUsuario}
                // initialParams={{ setUserToken }}
                />
                <Stack.Screen
                    name="Conductor"
                    component={InicioConductor}
                />
                <Stack.Screen
                    name="Admin"
                    component={InicioAdministrador}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack