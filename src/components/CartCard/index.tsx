import {useState} from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  AmountButton,
  AmountContent,
  AmountText,
  ButtonsContent,
  BuyButton,
  BuyText,
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

export default function CartCard({
  data,
  addAmount,
  removeAmount,
  deleteItem,
}: CardProps) {
  const [amount, setAmount] = useState(data.amount);
  const navigation = useNavigation();

  function addItem() {
    addAmount();
    setAmount(item => item + 1);
  }

  function removeItem() {
    removeAmount();

    if (amount === 0) {
      setAmount(0);
      return;
    }

    setAmount(item => item - 1);
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
      }>
      <LeftContent>
        <Image
          source={{uri: `${data.image}`}}
          alt="Produto"
          style={{width: 110, height: 110}}
        />
      </LeftContent>

      <RightContent>
        <Name>{data?.name}</Name>
        <Price>R$ {data?.total.toFixed(2)}</Price>

        <AmountContent>
          <AmountButton onPress={removeItem}>
            <AmountText>-</AmountText>
          </AmountButton>

          <AmountText>{amount}</AmountText>

          <AmountButton onPress={addItem}>
            <AmountText>+</AmountText>
          </AmountButton>
        </AmountContent>

        <ButtonsContent>
          {/* <BuyButton onPress={null}>
            <BuyText>Buy</BuyText>
          </BuyButton> */}

          <RemoveButton onPress={() => deleteItem()}>
            <Icon name="trash" size={30} color="#fff" />
          </RemoveButton>
        </ButtonsContent>
      </RightContent>
    </Container>
  );
}
