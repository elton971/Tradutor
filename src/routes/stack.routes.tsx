import React from "react";
import { createNativeStackNavigator   } from '@react-navigation/native-stack';
import { Login } from "../screen/Login";
import { Sigin } from "../screen/Sigin";
import MainContainer from "../screen/MainContainer";




const stackRoutes = createNativeStackNavigator  ();

const AppRoutes: React.FC =()=>(
    <stackRoutes.Navigator
        screenOptions={{
            headerShown:false,
        }}
    >

        <stackRoutes.Screen
            name="Welcome"
            component={MainContainer} 
        />
        <stackRoutes.Screen
            name="signIn"
            component={Sigin}
        />

        

    </stackRoutes.Navigator>
)

export default AppRoutes;