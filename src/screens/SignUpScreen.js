import React,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,Button,TouchableOpacity} from 'react-native';
import db from '../api/db'
const  SignUpScreen=({navigation})=>{
    const [name,setName]=useState('');
    const [lastName,setLastName]=useState('');
    const [userName,setUserName]=useState('');
    const [mail,setMail]=useState('');
    const [password,setPass]=useState('');

    return<View style={styles.container}>
        <View style={{display:'flex'}}>
            <Text style={styles.Text}>Nombre:</Text>
            <TextInput autoCapitalize={"none"}  style={styles.Input} value={name} onChangeText={(name)=>setName(name)}/>
            <Text style={styles.Text}>Apellidos:</Text>
            <TextInput autoCapitalize={"none"}  style={styles.Input} value={lastName} onChangeText={(lastName)=>setLastName(lastName)}/>
        </View>
        
       <Text style={styles.Text}>UserName:</Text>
       <TextInput autoCapitalize={"none"}  style={styles.Input} value={userName} onChangeText={(userName)=>setUserName(userName)}/>
        <Text style={styles.Text}>E-Mail:</Text>
       <TextInput autoCapitalize={"none"}  style={styles.Input} value={mail} onChangeText={(mail)=>setMail(mail)}/>
       <Text style={styles.Text}>Password:</Text>
       <TextInput style={styles.Input} secureTextEntry={true} autoCapitalize={"none"} autoCompleteType={"password"} value={password} onChangeText={(content)=>setPass(content)}/>
       <Button title="Send" 
       onPress={ async()=>{
            console.log("name")
            try{await db.post('/user',User={name,lastName,userName,mail,password});
            navigation.pop(); }catch(e){
                console.log(e)
            }
        }}
       />
    </View>
}
SignUpScreen.navigationOptions=()=>{
    return{
        title:"Sign in"
    }
}
const styles=StyleSheet.create({
    Text:{
    fontSize:18,
    marginBottom: 5,
    marginLeft:5,
    alignSelf:'flex-start'
    
    },
    container:{
        flex:1,
    },
    Input:{
    borderWidth:1,
    fontSize:15,
    borderColor:'black',
    padding:5,
    margin:5,
    marginHorizontal:10
},});
export default SignUpScreen;