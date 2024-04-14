import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartButton, Container, ImageContent, InfoContent, Name, Price } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type CartItemsProps = {
  id: number;
  amount: number;
  total: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

interface CardProps {
  data: ProductProps;
  addProduct: () => void;
  removeProduct: () => void;
  teste: boolean;
  cartList: CartItemsProps[];
}

export default function ProductCard({
  data,
  addProduct,
  removeProduct,
  teste,
  cartList,
}: CardProps) {
  const navigation = useNavigation();

  function adicionar() {
    const findItem = cartList.find((item) => item.id === data.id);

    if (findItem) {
      removeProduct();
    } else {
      addProduct();
    }
  }

  return (
    <Container
      onPress={() =>
        navigation.navigate('Product', {
          name: data.name,
          description: data.description,
          price: data.price,
          image: data.image,
        })
      }
    >
      <CartButton btColor={!teste ? '#ddd' : '#717E25'} onPress={adicionar}>
        <Icon name="shopping-basket" size={18} color={!teste ? '#222' : '#fff'} />
      </CartButton>

      <ImageContent>
        <Image source={data.image} style={{ width: 100, height: 100 }} />
      </ImageContent>

      <InfoContent>
        <Name>{data.name}</Name>
        <Price>R$ {data.price.toFixed(2)}</Price>
      </InfoContent>
    </Container>
  );
}
