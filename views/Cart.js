import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { useState,useEffect } from 'react';
import {useRoute } from '@react-navigation/native';
import axios from 'axios';

export default function Cart({navigation}) {
    const route = useRoute();
    // const [items, setItems] = useState([
    //     { img:require("../../images/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:10,quantity:1,priceTotal:10},
    //     { img:require("../../images/coffe2.webp"),descrip:"with chocolate",name: 'Trung Nguyen',price:10,quantity:1,priceTotal:10},
    //     { img:require("../../images/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:10,quantity:1,priceTotal:10},
    //     { img:require("../../images/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:10,quantity:1,priceTotal:10},
    //     { img:require("../../images/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:10,quantity:1,priceTotal:10},
    //   ]);

    const [items, setItems] = useState([ { img:'http://file.hstatic.net/1000159991/file/doremon-min_d7fba7f7f60a41a0af6e67dcaeb75634_grande.jpg',descrip:"with chocolate",name: 'Capuchino',price:10,quantity:1,priceTotal:10}]);

     function handleAdd(index){
        const object = items[index];
        object.quantity = items[index].quantity+1;
        object.priceTotal = items[index].price*object.quantity
        // local
        // setItems([].concat(items.map((x, myindex) => {
        //     return myindex == index ? object : x;
        // })))

        // api
        update(object.id,object)
     }

     function handlePrivate(index){
        const object = items[index];
        if(object.quantity>1){
            object.quantity = items[index].quantity-1;
            object.priceTotal = items[index].price*object.quantity;
            // local
        //     setItems([].concat(items.map((x, myindex) => {
        //     return myindex == index ? object : x;
        // })))

        // api
        update(object.id,object)
        } else if(object.quantity == 1){
            deleteCart(object.id)
        } 
     }

     function tottalPrice(){
        var result = 0;
        items.map((item)=>{
            result = result+item.priceTotal;
        })
        return result;
     }

     useEffect(() => {
        if (route.params != null){
        //   setName(route.params.name)
        //   setImg(route.params.img)
        //   setPrice(route.params.price)
            const ob = {
                img:route.params.img,
                price:route.params.price,
                quantity:route.params.quantity,
                name:route.params.name

            }
    //local
            // setItems([...items,ob]);
            //api
            axios.post('https://63945a604df9248ead9fa103.mockapi.io/api/v1/test/cart', ob)
            .then(response => {
                getData();
            });
            
        }
      },[]);

      function getData(){
        axios({
          url:'https://63945a604df9248ead9fa103.mockapi.io/api/v1/test/cart',
          method:'GET'
        }).then((respone)=>{
          setItems(respone.data)
        }).catch((err)=>{
        })
      }

      function update(id,object){
        axios.put(`https://63945a604df9248ead9fa103.mockapi.io/api/v1/test/cart/${id}`, object)
        .then(response => {
            getData();
        });
      }

      function deleteCart(id){
        axios.delete(`https://63945a604df9248ead9fa103.mockapi.io/api/v1/test/cart/${id}`)
        .then(response => {
            getData();
        });
      }

  return (
    <View style={{paddingTop:55,flex:1,paddingLeft:15, paddingRight:15,backgroundColor:"#fff"}}>
      <View style={{display:"flex",flexDirection:"row"}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Detail")}>
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <View style={{marginLeft:120}}>
            <Text style={{fontSize:16, fontWeight:"bold"}}>My cart</Text>
        </View>
      </View>

      <ScrollView style={{height:500, maxHeight:500}}>
         {items.map((item,index)=>(
          
                <View style={{display:"flex", flexDirection:"row", alignItems:"center",padding:10, borderRadius:20,backgroundColor:"#f6f6f6",marginTop:20}}>
                    <View style={{display:"flex", flexDirection:"row", alignItems:"center",width:"80%"}}>
                        <View style={{marginRight:20}}>
                            <Image style={{width:70, height:70, borderRadius:10,resizeMode:'stretch'}} source={{uri:item.img}}></Image>
                        </View>
                        <View>
                            <Text style={{color:"#3fc876"}}>{item.name}</Text>
                            <Text style={{color:"#3fc876"}}>{item.descrip}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{display:"flex",flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
                            <TouchableOpacity style={{borderRadius:5,backgroundColor:"#3fc876"}} onPress={()=>handlePrivate(index)}>
                                <Ionicons name="md-remove-outline" size={24} color="#fff" />
                            </TouchableOpacity>
                            <Text style={{marginLeft:5, marginRight:5}}>{item.quantity}</Text>
                            <TouchableOpacity style={{borderRadius:5,backgroundColor:"#3fc876"}} onPress={()=>handleAdd(index)}>
                                <Ionicons name="ios-add-outline" size={24} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{color:"#3fc876"}}>{item.price*item.quantity}$</Text>
                    </View>
                </View>
            
         ))}
      
      </ScrollView>
      <Text>{tottalPrice()}</Text>

      
    </View>
  )
}