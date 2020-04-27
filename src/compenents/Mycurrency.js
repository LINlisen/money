import React from "react";
import {StyleSheet,Text,Image,ScrollView,TouchableOpacity,View,Linking} from "react-native";
import Data from "../json/HomeData.json";

const News =({Data,navigation})=>{
    return(
    
        <View style={styles.all}>
            <View style={styles.box}>
  
            </View>
        </View>
   
    )};

const styles = StyleSheet.create({
    all:{
        flexDirection:"row",
        backgroundColor:"#24272C",
        height:150,
        width:420,
        marginTop:25,
        marginLeft:0
      },
      box:{
          position:"absolute",
          width:278,
          height:162,
          backgroundColor:"#383B40",
          marginLeft:30,
          borderRadius:20,
          flexDirection:"row"
      },
      pic:{
        width:127,
        height:96,
        marginTop:16,
        marginLeft:13,
        borderRadius:20
      },
      title:{
          width:200,
          height:80,
          fontSize:18,
          marginTop:10,
          marginLeft:15,
          color:"white"
      },
      more:{
          marginLeft:-85,
          marginTop:110,
          color:"white",
          opacity:0.5
      }
      });
export default News;