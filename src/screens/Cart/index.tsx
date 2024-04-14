import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Text, View } from 'react-native';
import {
  BackButton,
  ButtonText,
  ButtonsContent,
  CheckoutButton,
  CleanButton,
  CleanButtonText,
  Container,
  EmptyCart,
  EmptyText,
  HeaderContent,
  Title,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import CartCard from '../../components/CartCard';
import { CartContext } from '../../context/CartContext';
import { api } from '../../services/api';
import { useStripe } from '@stripe/stripe-react-native';

export default function Cart() {
  const { cart, total, addToCart, removeToCart, deleteProduct, cleanCart, loadingClear } =
    useContext(CartContext);
  const navigation = useNavigation();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await api.post('/payment-sheet', { amount: total });
    const { paymentIntent } = response.data;

    return {
      paymentIntent,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: 'E-commerce',
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: true,
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      //Alert.alert(`Error code: ${error.code}`, error.message);
      console.log(`Error: ${error.message}`);
    } else {
      //Alert.alert('Success', 'Your order is confirmed!');
      console.log('Pagamento efetuado!');
      cleanCart();
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  if (loadingClear) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
        }}
      >
        <ActivityIndicator size={55} color="#4e599c" />
      </View>
    );
  } else {
    return (
      <Container>
        <HeaderContent>
          <BackButton onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} color="#fff" />
          </BackButton>
        </HeaderContent>

        <Title>Seu carrinho</Title>

        <FlatList
          data={cart}
          style={{ width: '100%', paddingHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={() => (
            <EmptyCart>
              <EmptyText>O carrinho está vazio!</EmptyText>
            </EmptyCart>
          )}
          renderItem={({ item }) => (
            <CartCard
              data={item}
              addAmount={() => addToCart(item)}
              removeAmount={() => removeToCart(item)}
              deleteItem={() => deleteProduct(item)}
            />
          )}
          ListFooterComponent={() => (
            <ButtonsContent>
              {cart.length > 1 && (
                <CleanButton onPress={() => cleanCart()}>
                  <CleanButtonText>Esvaziar carrinho</CleanButtonText>
                </CleanButton>
              )}

              {cart.length !== 0 && (
                <CheckoutButton onPress={openPaymentSheet}>
                  <ButtonText>Comprar: R$ {total.toFixed(2)}</ButtonText>
                </CheckoutButton>
              )}
            </ButtonsContent>
          )}
        />
      </Container>
    );
  }
}
