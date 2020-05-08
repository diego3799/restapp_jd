
import React from 'react';
import { View, Text,ScrollView, Image, StyleSheet, Dimensions,ImageBackground,FlatList} from 'react-native';
import {Fonts} from './../utils/Fonts'
const { width } = Dimensions.get('window');
console.log(width)
const height = width * 0.6;
var i=0;
const Carousel=({images})=>{
    if (images && images.length) {
        return (
          <View
            style={styles.scrollContainer}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={true}
            >
              <FlatList
              data={images}
              horizontal
              keyExtractor={(images)=>`${images.src}`}
              renderItem={({item})=>{
                  return  <View style={{padding:10}}>
                    <Text style={styles.titulos}>{item.titulo}</Text>
                    <Image source={item.src} style={styles.image}/>
                    </View>
              }}/>
                         
            </ScrollView>
          </View>
        );
      }
      else
      {console.log('Please provide images');
    return null;}    
}

const styles = StyleSheet.create({
  image: {
    width:340,
    height,
  },
  titulos:{
    fontSize:30,
    alignSelf:"center",
  }
});
export default Carousel;