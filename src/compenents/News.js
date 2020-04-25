import React from "react";
import {StyleSheet,Text,Image,ScrollView,TouchableOpacity} from "react-native";
import Data from "../json/HomeData.json";

const News =({})=>{
    return(
        <View style={styles.all}>
            <View style={styles.box}>

            </View>
        </View>
    )};

const styles = StyleSheet.create({
    all:{
        position:"absolute",
        backgroundColor:"#24272C",
        height:900,
        width:420
      },
      box:{
          width:354,
          height:128,
          backgroundColor:"#383B40"
      }
      });
export default News;
