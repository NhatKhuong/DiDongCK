import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import {useRoute } from '@react-navigation/native';
import { useState,useEffect } from 'react';


export default function Detail({navigation}) {
  const route = useRoute();
  const [img, setImg] = useState()
  const [name, setName] = useState()
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState()
  function add(){
    setQuantity(quantity+1)
  }

  function remove(){
    if(quantity >0){
      setQuantity(quantity-1)
    }
  }

  useEffect(() => {
    if (route.params != null){
      setName(route.params.name)
      setImg(route.params.img)
      setPrice(route.params.price)
    }
  });
  return (
    <View style={{paddingTop:10, backgroundColor:"#000", paddingLeft:15, paddingRight:15}}>
      <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <Ionicons name="chevron-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{color:"#fff", fontSize:20, fontWeight:'bold'}}>Detail</Text>
        <View>
            <Ionicons name="heart-sharp" size={24} color="#fff" />
        </View>
      </View>
      <View>
        <Image style={{height:350, width:"100%",resizeMode: 'stretch'}} source={{uri:img}}></Image>
      </View>
      <View style={{width:"100%", alignItems:"center"}}>
        <View style={{display:"flex", flexDirection:"row"}}>
            <TouchableOpacity style={{borderWidth:2, borderColor:"#2cc167", width:40, height:40, alignItems:"center", justifyContent:"center",borderRadius:50}} onPress={()=>remove()}>
                <Ionicons name="ios-remove-sharp" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={{color:"#fff", fontSize:24,marginLeft:10, marginRight:10, fontWeight:"bold"}}>{quantity}</Text>
            <TouchableOpacity style={{borderWidth:2, borderColor:"#2cc167", width:40, height:40, alignItems:"center", justifyContent:"center",borderRadius:50}} onPress={()=>add()}>
                <Ionicons name="md-add-sharp" size={24} color="#fff"/>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
        <TouchableOpacity style={{backgroundColor:"#2cc167", width:80,height:35, borderRadius:5, borderColor:"#fff",alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"#fff", fontSize:16, fontWeight:'bold'}}><Ionicons name="star" size={16} color="yellow" />4.9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#000", width:80,height:35, borderRadius:5, borderColor:"#fff",alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"#fff", fontSize:16, fontWeight:'bold'}}><Feather name="clock" size={24} color="#fff" />  5 phút</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#000", width:100,height:35, borderRadius:5, borderColor:"#fff",alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"#fff", fontSize:16, fontWeight:'bold'}}><FontAwesome name="dollar" size={24} color="#2cc167" />  Free ship</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:20, height:170}}>
        <Text style={{fontSize:16, color:"#fff"}}>{name}</Text>
        <Text style={{color:"#fff"}}>Cafe Trung Nguyên Sáng tạo 8  được chọn lọc từ những hạt cà phê ngon nhất của Việt Nam.Là sản phẩm siêu sạch và tuyệt ngon cho những ai là tín đồ của cà phê. Cafe Trung Nguyên Sáng tạo 8  được chọn lọc từ những hạt cà phê ngon nhất của Việt Nam.Là sản phẩm siêu sạch và tuyệt ngon cho những ai là tín đồ của cà phê.</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
        <View>
            <Text style={{color:"#fff", fontSize:18, fontWeight:"bold"}}>Total Price</Text>
            <Text style={{color:"#2cc167", fontSize:18, fontWeight:"bold"}}>{price*quantity} VND</Text>
        </View>
        <View>
            <TouchableOpacity style={{backgroundColor:"#2cc167", width:240,height:45, borderRadius:20, borderWidth:1,alignItems:"center", justifyContent:"center"}} onPress={()=>navigation.navigate("Cart",{img:img,quantity:quantity,price:price,name:name})}>
                <Text style={{color:"#fff", fontSize:18, fontWeight:'bold'}}><Ionicons name="ios-cart-outline" size={24} color="#fff" />  Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}