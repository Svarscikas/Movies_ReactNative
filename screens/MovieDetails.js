import React from "react";
import { View, Text } from "react-native";
import PopularMovies from "../components/organisms/popularMovies";
export default function MovieDetails({route, navigation}) {
    const {description, title, id} = route.params;
    return(
        <View>
            <Text style={{fontSize:20, textAlign: "center"}}>{title}</Text>
            <Text>{description}</Text>
            <View>
                <PopularMovies type="similiar" id={id}/>
            </View>
        </View>
    )
}