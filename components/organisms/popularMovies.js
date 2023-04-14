import {useEffect, useState,} from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import constants from "../../constants";
import MyImage from "../atoms/images/image";

export default function PopularMovies() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);


    const getPopularMovies = async () => {
        try {
          const response = await fetch( constants.Base_URL + '3/movie/popular?api_key=' + constants.API_Key + '&language=en-US&page=1');
          const json = await response.json();
          setPopularMovies(json.results);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

    return (
        <View style={{paddingBottom: 10, alignContent:"center", paddingTop: 10, alignItems: "center", justifyContent: "center"}}>
                    {isLoading ? (
                    <ActivityIndicator />
                    ) : (
                    <FlatList
                        data={popularMovies}
                        horizontal={true}
                        keyExtractor={({id})=> id}
                        renderItem={({item}) => (
                            <View style={{flex: 1, alignItems:"center", justifyContent: "center", padding:5}}>
                                <MyImage imageSource={item.backdrop_path}></MyImage>
                                <Text>
                                    {item.title}
                                </Text>
                            </View>
                            
                        )}   
                    >
                    </FlatList>
                    )}
        </View>
    )
}