import Slider from "@react-native-community/slider";
import { View,Text,StyleSheet,Image, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import {ModalPassword}  from "../../components/modal/index.jsx"


let charset = "abcdefghijklmnopqrstuwyz1234567890ABCDEFGHIJKLMNOPQRSTUWYZ"

export default function Home (){
  

    const [size,setSize] = useState<number>(10)
    const [pass, setPass] =useState('')
    const [modalVisible, setModalVisible] =useState(false)



    const generationPassword = () => {
       
      let password = 'a'

      for(let i = 0, n = charset.length; i < size; i++){

        password += charset.charAt(Math.floor(Math.random() *  n))
      }
    
       setPass(password)
       setModalVisible(true)
      

    }




    return (
        <View style={styles.container}>
           
             <Image source={require("../../assets/images/logo.png")}
              style={styles.logo}
              ></Image>
             <Text 
              style={styles.title}>
                {size} Caracteres
             </Text>

             <View style={styles.area}>
                <Slider
                style=
                {{height:50 ,cursor:'pointer'}}
                minimumValue={6}
                maximumValue={20}
                value={size}
                onValueChange={(value) => setSize(parseFloat(value.toFixed(0)))}
                >

                </Slider>
                <TouchableOpacity style={styles.button} onPress={generationPassword}>
                <Text style={styles.buttonText}>
                    GERAR SENHA
                </Text>
             </TouchableOpacity>
             <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <ModalPassword pass={pass} handleClose={() => setModalVisible(false)}></ModalPassword>
             </Modal>
             </View>

            
        </View>
    )
}


const styles = StyleSheet.create({

    container : {
        flex:1,
        backgroundColor:"#f3f3ff",
        justifyContent:"center",
        alignItems:"center"
        
    },
    Text:{
        marginTop:34
    },
    logo: {
        marginBottom:60,
       
    },
    title:{
        fontWeight:900
    },
    area:{
        marginTop:14,
        marginBottom:14,
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:8,
        padding:8,
        
    },
    button:{
        backgroundColor:'#392de9',
        width:"100%",
        height:50,
        alignItems:'center',
        justifyContent:'center' ,
        borderRadius:8,
        marginBottom:18,
        cursor:'pointer'


    },
    buttonText:{
        color:'#fff',
        padding:10,
        fontSize:20,
    }
})