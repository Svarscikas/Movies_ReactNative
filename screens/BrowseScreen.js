import {
StyleSheet,Text,View,SafeAreaView,SectionList,StatusBar,} from 'react-native';
  
import PopularMovies from '../components/organisms/popularMovies';
export default function BrowseScreen() {

    return (
        <View style={styles.container}>
            <View style={{flex:3, justifyContent:"center"}}>
                <Text style={{paddingLeft: 20}}>Popular Movies</Text>
                <PopularMovies type={"popular"}/>
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
    },
  });