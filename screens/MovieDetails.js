import React from "react";
import { View, Text } from "react-native";
import PopularMovies from "../components/organisms/popularMovies";
export default function MovieDetails({route, navigation}) {
    const {description, title, movieId} = route.params;
    return(
        <View>
            <Text style={{fontSize:20, textAlign: "center"}}>{title}</Text>
            <Text>{description} {movieId}</Text>
            <View>
                <PopularMovies type="similiar" id={movieId}/>
            </View>
        </View>
    )
}