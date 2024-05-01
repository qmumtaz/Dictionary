import React from 'react';
import { StyleSheet, View , Text} from 'react-native';   
 import {  useRoute } from '@react-navigation/native';

const Random = () => {
    // console.log(route);
    // const { searchTerm } = route.params;  
     const route = useRoute();
    
    return (
        <View>
            <Text>{route.params.searchedValue}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default Random;
