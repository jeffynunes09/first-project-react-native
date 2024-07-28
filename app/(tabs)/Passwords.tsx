import { View,Text,StyleSheet } from "react-native"
import { useState,useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useIsFocused } from "@react-navigation/native"

export default function Passwords() {


   



  return (
   
    <SafeAreaView style={{flex:1}}>

      <View style={styles.header}>
        <Text style={styles.title}>
          Minhas Senhas
        </Text>
      </View>

    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
 
header:{
  
  backgroundColor:'#392de9',
  paddingTop:58,
  paddingBottom:14,
  paddingLeft:14,
  paddingRight:14



},
title:{
 
  fontSize:18,
  color:"#fff",
  fontWeight:'bold'


}


})
