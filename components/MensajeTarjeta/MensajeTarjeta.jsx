import { StyleSheet, View, Text} from "react-native"

export default function MensajeTarjeta(){

    return (
        <View style={styles.mensajeTamanio}>
            <Text>
                Mi nombre es Fabián Camilo Arévalo Roa, en la actualidad 
                soy estudiante de DAM, Disfruto más la parte de desarrollo web, movil y mucho mas cosas
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

});