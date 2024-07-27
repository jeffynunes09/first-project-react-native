import { View,Text,StyleSheet,Image, Touchable } from "react-native";
export function ModalPassword (){

    return(
        <View  style={styles.container}>
         <View  style={styles.content}>
            <Text>SENHA GERADA</Text>
         </View>
        </View>
    )
}



const styles = StyleSheet.create({
 
    container:{
        backgroundColor:'RGBA(24,24,24,0.6)',
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    content:{
        backgroundColor:'#fff',
        width:'85%',
        paddingBottom:24,
        paddingTop:24,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    }

})