import React from "react";
import { View, Text } from "react-native";
import { WebView } from 'react-native-webview';
import { useState,useEffect } from "react";
import constants from "../constants";
export default function PlayerScreen({route}) {
    
    const [videoLink, setVideoLink] = useState("");

    const {id} = route.params;
    const getData = async ()=> {
        try {
            //console.log('https://api.themoviedb.org/3/movie/'+ id +'/videos?api_key='+ constants.API_Key + '&language=en-US')
            const response = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?api_key='+ constants.API_Key + '&language=en-US')
            const json = await response.json();
            setVideoLink(json.results[0].key);
        }
        catch(error) {
            console.log(error);
        }
        finally {

        }
    }
    useEffect(() =>{
        getData()
    },[])
    return(
        <View style={{flex: 1}}>
            <WebView
                javaScriptEnabled={true}
                source={{uri: 'https://www.youtube.com/embed/'+ videoLink}}
                />
        </View>
    )
}