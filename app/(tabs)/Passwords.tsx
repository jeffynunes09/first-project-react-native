import { View,Text,StyleSheet } from "react-native"
import { useState,useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useIsFocused } from "@react-navigation/native"
import useStorage from "@/hooks/useStorage"
import { FlatList } from "react-native-gesture-handler"
import PasswordItem from "@/components/passwordItem"
export default function Passwords() {

  const [listPass, setListPass] = useState([])
  const focused = useIsFocused()
  const {getItem,removeItem} = useStorage()

  useEffect(() => {
 
 async function loadPasswords (){
  const passwords = await getItem('@pass')
  setListPass(passwords)
 }
 
loadPasswords()
  },[focused])
   

  async function handleDeletePass(item:[]) {

    const passwords = await removeItem('@pass',item)
    setListPass(passwords)
    alert('Senha deletada!')
    
  }


  return (
   
    <SafeAreaView style={{flex:1}}>

      <View style={styles.header}>
        <Text style={styles.title}>
          Minhas Senhas
        </Text>
      </View>
      <View style={styles.content}>
        <FlatList
        style={{flex:1, paddingTop:14}}
         data={listPass}
         keyExtractor={(item) => String(item)}
         renderItem={({item}) => <PasswordItem removePass={ () => {handleDeletePass(item)} } data={item}></PasswordItem>}
        />
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


},content:{
 flex:1,
 paddingLeft:14,
 paddingRight:14,
},
pass:{

}

})
