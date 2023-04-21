import React from "react";
import { View, Text, ImageBackground,ScrollView } from "react-native";
import PopularMovies from "../components/organisms/popularMovies";
import Button from '../components/atoms/button/Button';
import { useNavigation } from '@react-navigation/native';

export default function MovieDetails({route}) {
    const navigation = useNavigation();
    const {description, title, movieId, year, posterLink} = route.params;
    return(
            <ScrollView>
                <View>
                    <ImageBackground style={{width:'100%', aspectRatio:0.65}} source={{uri:'https://image.tmdb.org/t/p/w500' + posterLink}}>
                        <View style={{ flex:1,backgroundColor:'rgba(0, 0, 0, 0.5)', paddingTop:20, paddingBottom:20}}>
                            <View style>
                                <Text style={{color: "white",fontSize:20, fontWeight:"bold", textAlign: "center"}}>{title}</Text>
                                <Text style={{color: "white",textAlign: "center"}}>{year}</Text>
                                <Text style={{color: "white",textAlign: "center", paddingHorizontal:20}}>{description}</Text>
                            </View>
                            <View style={{alignItems: "center", padding: 10}}>
                                <Button title="Play Trailer" onPress={() => navigation.navigate("Trailer", {
                                    id: movieId
                                })}></Button>
                                <Button title="Add To Library"></Button>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View>
                    <Text style= {{fontSize: 24,paddingLeft: 20, paddingTop: 10,paddingBottom: 10,backgroundColor:"lightblue"}}>Similiar Movies</Text>
                    <PopularMovies type="similiar" id={movieId}/>     
                </View>
            </ScrollView>
    )
}