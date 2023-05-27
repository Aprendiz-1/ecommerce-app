import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CartProvider from './src/context/CartContext';
import StackNav from './src/navigation/StackNavigation';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StripeProvider publishableKey="pk_test_51N4UdRHqqdGqNoZ0U6OAss90sM8cPJ1m99Z0VwX0Bti1Qu8CoG92F2gBpvE6jBXlquiPjMgVwoY0BX4GdjhiTEVM00GDImeINh">
        <CartProvider>
          <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
          <StackNav />
        </CartProvider>
      </StripeProvider>
    </NavigationContainer>
  );
}
