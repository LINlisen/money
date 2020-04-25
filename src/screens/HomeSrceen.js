import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import Head from "../compenents/Head";
import News from "../compenents/News";
import Data from "../json/HomeData.json"
const HomeScreen = ({navigation}) => {
  return (
     
       <View style={{flex:1}}>
        
        <Head/>
        <FlatList
          Data={Data.News}
          renderItem={({item})=>
          
          <News
            Data={item}
            navigation={navigation}
            />}
            keyExtractor={item => item.title}
          />
      </View>
  );
};

export default HomeScreen;
