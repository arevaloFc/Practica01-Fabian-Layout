import { StyleSheet, Text, View,} from "react-native"

export default function EncabezadoTarjeta(){

    return (
    
        <View style={styles.datosTarjeta}>
            <Text>Fabián Camilo Arévalo Roa</Text>
        </View>
    
    )

}

const styles = StyleSheet.create({

    datosTarjeta: {
        width: '100%',
        height: 200,
        backgroundColor: '#BBBBBB'
    },
});