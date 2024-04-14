import { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  AmountButton,
  AmountText,
  ButtonsContent,
  BuyProductText,
  CartProductContainer,
  Container,
  LeftContent,
  Name,
  Price,
  RemoveButton,
  RightContent,
} from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';

type ProductProps = {
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
  addAmount: () => void;
  removeAmount: () => void;
  deleteItem: () => void;
}

export default function CartCard({ data, addAmount, removeAmount, deleteItem }: CardProps) {
  const [amount, setAmount] = useState(data.amount);
  const navigation = useNavigation();

  function addItem() {
    addAmount();
    setAmount((item) => item + 1);
  }

  function removeItem() {
    removeAmount();

    if (amount === 0) {
      setAmount(0);
      return;
    }

    setAmount((item) => item - 1);
  }

  return (
    <CartProductContainer>
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
        <LeftContent>
          <Image source={data.image} alt="Produto" style={{ width: 110, height: 110 }} />
        </LeftContent>

        <RightContent>
          <View>
            <Name>{data?.name}</Name>
            <Price>R$ {data?.total.toFixed(2)}</Price>
          </View>

          <ButtonsContent>
            <AmountButton onPress={removeItem}>
              <AmountText>-</AmountText>
            </AmountButton>

            <AmountText>{amount}</AmountText>

            <AmountButton onPress={addItem}>
              <AmountText>+</AmountText>
            </AmountButton>

            <RemoveButton onPress={() => deleteItem()}>
              <Icon name="trash" size={30} color="#fff" />
            </RemoveButton>
          </ButtonsContent>
        </RightContent>
      </Container>

      <TouchableOpacity style={{ width: '100%', alignItems: 'center' }}>
        <BuyProductText>Comprar</BuyProductText>
      </TouchableOpacity>
    </CartProductContainer>
  );
}
