import { View, Text  , StyleSheet , Dimensions } from 'react-native'
import React, { useEffect, useState  } from 'react'
import searchWords from '../searchWords'
import {  useRoute } from '@react-navigation/native';
import { TabView, SceneMap} from 'react-native-tab-view';


const Dictionary = ({ss}) => {

  // const { searchedValue } = route?.params.searchedValue || {};
  // console.log("searchedvalue ==> ",searchedValue);
  const [fetchedWords, setWords] = useState([])
  const route = useRoute();
  const searchedWord = route.params.searchedValue;
  console.log(searchedWord);
  
    useEffect(() => {
  
        if (searchedWord) {
            searchWords(searchedWord.toLowerCase()).then((data) => {
              console.log("data ===> ",data[0]);
                setWords(data[0])
            })
        }
    },[searchedWord])
  


    // console.log("fetchedWords : ++++++++++++> ",  fetchedWords);
    const { word, meanings, phonetics } = fetchedWords || {};    
    
    console.log( "meanings  /n ",  meanings);

    console.log( "phonetics  /n",  phonetics);
    let definitions = '';
    if (meanings && meanings.length > 0 && meanings[0].definitions && meanings[0].definitions.length > 0) {
      definitions = meanings[0].definitions[0].definition;
    }
    let audio = '';
    if (phonetics && phonetics.length > 0 && phonetics[0].audio && phonetics[0].audio.length > 0) {
      audio = phonetics[0].audio;
    }
    console.log("audio" , audio);
    if (!fetchedWords) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    const [routes] = React.useState([
      { key: 'first', title: 'First' },
    ]);
    const FirstRoute = () => (
      <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
       
      
    );
    
    const [index, setIndex] = React.useState(0);

    const renderScene = SceneMap({
      first: FirstRoute,
      
    });

  return (
    <View style={styles.container}>
    
      <Text style={styles.Word}>{!word ? "not found" :   word[0].toUpperCase() + word.slice(1, word.length)}</Text>
   
      <Text>{ definitions  }</Text>
      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
      
    />
      <Text>{ audio  }</Text>
   
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 0,
      padding: 10,
    },
    item: {
      padding: 20,
      fontSize: 15,
      marginTop: 5,
    }
    ,
    Word : {
      fontSize : 40, 
      backgroundColor : "blue",
      color : "white"

    }

  });


export default Dictionary;