import React from 'react';

import {Link, Stack} from "expo-router"

const RootLayout = () => {
  
 
  return (
    <Stack>
      <Stack.Screen name='Index' options={{headerShown : true}} />
      <Stack.Screen name='Dictionary' options={{headerShown : true}} />
     
    </Stack>
    
     
    
  );
}


export default RootLayout
