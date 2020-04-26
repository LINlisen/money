import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";

const Currency =({})=>{
        return(
           <View style={styles.all}>
               <Image source={require('../../img/img_graycircle.png')}
               style={styles.bigcircle}
               />
               <Image source={require('../../img/img_circleright.png')}
               style={styles.smallcircle}
               />
           </View> 
        )
};
const styles = StyleSheet.create({
    all:{
        position:"absolute",
        backgroundColor:"#24272C",
        height:1000,
        width:420
    },
    bigcircle:{
        width:189,
        height:189,

        marginLeft:287,
        marginTop:-65
    },
    smallcircle:{
        width:57,
        height:57,
        marginLeft:306,
        marginTop:-45,
        
    }
});
export default Currency;