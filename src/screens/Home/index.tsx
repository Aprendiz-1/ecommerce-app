import { FlatList, SafeAreaView } from 'react-native';
import { products } from '../../products';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Home() {
  const { cart, addToCart, removeToCart } = useContext(CartContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <Header items={cart} />
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
    </SafeAreaView>
  );
}
