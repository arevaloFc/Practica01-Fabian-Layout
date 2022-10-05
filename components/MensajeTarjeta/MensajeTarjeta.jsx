import { StyleSheet, View, Text} from "react-native"

export default function MensajeTarjeta(){

    return (
        <View style={styles.mensajeTamanio}>
            <Text style={styles.mesajeEstilos}>
                Mi nombre es Fabián Camilo Arévalo Roa, en la actualidad 
                soy estudiante de DAM, Disfruto más la parte de desarrollo web, movil, 
                Soy responsable y puntual tambien me gusta dar todo en mis trabajos 
            </Text>
            <Text style={styles.mesajeFrase}>
                Solo quiero mirar las estrellas y olvidar mi existencia
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({

    mensajeTamanio: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200
    },

    mesajeEstilos: {
        textAlign: 'justify',
        padding: 10,
        fontSize: 16
    },

    mesajeFrase: {
        padding: 10,
        fontSize: 14,
        textAlign: 'center',
    }

});