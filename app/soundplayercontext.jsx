

import { Button, Text, StyleSheet , TouchableHighlight , View } from 'react-native';
import {SoundPlayer} from 'react-native-sound-player'
import { Icon } from '@rneui/themed';

const SoundButton = ({ soundFile }) => {
  const playSound = () => {
    try {
     SoundPlayer.playUrl(soundFile);
    //  SoundPlayer.loadUrl(soundFile)

    //  SoundPlayer.play(soundFile)

    } catch (error) {
      console.log('Error playing sound:', error);
    }
  };

  return (
    <TouchableHighlight onPress={()=>playSound} style={styles.button} activeOpacity={0.6} underlayColor="white">
    <View>
    <Icon style={styles.icon}
        name='volume-up' />
    </View>
   
    
</TouchableHighlight>
     
   
  );
};

const styles = StyleSheet.create({
  button: {
    color : "white",
    padding: 1,
   width : 40,
    display : "flex",
    flexDirection : "column-reverse",
    left : 300,
    bottom : 33,
    backgroundColor : "#0867d2"
  },
  icon: {
    color: 'white',
    backgroundColor : "#0867d2",
    
  },
});

export default SoundButton;