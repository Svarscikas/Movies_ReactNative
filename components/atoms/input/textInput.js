import React from "react";
import { TextInput } from "react-native";
export default function MyTextInput({placeHolder}) {
    return (
        <TextInput placeholder={placeHolder} style={{paddingHorizontal: 10,padding: 5,borderColor: "black", borderWidth: 1, width: 200, fontSize:16, borderRadius:5}}>

        </TextInput>
    )
    
}