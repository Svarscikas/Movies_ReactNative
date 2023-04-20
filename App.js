import HomeScreen from "./screens/HomeScreen"
import BrowseScreen from "./screens/BrowseScreen"
import MovieDetails from "./screens/MovieDetails"
import PlayerScreen from "./screens/PlayerScreen"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Browse" component={BrowseScreen}/>
        <Stack.Screen name ="Details" component= {MovieDetails}/>
        <Stack.Screen name ="Player" component= {PlayerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
