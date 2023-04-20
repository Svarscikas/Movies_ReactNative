import {useEffect, useState,} from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import constants from "../../constants";
import MyImage from "../atoms/images/image";
import { useNavigation } from '@react-navigation/native';

export default function PopularMovies({type, id}) {
    const [popularMovies, setPopularMovies] = useState([]);
    const [error, setError] = useState("");
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);


    const getPopularMovies = async () => {
        try {
            var json;
            if (type == "popular") {
                const response = await fetch( constants.Base_URL + '3/movie/popular?api_key=' +constants.API_Key + '&language=en-US&page=1');
                json = await response.json();
                if(json.status_message){
                    setError(json.status_message);
                } 
            }
            if(type == "similiar") {
                const movieId = id;
                const response = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/similar?api_key='+ constants.API_Key+ '&language=en-US&page=1');
                json = await response.json();
                if(json.status_message){
                    setError(json.status_message);
                }
            }
            if(type == "latest") {
                const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0839f265b7b8e52c2ec1711623246e99&language=en-US&page=1');
                json = await response.json();
                if(json.status_message){
                    setError(json.status_message);
                }
            }   
            if(type == "topRated") {
                const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0839f265b7b8e52c2ec1711623246e99&language=en-US&page=1');
                json = await response.json();
                if(json.status_message){
                    setError(json.status_message);
                }
            }
        } catch (error) {
          setError(error);
        } finally {
            
          setLoading(false);
          setPopularMovies(json.results);
        }
    };
    useEffect(() => {
        getPopularMovies();
    }, [id]);
    if(error) {
        return(
            <View style={{flex:1, justifyContent:"center"}}>
                <Text style={{fontSize: 16, textAlign:"center"}}>
                    {error}
                </Text>
            </View>
        )
    }
    else{
        return (
            <View style={{paddingBottom: 10, alignContent:"center", paddingTop: 10, alignItems: "center", justifyContent: "center"}}>
                        {isLoading ? (
                        <ActivityIndicator />
                        ) : (
                        <FlatList
                            data={popularMovies}
                            showsHorizontalScrollIndicator= {false}
                            horizontal={true}
                            keyExtractor={({id})=> id}
                            renderItem={({item}) => (
                                <View style={{flex: 1, alignItems:"center", justifyContent: "center", padding:5}}>
                                    <TouchableOpacity onPress={() => navigation.navigate("Details", {
                                            title: item.title,
                                            description: item.overview,
                                            movieId: item.id,
                                        })}>
                                        <MyImage imageSource={item.backdrop_path}></MyImage>
                                        <Text style={{textAlign:"center", fontSize:16}}>
                                            {item.title}
                                        </Text>
                                    </TouchableOpacity>
                                    
                                    
                                </View>
                                
                            )}   
                        >
                        </FlatList>
                        )}
            </View>
        )
    }
   
}