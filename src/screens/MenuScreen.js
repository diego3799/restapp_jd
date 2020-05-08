import React,{useState,useEffect} from 'react';
import { FlatList,View,Text,StyleSheet ,Button} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import MenuList from '../components/MenuList'
import db from '../api/db'
const MenuScreen=()=>{
    const [order,setOrder]=useState([]);
    const Ordenar=(item)=>{
        setOrder(...order,item);
        console.log(order);
    }
    const [menu,setMenu]=useState([]);
    const callApi=async()=>{
        try{
            const response= await db.get('/menu?cve_usuario=1&cve_rest=1');
            console.log(response)
            setMenu(response.data);
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        callApi()
    }, [])
    return <View>
        <Text style={styles.title} >Menu</Text>
        <FlatList
        data={menu}
        keyExtractor={(menu)=> menu.Titulo}
        renderItem={({item})=>{
            return  <MenuList item={item} wanted={(item)=>Ordenar(item)}/>
        }}/>
        <Button title="Ordenar"/>
    </View>
}
MenuScreen.navigationOptions=()=>{
    return{
        title:"Chili's",
        headerRight:<MaterialIcons style={{paddingHorizontal:20,color:'white'}}size={30} name="restaurant-menu"/>

    }
}
const styles=StyleSheet.create({
    title:{
        fontSize:40,
        textAlign:"center",
        borderBottomColor:"black",
        borderBottomWidth:3
    },

})
export default  MenuScreen;