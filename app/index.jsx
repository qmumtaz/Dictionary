import {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button , Text , Image} from 'react-native';
import {Link} from "expo-router"
import { useNavigation } from '@react-navigation/native';
import Dictionary from './dictionary';

const IndexScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigation = useNavigation();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
        navigation.navigate('dictionary', {searchedValue : searchTerm});

    }
    
  };
    return (
        <View style={styles.container}>

         
          <Image source = {require("../assets/dictionaryImg.jpg")} style={styles.logo} />
          <Text style={styles.heading}>Dictionary</Text>
        <TextInput
         placeholder="Enter search term..."
         style={styles.resultText}
         value={searchTerm}
         onChangeText={setSearchTerm}
       />
     <Button title="Search" onPress={handleSearch} />
 
 
       {/* {searchTerm !== '' && <Dictionary ss={searchTerm} />} */}
     </View>
    );
}

const styles = StyleSheet.create({
    container: {
     
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      
    },
    heading: {
      fontSize: 30,
      margin : 10, 
      fontWeight: 'bold',
      marginBottom: 10,
    },
    resultText: {
      
      margin: 20,
    },
    logo : {
      height : 100,
      width : 100
    }
  });

export default IndexScreen;
