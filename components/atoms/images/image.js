import React from "react";
import { Image, StyleSheet } from "react-native";
import constants from "../../../constants";
export default function MyImage({imageSource, type}) {
    if(imageSource)
    {
        switch(type) {
            case "movie":
                return (
                    <Image
                        source={{uri:constants.IMAGE_URL + imageSource}}
                        style={styles.movieImage}
                    />
                )
                break;
            case "actor":
                return (
                    <Image
                        source={{uri:constants.IMAGE_URL + imageSource}}
                        style={styles.actorImage}
                    />
                )
                break;
            default : 
                return (
                <Image
                source={{uri:"https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"}}
                style={{width:230, height:150, borderRadius:8, aspectRatio:1, alignSelf:"center"}}
                />
                )
        }
       
    }
    
    else {
        switch(type) {
            case "movie":
                return (
                    <Image
                        source={{uri:"https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"}}
                        style={{width:230, height:150, borderRadius:8, aspectRatio:1, alignSelf:"center"}}
                    />
                )
                break;
            case "actor":
                return (
                    <Image
                        source={{uri:"https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"}}
                        style={styles.actorImage}
                    />
                )
                break;
            default : 
                return (
                <Image
                source={{uri:"https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"}}
                style={{width:230, height:150, borderRadius:8, aspectRatio:1, alignSelf:"center"}}
                />
                )
        }
    }
}
const styles = StyleSheet.create({
    movieImage :{
        width:230, 
        height:150, 
        borderRadius:8, 
        alignSelf: "center"
    },
    actorImage :{
        width:80, 
        height:80, 
        borderRadius:50, 
        alignSelf: "center"
    }
});