import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from './Home';
import { Saved } from './Saved'


//nomes das telas
const homeName = "Home";
const detailsName = "Saved";



const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
      <Tab.Navigator
        
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'star' : 'star-outline';

            } 

            return <Ionicons name={iconName} size={size} color={color} />;
          },
              tabBarStyle: { position: 'absolute' },
        })
      }
        >

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={detailsName} component={Saved} />
      </Tab.Navigator>
  );
}

export default MainContainer;