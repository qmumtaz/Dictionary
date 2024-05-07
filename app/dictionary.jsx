import { View, Text  , StyleSheet } from 'react-native'
import React, { useEffect, useState  } from 'react'
import searchWords from '../searchWords'
import {  useRoute } from '@react-navigation/native';
import { Tab,  TabView } from '@rneui/themed';
import SoundButton from './soundplayercontext';
import IndexScreen from './index';




const Dictionary = () => {

  // const { searchedValue } = route?.params.searchedValue || {};
  // console.log("searchedvalue ==> ",searchedValue);
  const [fetchedWords, setWords] = useState([])
  const [index, setIndex] = React.useState(0);
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
    const { word, meanings, phonetics  } = fetchedWords || {};    
    
    console.log( "meanings  /n ",  meanings);

    console.log( "phonetics  /n",  phonetics);
    const definitions = meanings?.[0]?.definitions?.[0]?.definition ?? '';
    const audio = phonetics?.[0]?.audio ?? '';
    const syms = meanings?.[0]?.synonyms ?? [];
    const pos = meanings?.[0]?.partOfSpeech ?? '';
    const phonWo = phonetics?.[0]?.text ?? '';
    
    console.log(phonWo, "sumsds d");
    console.log("audio" , audio);
    console.log("definition" , definitions);



    // if (!fetchedWords) {
    //   return (
    //     <View style={styles.container}>
    //       <Text> Not Found</Text>
    //     </View>
    //   );
    // }

   

    console.log(pos);


  return (
    <View style={styles.container}>
   
     <View style={styles.top_header}>
     

     <Text style={styles.Word}>{!word ? "not found" :   word[0].toUpperCase() + word.slice(1, word.length)}</Text>
      <Text style={styles.phon_word }>{phonWo}</Text>
      
      <Text style={styles.pos}>  Part of speech  : {pos}</Text>
     {/* <Button title="Search" onPress={() => audioObj} /> */}
     {<SoundButton soundFile={audio}/>}
     </View>
   
     

      <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Definitions"
        titleStyle={{ fontSize: 12 }}
       
      />
       <Tab.Item
        title="Therarus"
        titleStyle={{ fontSize: 12 }}
       
      />
     
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: 'white', width: '100%' , height : "60%" }}>
        
     <View>
     <Text style={styles.defintion_header}> DEFINITION FOR :  <Text style={styles.defined_word}>{word}</Text> 
      
      
      </Text>
      <Text style={styles.definition_section}>
      {definitions}
      </Text>
     </View>
      
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'white', width: '100%' , height : "60%" }}>
      <View style={styles.symss}>
        <Text style = {{textAlign : "center" , margin : 10}}>   SYNONYMS: </Text>
      {syms.map((s , index) => {
       return  <Text style={styles.syms_words} key={index}>  { s}</Text>
      })}
      
      </View>
         </TabView.Item>
 
    </TabView>

    </View>

    
  )

 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 3,
    },
    pos : {
      color : "white",
      left : -10,
      bottom : -60

    },
    symss : {
      textAlign : "left",
    
      fontStyle : "italic",
      
    
      margin : 1,
      marginTop : 5,
      
      

    },

    syms_words :  {
      fontWeight : "800",
      margin : 1,
      marginTop : 5,
      backgroundColor : "orange",
      fontSize : 13,
      height : 20,
      width : "30%",
      borderRadius : 10
    } , 
   
    Word : {
      fontSize : 50, 
      color : "white",
      top : -30,
      right : 10,
      textAlign : "left"

    },
    defintion_header : {
      backgroundColor : "lightgrey",
      padding : 10,
      color : "grey", 
      
    },
    definition_section : {
      textAlign : "center",
      fontStyle : "italic",
      margin : 10,
      marginTop : 20

    },
    top_header : {
      backgroundColor : "#0867d2",
      padding : 40, 
      marginBottom : 10,
      color : "white",
      display : "flex"

    },
    defined_word : {
     
    }, 
    phon_word : {
      color : "white",
      top : -30
    }
    

  });


export default Dictionary;