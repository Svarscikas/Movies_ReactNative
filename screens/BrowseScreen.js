import { StyleSheet, Text, View } from 'react-native';
import PopularMovies from '../components/organisms/popularMovies';
export default function BrowseScreen() {

    return (
        <View style={styles.container}>
            <View style={{flex:3, justifyContent:"center"}}>
                <Text style={{paddingLeft: 20}}>Popular Movies</Text>
                <PopularMovies/>
            </View>  
            <View style={{flex: 3}}>
                <Text>Categories</Text>
            </View>
            <View style={{flex: 3}}>
                <Text>Categories</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
});