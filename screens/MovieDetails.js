import React from "react";
import { View, Text } from "react-native";
import PopularMovies from "../components/organisms/popularMovies";
export default function MovieDetails({route, navigation}) {
    const {description, title, movieId} = route.params;
    return(
        <View>
            <Text style={{paddingTop: 10,fontSize:20, textAlign: "center"}}>{title}</Text>
            <Text style={{paddingHorizontal:10, paddingVertical: 10}}>{description}</Text>
            <View>
                <Text style= {{fontSize:16}}>Similiar movies</Text>
                <PopularMovies type="similiar" id={movieId}/>
            </View>
        </View>
    )
}