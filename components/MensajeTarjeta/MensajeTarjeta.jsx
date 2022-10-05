import { StyleSheet, View, Text} from "react-native"

export default function MensajeTarjeta(){

    return (
        <View style={styles.mensajeTamanio}>
            <Text style={styles.mesajeEstilos}>
                Mi nombre es Fabián Camilo Arévalo Roa, Soy un estudiante de desarrollo 
                aplicaciones multiplataforma con un enfoque a desarrollo web.
            </Text>
            <Text style={styles.mesajeFrase}>
                Soy trabajador, diligente y dedicado, y dichas cualidades las pongo en todo lo que hago
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({

    mensajeTamanio: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
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