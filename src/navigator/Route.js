import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import UserDetails from '../screens/UserDetails';

export default function Route() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="User" component={UserDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}