import { RouteProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { api } from '../../services/api';
import { useStripe } from '@stripe/stripe-react-native';
import {
  BackButton,
  ButtonText,
  CheckoutButton,
  Container,
  DescriptionContent,
  DescriptionText,
  DescriptionTitle,
  HeaderContent,
  ProductImage,
  SubTitle,
  SubTitleContent,
  Title,
  TitleContent,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

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
          <Icon name="arrowleft" size={28} color="#222" />
        </BackButton>
      </HeaderContent>

      <ProductImage source={{ uri: `${image}` }} alt="Produto" />

      <TitleContent>
        <Title>{name}</Title>
        <SubTitleContent>
          <SubTitle>R$ {price.toFixed(2)}</SubTitle>
        </SubTitleContent>
      </TitleContent>

      <DescriptionContent>
        <DescriptionTitle>Descrição:</DescriptionTitle>
        <DescriptionText>{description}</DescriptionText>
      </DescriptionContent>

      <CheckoutButton onPress={openPaymentSheet}>
        <ButtonText>Comprar agora</ButtonText>
      </CheckoutButton>
    </Container>
  );
}
