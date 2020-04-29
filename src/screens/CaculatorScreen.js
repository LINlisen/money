import React, { useContext } from "react";
import { View, FlatList,Text} from "react-native";
import Calculator from '../compenents/Calculator';
const CaculatorScreen = ({navigation}) => {
  return (
     
       <View>
           <Calculator/>
       </View>
             
  );
};

export default CaculatorScreen;
