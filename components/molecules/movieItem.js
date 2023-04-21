import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyImage from "../atoms/images/image";
export default function MovieItem(props) {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1, alignItems:"center", justifyContent: "center", padding:5}}>
            <TouchableOpacity onPress={() => navigation.navigate("Details", {
                    title: props.title,
                    description: props.overview,
                    movieId: props.id,
                    year: props.release_date,
                    posterLink: props.poster_path
                })}>
            <MyImage imageSource={props.backdrop_path}></MyImage>
            <Text style={{textAlign:"center", fontSize:16, fontWeight:"bold"}}>
                {props.title}     
            </Text>              
            
            <Text style={{textAlign:"center",fontSize:12}}>{props.release_date}</Text>
            </TouchableOpacity>                               
        </View>
    )
    
}