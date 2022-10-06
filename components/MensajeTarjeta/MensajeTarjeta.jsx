import { StyleSheet, View, Text} from "react-native"

export default function MensajeTarjeta(){

    return (
        <View style={styles.mensajeTamanio}>
            <Text style={styles.mesajePrincipal}>
                Mi nombre es Fabián Camilo Arévalo Roa, Soy un estudiante de desarrollo 
                aplicaciones multiplataforma con un enfoque en desarrollo web.
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
        width: '100%',
        padding: 20
    },

    mesajePrincipal: {
        textAlign: 'justify',
        padding: 30,
        fontSize: 16,
        color: '#ffffff'
    },

    mesajeFrase: {
        paddingLeft: 60,
        paddingRight: 60,
        fontSize: 14,
        textAlign: 'center',
        color: '#ffffff'
    }

});