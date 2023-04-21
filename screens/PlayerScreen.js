import React from "react";
import { View, Text } from "react-native";
import { WebView } from 'react-native-webview';
import { useState,useEffect } from "react";
import constants from "../constants";
import { fetchMovieVideos } from "../components/network/API_request";
export default function PlayerScreen({route}) {
    
    const [videoLink, setVideoLink] = useState("");
    const [errors, setErrors] = useState("");
    const {id} = route.params;
    const getData = async ()=> {
        try {
            var json = await fetchMovieVideos(id);
            if(json.status_message){
                setErrors(json.status_message);
            }
        }
        catch(error) {
            setErrors(error);
        }
        finally{
            if(!json.results.length)
                setErrors("Couldn't find any trailers for this movie");
            else
                setVideoLink(json.results[0].key);    
        }
    }
    useEffect(() =>{
        getData()
    },[])
    if(errors){
        return (
            <View style={{flex:1,justifyContent:"center"}}>
                <Text style={{fontSize:16, textAlign:"center"}}>{errors}</Text>
            </View>
        )
    }
    else{
        return(
            <View style={{flex: 1}}>
                <WebView
                    javaScriptEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/'+ videoLink}}
                    />
            </View>
        )
    }
    
}