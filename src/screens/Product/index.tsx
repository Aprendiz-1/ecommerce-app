import { RouteProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { api } from '../../services/api';
import { useStripe } from '@stripe/stripe-react-native';
import {
  AddToCartButton,
  BackButton,
  ButtonText,
  CartButtonText,
  CheckoutButton,
  Container,
  DescriptionContent,
  DescriptionText,
  DescriptionTitle,
  HeaderContent,
  ProductContent,
  ProductImage,
  SubTitle,
  Title,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

type ProductProps = {
  Product: {
    name: string;
    description: string;
    price: number;
    image: string;
  };
};

type ProductRouteProps = RouteProp<ProductProps, 'Product'>;

interface ScreenProps {
  route: ProductRouteProps;
}

export default function Product({ route }: ScreenProps) {
  const navigation = useNavigation();
  const { name, description, price, image } = route.params;
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await api.post('/payment-sheet', { amount: price });
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
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <Container>
      <HeaderContent>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={28} color="#fff" />
        </BackButton>
      </HeaderContent>

      <ProductContent>
        <ProductImage source={image} alt="Produto" />
        <Feather name="arrow-right" size={38} color="#fff" />
      </ProductContent>

      <DescriptionContent>
        <Title>{name}</Title>
        <SubTitle>R$ {price.toFixed(2)}</SubTitle>

        <View style={{ width: '100%', height: 1, backgroundColor: '#555', marginVertical: 15 }} />

        <DescriptionTitle>Descrição</DescriptionTitle>
        <DescriptionText>{description}</DescriptionText>

        <AddToCartButton onPress={null}>
          <CartButtonText>Adicionar ao carrinho</CartButtonText>
        </AddToCartButton>

        <CheckoutButton onPress={openPaymentSheet}>
          <ButtonText>Comprar agora</ButtonText>
        </CheckoutButton>
      </DescriptionContent>
    </Container>
  );
}
