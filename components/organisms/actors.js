import React from "react";
import {useEffect, useState,} from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import ActorItem from "../molecules/actorItem";
import { fetchCastAndCrew } from "../network/API_request";
export default function Actors({id}) {

    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState("");

    const getActors = async () => {
        try {
            json = await fetchCastAndCrew(id);
            if(json.cast.length == 0) {
                setErrors("No cast found")
            }
            setActors(json.cast)
            
        } catch (error) {
            setErrors(error)
        } finally {
            //setActors(json.cast)
            setLoading(false);
        }
    }
    useEffect(() => {
        getActors();
    }, [id]);
    if(actors && !errors) {
        return(
            <View style= {styles.container}>
                <FlatList
                data={actors}
                horizontal={true}
                renderItem={({item}) => <ActorItem imageLink={item.profile_path} name={item.name}/>}
                keyExtractor={item => item.id}
                >
                </FlatList>
            </View>
        )
    }
    if(errors) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{errors}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    error :{
        fontSize:20,
        color: "white",
        textAlign:"center"
    },
    text :{
        color: 'black',
    },
    container: {
        width: "100%",
        justifyContent:"center",
        height: 150,
        backgroundColor:"rgba(52,52,52,1)",
    }
});