import { View,Text,StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';
import useStorage from '../../hooks/useStorage'



export function ModalPassword ({pass,handleClose}){
    
   async function handleCopyPassword(){
    const {saveItem} = useStorage()
    await Clipboard.setStringAsync(pass)
      alert('Senha Salva!')
      await saveItem('@pass',pass)
      handleClose()
   }
   

    return(
        <View  style={styles.container}>
         <View  style={styles.content}>
            <Text style={styles.title}>SENHA GERADA</Text>
            <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                <Text style={styles.text}>{pass}</Text>
            </Pressable>

            <View style={styles.buttonArea}>
             <TouchableOpacity style={styles.button} onPress={handleClose}>
                <Text style={styles.buttonText} >Voltar</Text>
             </TouchableOpacity>
             <TouchableOpacity style={[styles.save,styles.button]} onPress={handleCopyPassword}>
             <Text style={[styles.buttonText,styles.textSave]}>Salvar Senha</Text>
             </TouchableOpacity>
            </View>
         </View>
        </View>
    )
}



const styles = StyleSheet.create({
 
    container:{
        backgroundColor:'rgba(24, 24, 24, 0.536)',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,

    },
    content:{
        backgroundColor:'#fff',
        width:'85%',
        paddingBottom:24,
        paddingTop:24,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    title:{
        fontSize:20,
        fontWeight: "bold",
        color:"#000",
        marginBottom:24,
    },
    innerPassword:{
        backgroundColor:'#0e0e0e',
        width:'90%',
        paddingTop:14,
        paddingBottom:14,
        borderRadius:8,

    },
    text:{

        color:'#fff',
        textAlign:'center'
    },
    buttonArea:{
        flexDirection:'row',
        width:"90%",
        marginTop:9,
        alignItems:'center',
        justifyContent:'center'

    },
    button:{
        flex:1,
        alignItems:'center',
        marginTop:14,
        marginBottom:14,
        padding:10,
        borderRadius:8

    },
    save:{
    
        backgroundColor:'#111',
        
    },
    textSave:{
        color:'#fff'
    }


})