import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image,Dimensions} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import Carousel from '../components/Carousel'
const { width } = Dimensions.get('window');
const height = width * 0.6;
const images=[{titulo:'Escanea',src:require('../../assets/restaurant3.jpg')},{titulo:'Ordena',src:require('../../assets/restaurant2.jpg')},{titulo:'Paga',src:require('../../assets/restaurant1.jpeg')},]
const HomeScreen=({navigation})=>{
    return <View>
        <Carousel images={images}/>
        <TouchableOpacity onPress={()=>navigation.navigate('Menu')}>
            <Image style={styles.image}source={require('../../assets/chilis.jpeg')}/>
        </TouchableOpacity>

    </View>
}
HomeScreen.navigationOptions=({navigation})=>{
    
        return{
            headerRight:<TouchableOpacity onPress={()=>navigation.navigate('Sign')}>
                <MaterialIcons style={{paddingHorizontal:20,color:'white'}}size={30} name="person-add"/>
            </TouchableOpacity>
           
        }
    
}
const styles=StyleSheet.create({
    image:{
        width:340,
        height,
        margin:10,
        borderRadius:15
    }
})
export default HomeScreen
