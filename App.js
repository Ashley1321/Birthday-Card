import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import baloon from './assets/balloon.png';
import cake from './assets/loveCake.webp';
import happy from './assets/loveCake.gif';
import { LinearGradient } from 'expo-linear-gradient';
import background from './assets/background.gif';
import butterfly from './assets/butterfly.png'


export default function App() {
  return (


    <LinearGradient style={{ height: '100%', }} colors={["#fc5c61", "#cb0504", "#f35f54"]}>
      <View>
        <Text style={styles.aText}>It is your Birthday</Text>
        <Image source={baloon} style={{ width: 220, height: 350, marginLeft: 150 }} />
        <Image source={baloon} style={{ width: 220, height: 350,marginTop: -350,  }} />
        <Image source={butterfly} style={{ width: 200, height: 180, marginTop:-170, marginLeft: 180 }} />
        <Image source={happy} style={{ width: 200, height: 200, borderRadius: 100, marginTop: -200,marginLeft:-40}} />
        <Image source={background} style={{ width: 200, height: 200, marginTop: -50, marginLeft: 40 , borderRadius: 100}} />
        <Image source={cake} style={{ width: 200, height: 200, marginLeft:190, borderRadius: 100, marginTop: -150 }} />
        <LinearGradient style={{ height: 40, width: "100%", justifyContent: 'center', }} colors={["#ff0000", "#ff5a00",]}>
          <Text style={styles.text}>Click Me</Text>
        </LinearGradient>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aText: {
    textAlign: 'center',
    fontSize: 40,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center'
  },

});
