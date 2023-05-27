import {AmountCircle, AmountText, HeaderContainer, NavButton} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

type CartItemsProps = {
  id: number;
  amount: number;
  total: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

interface HeaderProps {
  items: CartItemsProps[];
}

export default function Header({items}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      <NavButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="cart" size={30} color="#222" />

        {items.length !== 0 && (
          <AmountCircle>
            <AmountText>{items.length}</AmountText>
          </AmountCircle>
        )}
      </NavButton>
    </HeaderContainer>
  );
}
