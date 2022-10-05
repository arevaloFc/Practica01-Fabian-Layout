import { Image, StyleSheet, Text, View} from "react-native"

export default function EncabezadoTarjeta(){

    return (
    
        <View style={styles.datosTarjeta}>
            <Image style={styles.fotoPersona} source={require("../../images/Fabian.jpg")}/>
            <Text style={styles.nombrePersona}>Fabián Camilo Arévalo Roa</Text>
        </View>
    
    )

}

const styles = StyleSheet.create({

    datosTarjeta: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
        padding: 20,
        backgroundColor: '#BBBBBB'
    },

    fotoPersona: {
        width: '100%',
        height: 100
    },

    nombrePersona: {
        padding: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }

});