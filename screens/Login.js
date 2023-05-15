import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [tipo, setTipo] = useState('Usuario');

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        navigation.reset({
            index: 0,
            routes: [{ name: tipo }],
        })
    }

    return (
        <Background>
            <Logo />
            <Header>Bienvenido.</Header>

            <View style={styles.buttons}>
                <Button mode={tipo === "Usuario" ? "contained" : "outlined"} onPress={() => setTipo("Usuario")} style={{ flex: 1, marginRight: 10 }} labelStyle={{ fontSize: 13 }}>
                    Usuario
                </Button>
                <Button mode={tipo === "Conductor" ? "contained" : "outlined"} onPress={() => setTipo("Conductor")} style={{ flex: 1, marginRight: 10 }} labelStyle={{ fontSize: 10 }}>
                    Conductor
                </Button>
                <Button mode={tipo === "Admin" ? "contained" : "outlined"} onPress={() => setTipo("Admin")} style={{ flex: 1 }} labelStyle={{ fontSize: 13 }}>
                    Admin
                </Button>
            </View>

            <TextInput
                label="Correo electrónico"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Contraseña"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />


            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPasswordScreen')}
                >
                    <Text style={styles.forgot}>¿Olvidó su contraseña?</Text>
                </TouchableOpacity>
            </View>
            <Button mode="contained" onPress={onLoginPressed} icono={faRightFromBracket}>
                Iniciar Sesión
            </Button>



            {
                tipo === "Usuario" && <>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: theme.colors.button }} />
                        <View>

                            <Text style={{ width: 50, textAlign: 'center' }}>o</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: theme.colors.button }} />
                    </View>

                    <Button mode="outlined" onPress={() => { }} icono={faGoogle}>
                        <Text> Continuar con Google </Text>
                    </Button>
                    <View style={styles.row}>
                        <Text>¿No tienes una cuenta? </Text>
                        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                            <Text style={styles.link}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }

        </Background>
    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    buttons: {
        flexDirection: 'row'
    }
})
