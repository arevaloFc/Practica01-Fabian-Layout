import { Image, StyleSheet, Text, View, ImageBackground} from "react-native"

export default function EncabezadoTarjeta(){

    return (
    
        <View style={styles.datosTarjeta}>
            <ImageBackground source={require("../../images/Fondo01.jpg")} resizeMode="cover" style={styles.image}>
                <Image style={styles.fotoPersona} source={require("../../images/Fabian.jpg")}/>
                <Text style={styles.nombrePersona}>Fabián Camilo Arévalo Roa</Text>
            </ImageBackground>
        </View>
    
    )

}

const styles = StyleSheet.create({

    datosTarjeta: {
        width: '100%',
        height: 190,
        backgroundColor: '#305D90',
        padding: 1
    },

    image: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        padding: 18
    },

    fotoPersona: {
        height: '60%',
        borderRadius: 100,
        flex: 2
    },

    nombrePersona: {
        padding: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        flex: 5
    },

});