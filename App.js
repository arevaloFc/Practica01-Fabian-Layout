
import { StyleSheet, View } from 'react-native';
import EncabezadoTarjeta from './components/EncabezadoTarjeta/EncabezadoTarjeta';
import MensajeTarjeta from './components/MensajeTarjeta/MensajeTarjeta';
import QrTarjeta from './components/QrTarjeta/QrTarjeta';

export default function App() {
  return (

    <View style={styles.container}>
      <EncabezadoTarjeta/>
      <MensajeTarjeta/>
      <QrTarjeta/>
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
