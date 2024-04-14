import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { products } from '../../products';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Banner, Container, Title, TitleContent } from './styles';

export default function Home() {
  const { cart, addToCart, removeToCart } = useContext(CartContext);
  const categories = [
    { id: '1', name: 'Rosto', icon: require('../../images/categories/face.png') },
    { id: '2', name: 'Mãos', icon: require('../../images/categories/hand.png') },
    { id: '3', name: 'Pés', icon: require('../../images/categories/foot.png') },
    { id: '4', name: 'Corpo', icon: require('../../images/categories/body.png') },
    { id: '5', name: 'Cabelo', icon: require('../../images/categories/hair.png') },
  ];

  return (
    <Container>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <Header items={cart} />

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Banner>
            <Image
              source={require('../../images/banner_img.png')}
              resizeMode="cover"
              style={{ width: '100%', height: '100%', borderRadius: 15 }}
            />
          </Banner>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                  height: 48,
                  marginLeft: 12,
                  backgroundColor: '#ddd',
                  borderRadius: 30,
                }}
              >
                <Image source={item.icon} style={{ width: 23, height: 23, marginRight: 10 }} />
                <Text style={{ color: '#222' }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          <TitleContent>
            <Title>Produtos em destaque</Title>
          </TitleContent>

          <FlatList
            style={{ width: '100%' }}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'center' }}
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ProductCard
                data={item}
                addProduct={() => addToCart(item)}
                removeProduct={() => removeToCart(item)}
                teste={cart.find((prod) => prod.id === item.id) ? true : false}
                cartList={cart}
              />
            )}
          />
        </View>
      </ScrollView>
    </Container>
  );
}
