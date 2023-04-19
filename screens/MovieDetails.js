import React from "react";
import { View, Text } from "react-native";
import PopularMovies from "../components/organisms/popularMovies";
import Button from '../components/atoms/button/Button';

export default function MovieDetails({route, navigation}) {
    const {description, title, movieId} = route.params;
    return(
        <View>
            <Text style={{paddingTop: 10,fontSize:20, textAlign: "center"}}>{title}</Text>
            <Text style={{paddingHorizontal:10, paddingVertical: 10}}>{description}</Text>
            <View>
                
                <Button title="Play Movie"></Button>
                <Button title="Add To Library"></Button>
                <Text style= {{fontSize: 24,paddingLeft: 20, paddingTop: 10}}>Similiar movies</Text>
                <PopularMovies type="similiar" id={movieId}/>
            </View>
        </View>
    )
}