
import { StyleSheet, View, ImageBackground} from 'react-native';
import EncabezadoTarjeta from './components/EncabezadoTarjeta/EncabezadoTarjeta';
import MensajeTarjeta from './components/MensajeTarjeta/MensajeTarjeta';
import QrTarjeta from './components/QrTarjeta/QrTarjeta';

export default function App() {
  return (

    <View style={styles.container}>
      <EncabezadoTarjeta/>
      <MensajeTarjeta/>
      <QrTarjeta/>
      <View style={styles.finalBoddy}>
        <ImageBackground source={require("./images/Fondo01.jpg")} resizeMode="cover" style={styles.image}>
        </ImageBackground>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },

  finalBoddy: {
    backgroundColor: '#305D90',
    height: 100,
    width: '100%',
    padding: 1
  },

  image: {
    flex: 1,
    justifyContent: "center",
    padding: 18
  }

});
