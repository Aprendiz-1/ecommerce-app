import { ActivityIndicator, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Product from '../screens/Product';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Stack = createStackNavigator();

export default function StackNav() {
  const { loading } = useContext(CartContext);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#f0f0f0',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size={55} color="#df7620" />
      </View>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    );
  }
}
