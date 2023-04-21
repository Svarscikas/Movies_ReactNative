import { StyleSheet,Text, StatusBar, ScrollView} from 'react-native';
  
import PopularMovies from '../components/organisms/popularMovies';
export default function BrowseScreen() {

    return (
        <ScrollView>
                <Text style={styles.title}>Popular Movies</Text>
                <PopularMovies type={"popular"}/>
                <Text style={styles.title}>Now Playing</Text>
                <PopularMovies type={"latest"}/>
                <Text style={styles.title}>Top Rated Movies</Text>
                <PopularMovies type={"topRated"}></PopularMovies>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      paddingLeft: 20, 
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor:"lightblue"
    },
  });