import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './views/Cart';
import Detail from './views/Detail';
import Home from './views/Home';
import Start from './views/Start';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={'Start'} screenOptions={{headerShown:false}}>
              {/* <Stack.Screen name='Start' component={Start}/>
              <Stack.Screen name='Home' component={Home}/>
              <Stack.Screen name='Detail' component={Detail}/>
              <Stack.Screen name='Cart' component={Cart}/> */}
              <Stack.Screen name='Start' component={Start}/>
              <Stack.Screen name='Home' component={Home}/>
              <Stack.Screen name='Detail' component={Detail}/>
            <Stack.Screen name='Cart' component={Cart}/>

              
          </Stack.Navigator>
      </NavigationContainer>
    );
}