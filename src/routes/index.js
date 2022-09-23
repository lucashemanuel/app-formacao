import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Welcome  from "../pages/Welcome";
import  Inicio  from "../pages/Inicio";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
      <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

