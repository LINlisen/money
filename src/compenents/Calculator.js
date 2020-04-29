import React, { Component } from 'react';
import { View, TextInput,StyleSheet,KeyboardType,Image,Text } from 'react-native';
import { color } from 'react-native-reanimated';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

export default class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
    };
  }

  // 你可以试着输入一种颜色，比如red，那么这个red就会作用到View的背景色样式上
  render() {
    return (
    <View style={styles.all}>
      <Image style={{width:189,height:189,marginLeft:287,marginTop:-110}}
               source={require("../../img/img_graycircle.png")}/>
 <Image style={{width:57,height:57,marginLeft:307,marginTop:-35}}
               source={require("../../img/img_circleright.png")}/>
    <View style={styles.box}>
      <View style={{flexDirection:"row"}}>
      <Text style={styles.currency}>Currency</Text>
      <Text style={styles.value}>Value</Text>
      </View>
      <View style={{width:290,height:1,backgroundColor:"#707070",marginTop:7.5,marginLeft:34.5}}></View>
      <View style={{
       backgroundColor: this.state.text,
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
       >
         <UselessTextInput

           multiline = {true}
           numberOfLines = {4}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
           style={{color:"white"}}
           placeholder="number" keyboardType="numeric"
        />
      </View>
      </View>
     </View>
    );
  }
};
const styles = StyleSheet.create({
  all:{
    position:"absolute",
     backgroundColor:"#24272C",
     height:1300,
     width:420
  },
  box:{
    width:359,
    height:695,
    backgroundColor:"#3E4148",
    marginTop:70,
    marginLeft:28,
    borderRadius:20
  },
  currency:{
    fontSize:15,
    color:"white",
    width:65,
    height:20,
    marginTop:27,
    marginLeft:53
  },
  value:{
    fontSize:15,
    color:"white",
    width:60,
    height:20,
    marginTop:27,
    marginLeft:146
  }
})