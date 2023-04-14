import React from "react";
import { Image } from "react-native";
import constants from "../../../constants";
export default function MyImage({imageSource}) {
    return (
        <Image
        source={{uri:constants.IMAGE_URL + imageSource}}
        style={{width:230, height:150, borderRadius:8}}
        >
        </Image>
    )
}