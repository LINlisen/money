import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from "react-native";
import HomeScreen from "../screens/HomeSrceen";
import ChartlineScreen from "../screens/ChartlineScreen";
import FavoriteScreen from "../screens/FavoriteScreen";


const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            
            screenOptions={({ route }) => ({
                
                tabBarIcon: ({ focused, color, size }) => {
                let iconPath;
                
                if (route.name === 'Favorite') {
                    iconPath = focused
                    ? require('../../img/icon_selected_heart.png'):
                    require('../../img/Icon_heart.png');
                } else if (route.name === 'Chart') {
                    iconPath = focused
                    ? require('../../img/Icon_selected_awesome-chart-line.png'):
                    require('../../img/Icon_awesome-chart-line.png');
                } else if (route.name == 'Home') {
                    iconPath = focused
                    ? require('../../img/Icon_selected_home.png'):
                    require('../../img/Icon_home.png');
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
                padding: 0,
                
               
                   
                },
            }}
            >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
            <Tab.Screen name="Chart" component={ChartlineScreen} />
            
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainTabNavigator;