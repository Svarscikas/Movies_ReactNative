import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MyImage from "../atoms/images/image";
export default function ActorItem(props) {
    return (
        <View style={{flex: 1, alignItems:"center", justifyContent: "center", paddingHorizontal:10}}>
            <MyImage type="actor" imageSource={props.imageLink}></MyImage>
            <Text style={styles.text}>{props.name}</Text>                         
        </View>
    )
    
}
const styles = StyleSheet.create({
    text: {
        color: "white"
    }
})