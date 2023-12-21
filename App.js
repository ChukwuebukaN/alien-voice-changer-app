import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  Text,
  StatusBar,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NativeModules} from 'react-native';
import SpeedIcon from './assets/speed-up-icon.svg';
import Logo from './assets/alien-voice-changer-logo.svg';

const {VoiceChangingModule} = NativeModules;

const App = () => {
  useEffect(() => {
    const ac = new AbortController();

    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    console.log(NativeModules.counter);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  const audioTrackURL =
    'https://www.flexymusic.ng/wp-content/uploads/Axel_F_-_Crazy_Frog.mp3';

  const changeToAlein = () => {
    Platform.OS === 'android' &&
      VoiceChangingModule.changeVoiceToAlien(audioTrackURL);
  };

  const changeToChild = () => {
    Platform.OS === 'android' &&
      VoiceChangingModule.changeVoiceToChild(audioTrackURL);
  };

  const changeToFast = () => {
    Platform.OS === 'android' &&
      VoiceChangingModule.speedUpVoice(audioTrackURL);
  };

  const changeToSlow = () => {
    Platform.OS === 'android' &&
      VoiceChangingModule.slowDownVoice(audioTrackURL);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#e4e5ea'} />
      <Logo style={styles.logo} />
      <Text style={styles.title}> Change Voice Effects </Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => changeToAlein()}>
          <Image
            source={require('./assets/alien-icon.png')}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Alien</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeToChild()}>
          <Image
            source={require('./assets/child-icon.png')}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Child</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeToFast()}>
          <SpeedIcon />
          <Text>Fast</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <Image
            source={{
              uri: 'https://www.pngjoy.com/pngl/346/6457386_black-arrows-fast-forward-symbol-transparent-png-download.png',
            }}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeToSlow()}>
          <Image
            source={{
              uri: 'https://www.pngjoy.com/pngl/346/6457386_black-arrows-fast-forward-symbol-transparent-png-download.png',
            }}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Slow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A87B5',
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  logo: {
    marginTop: 45,
    marginBottom: 25,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 50,
  },
  warningText: {
    color: 'red',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  spacing: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
  },
  icon: {
    height: 40,
    width: 40,
    marginBottom: 15,
  },
});

export default App;
