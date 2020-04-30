import React, { useContext } from "react";
import { View, FlatList,Text,SafeAreaView,ScrollView} from "react-native";
import Calculator from '../compenents/Calculator';

const CaculatorScreen = ({navigation}) => {
  return (
     <ScrollView>
      <View style={{flex:1}}>
           <Calculator/>
       </View>
       </ScrollView>     
  );
};

export default CaculatorScreen;
