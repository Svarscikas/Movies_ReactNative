import React from "react";
import { Image } from "react-native";
import constants from "../../../constants";
export default function MyImage({imageSource}) {
    if(imageSource)
    return (
        <Image
            source={{uri:constants.IMAGE_URL + imageSource}}
            style={{width:230, height:150, borderRadius:8, alignSelf: "center"}}
        />
    )
    else {
        return (
            <Image
            source={{uri:"https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"}}
            style={{width:230, height:150, borderRadius:8, aspectRatio:1, alignSelf:"center"}}
        />
        )
    }
}