import React from "react";
import { View, Text } from "react-native";
import { WebView } from 'react-native-webview';
import { useState,useEffect } from "react";
import constants from "../constants";
export default function PlayerScreen({route}) {
    
    const [videoLink, setVideoLink] = useState("");
    const [error, setError] = useState("");
    const {id} = route.params;
    const getData = async ()=> {
        try {
            //console.log('https://api.themoviedb.org/3/movie/'+ id +'/videos?api_key='+ constants.API_Key + '&language=en-US')
            const response = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?api_key='+ constants.API_Key + '&language=en-US')
            var json = await response.json();
            if(json.status_message){
                setError(json.status_message);
            }
        }
        catch(error) {
            setError(error);
        }
        finally{
            setVideoLink(json.results[0].key);
        }
    }
    useEffect(() =>{
        getData()
    },[])
    if(error){
        return (
            <View style={{flex:1,justifyContent:"center"}}>
                <Text style={{fontSize:16, textAlign:"center"}}>{error}</Text>
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