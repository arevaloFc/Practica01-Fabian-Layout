import { StyleSheet, View, Text} from "react-native"

export default function MensajeTarjeta(){

    return (
        <View style={styles.mensajeTamanio}>
            <Text style={styles.mesajeEstilos}>
                Mi nombre es Fabián Camilo Arévalo Roa, en la actualidad 
                soy estudiante de DAM, Disfruto más la parte de desarrollo web, movil y mucho mas cosas
            </Text>
            <Text>
                Solo quiero mirar las estrellas y olvidar mi existencia
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({

    mensajeTamanio: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },

    mesajeEstilos: {
        textAlign: 'center',
        padding: 10,
        fontSize: 16
    },

});