import React,{useState} from 'react'
import { View,Text,StyleSheet} from 'react-native';
import { CheckBox } from 'react-native'
const MenuList=({item,wanted})=>{
    return <View style={styles.container}>
    <View style={styles.maximo}>
    <Text style={styles.titulo}>{item.Titulo}</Text>
    <Text style={styles.descripcion}>{item.Descripcion}</Text>
    </View>
    <View>
        <Text style={styles.descripcion}>${item.Precio}</Text>
    
    </View>
    <View>
        <CheckBox onChange={()=>wanted(item.cve_platillo)}/>
    </View>
</View>
}
const styles=StyleSheet.create({
    maximo:{
        maxWidth:200
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:2,
        borderColor:'black',
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:10,
        alignItems: 'center'
    },
    titulo:{
        fontSize:27,
        borderBottomWidth:1,
        borderColor:'black'
    },
    descripcion:{
        fontSize:24,
        
    }
})
export default MenuList;