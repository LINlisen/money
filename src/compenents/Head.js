import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import { Icon } from 'react-native-elements'

import Data from "../json/HomeData.json";
import ModalDropdown from 'react-native-modal-dropdown';
const Head =({})=>{
    return(
      <View style={styles.all}>
          <View style={{flexDirection:"row"}}>
             
              <Image style={styles.bell}
                source={require("../../img/button_bell.png")}
              />
          </View>
        <View style={styles.topbox}>
          <View style={{flexDirection:"row"}}>
            <ModalDropdown options={['TWD','USD','GBP','AUD','RMB']}
                         defaultValue="TWD"
                         textStyle={{color:"white",width:46,height:22}}
                         style={{marginTop:25,marginLeft:161}}
                      />
            <Icon name="ios-arrow-down"
                 type='ionicon'
                 color='white'
                 iconStyle={{marginTop:24,fontSize:15,marginLeft:-15}}
            />
            </View>
            <View style={{flexDirection:"row"}}>
              <Image style={{width:22.44,height:21.99,marginLeft:135}}
                  source={require('../../img/icon_money.png')}
              />
              <Text style={{width:63,height:28,fontSize:25,color:"white",marginLeft:8,marginTop:-5}}>{Data.personal[0].money}</Text>
            </View>
        </View>
      </View>
    )
};
const styles = StyleSheet.create({
   all:{
     backgroundColor:"#24272C",
     height:900
   },
   user:{
    width:25.85,
    height:25.94,
    marginTop:55.46,
    marginLeft:30
   },
   bell:{
     width:25.85,
     height:25.94,
     marginTop:55.46,
     marginLeft:356
   },
   topbox:{
     width:354,
     height:392,
     backgroundColor:"#383B40",
     borderRadius:30,
     marginTop:40,
     marginLeft:30,
     shadowColor: '#00000029',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: {
    height: 3,
    width: 2,
},
   }
  });
  
  export default Head;