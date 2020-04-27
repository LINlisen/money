import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image ,View} from "react-native";
import FavoriteScreen from "../screens/FavoriteScreen";
import SFavoriteScreen from "../screens/SFavoriteScreen";



const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            
            screenOptions={({ route }) => ({
                
                tabBarIcon: ({ focused, color, size }) => {
                let iconPath;
                
                if (route.name === '現金匯率') {
                    iconPath = focused
                    ? require('../../img/icon_selected_heart.png'):
                    require('../../img/Icon_heart.png');
                } else if (route.name === '即期匯率') {
                    iconPath = focused
                    ? require('../../img/Icon_selected_awesome-chart-line.png'):
                    require('../../img/Icon_awesome-chart-line.png');
                } 
                // You can return any component that you like here!
                return (
                   
                    <Image 
                    style={{width: 30, height: 30}}
                    source={iconPath} 
                    />
                    
                );
                },
            })}
            tabBarOptions={{
                activeBackgroundColor:"#3E4247",
                inactiveBackgroundColor:"#3E4247",
                
                activeTintColor: 'orange',
                inactiveTintColor: 'gray',
                labelStyle: {
                fontSize: 12,
                marginTop: 0,
                paddingTop: 0,  
                },
                style:{height:100}
            }}
            >
            <Tab.Screen name="現金匯率" component={SFavoriteScreen} />
            <Tab.Screen name="即期匯率" component={FavoriteScreen} />
            
            
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainTabNavigator;