import React from "react";
import { View, Text } from "react-native";
import PopularMovies from "../components/organisms/popularMovies";
import Button from '../components/atoms/button/Button';
import { useNavigation } from '@react-navigation/native';
export default function MovieDetails({route}) {
    const navigation = useNavigation();
    const {description, title, movieId} = route.params;
    return(
        <View>
            <Text style={{paddingTop: 10,fontSize:20, textAlign: "center"}}>{title}</Text>
            <Text style={{paddingHorizontal:10, paddingVertical: 10}}>{description}</Text>
            <View>
                
                <Button title="Play Movie" onPress={() => navigation.navigate("Player", {
                    id: movieId
                })}></Button>
                <Button title="Add To Library"></Button>
                <Text style= {{fontSize: 24,paddingLeft: 20, paddingTop: 10,paddingBottom: 10,backgroundColor:"lightblue"}}>Similiar Movies</Text>
                <PopularMovies type="similiar" id={movieId}/>
            </View>
        </View>
    )
}