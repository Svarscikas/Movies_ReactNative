import {React, useState, useEffect, useCallback} from "react";
import { StyleSheet, Text, View, TextInput, Linking } from "react-native";
import Button from "../components/atoms/button/Button"
export default function LoginScreen({navigation}) {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[token, setToken] = useState('');
    let url = "https://www.themoviedb.org/authenticate/";

    useEffect(()=> {
        fetchToken();
    },[])
    

    const fetchToken = async () => {
        const response = await fetch('https://api.themoviedb.org/3/authentication/token/new?api_key=0839f265b7b8e52c2ec1711623246e99')
        const json = await response.json();
        //Linking.openURL(url + json.request_token)
        setToken(json.request_token)
    }

    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <View>
                <Text style={styles.label}>Username</Text>
                <TextInput 
                style={styles.input} 
                placeHolder="Enter your username..."
                defaultValue={username}
                onChangeText={newText => setUsername(newText)}></TextInput>
            </View>
            <View>
                <Text style={styles.label}>Password</Text>
                <TextInput 
                style={styles.input}
                placeHolder="Enter your password..."
                onChangeText={newText => setPassword(newText)}
                defaultValue={password}>
                </TextInput>
            </View>
            <Text>
                {token}
            </Text>
            <Button onPress={() => fetchToken()} title="Login"></Button>
        </View>
    )
    
}


const styles = StyleSheet.create({
    label :{
        paddingVertical:5, 
        fontSize: 16
    },
    input :{
        paddingHorizontal: 10,
        padding: 5,
        borderColor: "black", 
        borderWidth: 1, 
        width: 200, 
        fontSize:16,
        borderRadius:5
    }
});