import {useEffect, useState,} from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MovieItem from "../molecules/movieItem";
import {fetchLatestMovies, fetchPopularMovies, fetchSimiliarMovies, fetchTopRatedMovies} from "../network/API_request";

export default function PopularMovies({type, id}) {
    const [popularMovies, setPopularMovies] = useState([]);
    const [errors, setErrors] = useState("");
    const [isLoading, setLoading] = useState(true);


    const getMovies = async () => {
        try {
            let json;
            switch (type) {
                case 'popular':
                    json = await fetchPopularMovies();
                    break;
                case 'similiar':
                    json = await fetchSimiliarMovies(id);
                    break;
                case 'latest':
                    json = await fetchLatestMovies();
                    break;
                case 'topRated':
                    json = await fetchTopRatedMovies();
                    break;
                default:
                    setErrors("No type provided");
                    break;
                } if (json.status_message || json.errors) {
                    setErrors(json.status_message || json.errors);
                }
                setPopularMovies(json.results);
        } catch (error) {
            setErrors (error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getMovies();
    }, [id]);
    if(errors) {
        return(
            <View style={{flex:1, justifyContent:"center"}}>
                <Text style={{fontSize: 16, textAlign:"center"}}>
                    {errors}
                </Text>
            </View>
        )
    }
    else{
        return (
            <View style={{paddingBottom: 10, alignContent:"center", paddingTop: 10, alignItems: "center", justifyContent: "center"}}>
                        {isLoading ? (
                        <ActivityIndicator size={"large"} />
                        ) : (
                        <FlatList
                            data={popularMovies}
                            showsHorizontalScrollIndicator= {false}
                            horizontal={true}
                            keyExtractor={({id})=> id}
                            renderItem={({item}) => <MovieItem 
                                title={item.title}
                                overview={item.overview}
                                backdrop_path={item.backdrop_path}
                                id={item.id}
                                release_date={item.release_date}
                                poster_path={item.poster_path}
                            />
                            }   
                        />
                        )}
            </View>
        )
    }
   
}