import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartData {
  cart: CartItemsProps[];
  addToCart: (credentials: ProductProps) => void;
  removeToCart: (credentials: ProductProps) => void;
  deleteProduct: (credentials: ProductProps) => void;
  cleanCart: () => Promise<void>;
  total: number;
  loading: boolean;
  loadingClear: boolean;
}

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

type CartProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartData);

export default function CartProvider({ children }: CartProps) {
  const [cart, setCart] = useState<Array<CartItemsProps>>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingClear, setLoadingClear] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage() {
      const storage = await AsyncStorage.getItem('cartItems');
      const totalValue = await AsyncStorage.getItem('totalCart');

      if (storage && totalValue) {
        setCart(JSON.parse(storage));
        setTotal(JSON.parse(totalValue));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  function addToCart(newItem: ProductProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      let cartList = cart;
      cartList[indexItem].amount += 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      storageCart(cartList);
      totalResult(cartList);
      return;
    }

    let data = { ...newItem, amount: 1, total: newItem.price };
    setCart((products) => [...products, data]);
    storageCart([...cart, data]);
    totalResult([...cart, data]);
  }

  function removeToCart(product: ProductProps) {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      let cartList = cart;
      cartList[indexItem].amount -= 1;
      cartList[indexItem].total -= cartList[indexItem].price;

      setCart(cartList);
      storageCart(cartList);
      totalResult(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
    storageCart(removeItem);
    totalResult(removeItem);
  }

  function deleteProduct(product: ProductProps) {
    const productsList = cart.filter((item) => item.id !== product.id);
    setCart(productsList);
    storageCart(productsList);
    totalResult(productsList);
  }

  async function cleanCart() {
    setLoadingClear(true);

    await AsyncStorage.clear();
    setCart([]);
    setTotal(0);

    setLoadingClear(false);
    navigation.navigate('Home');
  }

  function totalResult(items: Array<CartItemsProps>) {
    let myCart = items;
    let result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    setTotal(result);
    storageTotal(result);
  }

  async function storageCart(data: Array<CartItemsProps>) {
    await AsyncStorage.setItem('cartItems', JSON.stringify(data));
  }

  async function storageTotal(value: number) {
    await AsyncStorage.setItem('totalCart', JSON.stringify(value));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeToCart,
        deleteProduct,
        cleanCart,
        total,
        loading,
        loadingClear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
