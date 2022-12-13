import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function Start({navigation}) {
  return (
    <View style={{backgroundColor:"#000",flex:1,alignItems:"center"}}>
        <Image style={{marginBottom:100}} source={require('../images/bgk.png')}></Image>
        <Text style={{color:"#fff",textAlign:"center",width:200}}>sdfgdgdfgsdfsdfdsfsdf sdfsdf sfsdf sdf asdfsdfdfg</Text>
          <TouchableOpacity style={{backgroundColor:"#2cc167", width:380,height:45, borderRadius:20, borderWidth:1,alignItems:"center", justifyContent:"center"}} onPress={()=>navigation.navigate("Home")}>
                <Text style={{color:"#fff", fontSize:18, fontWeight:'bold'}}>Start</Text>
            </TouchableOpacity>
      
    </View>
  )
}