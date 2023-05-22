import React from 'react'
import Background from '../../components/Background'
import { Image, Text, StyleSheet, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Yo = () => {
  return (
    <Background>
      <Image source={require('../../assets/foto-perfil.jpg')} style={styles.imagenConductor}></Image>
      <View style={styles.contenedor}>
        <Text style={styles.nombre}>Jhordi Gonzalez</Text>
        <Text style={styles.info}>correo@hotmail.com</Text>
        <Text style={styles.info}>9821734122</Text>
        <View style={styles.estado}>
          <View style={styles.circulo}></View>
          <Text>En Servicio</Text>
        </View>
      </View>

      <View style={styles.identificaciones}>
        <Text>
          Licencia
        </Text>
        <Text>
          Afiliacion
        </Text>
        <Text>
          Matricula
        </Text>
      </View>

      <View style={styles.opciones}>
        <View style={styles.opcionCuenta}>
          <Text style={styles.texto}>
            Restablecer Correo
          </Text>
          <FontAwesomeIcon icon={faChevronRight} />
        </View>

        <View style={styles.opcionCuenta}>
          <Text style={styles.texto}>
            Restablecer Contraseña
          </Text>
          <FontAwesomeIcon icon={faChevronRight} />
        </View>

        <View style={styles.opcionCuenta}>
          <Text style={styles.texto}>
            Ajustes de cuenta
          </Text>
          <FontAwesomeIcon icon={faChevronRight} />
        </View>

        <View style={styles.opcionCuenta}>
          <Text style={styles.texto}>
            Información de la cuenta
          </Text>
          <FontAwesomeIcon icon={faChevronRight} />
        </View>

        <View style={styles.opcionCuenta}>
          <Text style={styles.texto}>
            Ayuda
          </Text>
          <FontAwesomeIcon icon={faChevronRight} />
        </View>

        <Text style={styles.cerrar}>
            Cerrar Sesión
        </Text>
      </View>




    </Background>
  )
}

const styles = StyleSheet.create({
  imagenConductor: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 20,
    position: 'absolute',
    top: 20,
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
  contenedor: {
    backgroundColor: "#d8e9f9",
    padding: 30,
    position: 'absolute',
    top: 60,
    paddingTop: 80,
    width: "100%",
    borderRadius: 20,
    paddingBottom: 10

  },
  nombre: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10
  },
  info: {
    marginBottom: 5,
    fontSize: 16
  },

  circulo: {
    backgroundColor: "#8edc6b",
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: 15
  },

  estado: {
    flexDirection: 'row',
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    right: 20
  },

  identificaciones: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: "space-around",
    position: "absolute",
    top: 260

  },

  opcionCuenta: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#d8e9f9",
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    fontWeight: "bold"
  },

  opciones: {
    position: 'absolute',
    top: 300,
    width: "100%"
  },

  texto: {
    fontWeight: "bold"
  },

  cerrar: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default Yo