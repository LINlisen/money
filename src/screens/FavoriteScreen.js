import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView } from "react-native";

import Currency from "../compenents/Currency";
import Mycurrency from "../compenents/Mycurrency";
import Data from "../json/HomeData.json"
const FavoriteScreen = ({navigation}) => {
  return (
     
    <ScrollView>
        <View style={{flex:1}}>
           <Currency/>
        </View>
      </ScrollView>
             
  );
};

export default FavoriteScreen;
