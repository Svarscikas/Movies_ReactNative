import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/atoms/button/Button"
import MyTextInput from "../components/atoms/input/textInput";
export default function LoginScreen() {


    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <View>
                <Text style={styles.label}>Username</Text>
                <MyTextInput placeHolder="Enter your username..."></MyTextInput>
            </View>
            <View>
                <Text style={styles.label}>Password</Text>
                <MyTextInput placeHolder="Enter your password..."></MyTextInput>
            </View>
            
            <Button title="Login"></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    label :{
        paddingVertical:5, 
        fontSize: 16
    }
});