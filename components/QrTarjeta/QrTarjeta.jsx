import { StyleSheet, View} from "react-native";
import QRCode from 'react-native-qrcode-svg';

export default function QrTarjeta(){

    return (
    
        <View style={styles.qrTamanio}> 
            <QRCode size={150}  value="https://github.com/arevaloFc/Practica01-Fabian-Layout"/>
        </View>
    
    )

}

const styles = StyleSheet.create({

    qrTamanio: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10

    },

});