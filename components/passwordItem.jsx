import { View,Text, StyleSheet,Pressable } from "react-native"

const PasswordItem = ({data,removePass}) => {
  return (
    <Pressable style={styles.container} onLongPress={removePass}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  )
}

export default PasswordItem


const styles = StyleSheet.create({

  container:{
    backgroundColor:'#0e0e0e',
    padding:14,
    width:'100%',
    marginBottom:14,
    borderRadius:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'


  },
  text:{
    color:'#fff'
  }

})