import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useQuery } from "react-query";

interface CartProviderProps {
  children: ReactNode;
}

export interface Product {
  id: number;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

interface CartContextData {
  cart: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
  cartItems: Product[];
  getTotalItems: (items: Product[]) => number;
  addToCart: (itemSelected: Product) => void;
  removeToCart: (id: number) => void;
  getTotalPrice: () => string;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

async function getAllFakeProducts() {
  const response = await axios.get<Product[]>(
    "https://fakestoreapi.com/products"
  );
  return response.data;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState([] as Product[]);
  const { data, isLoading, isError } = useQuery<Product[]>(
    "products",
    getAllFakeProducts
  );

  function getTotalPrice() {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.amount,
      0
    );
    return total.toFixed(2);
  }

  function getTotalItems(items: Product[]) {
    const quantity = items.reduce(
      (accumalator, item) => accumalator + item.amount,
      0
    );
    return quantity;
  }

  function addToCart(itemSelected: Product) {
    try {
      const updatedCart = [...cartItems];

      if (updatedCart.length === 0) {
        setCartItems([...cartItems, { ...itemSelected, amount: 1 }]);
      }

      const productExists = updatedCart.find(
        (item) => item.id === itemSelected.id
      );

      const currentAmount = productExists ? productExists.amount : 0;

      const amount = currentAmount + 1;

      if (productExists) {
        productExists.amount = amount;
      } else {
        const newProduct = {
          ...itemSelected,
          amount: 1,
        };

        updatedCart.push(newProduct);
      }
      setCartItems(updatedCart);
    } catch (error) {
      console.log(error);
    }
  }

  function removeToCart(id: number) {
    try {
      const removeItem = cartItems.reduce((accumulator, item) => {
        // verify if the item is the same item selected.
        if (item.id === id) {
          // if the item amount equals one return the accumulator
          if (item.amount === 1) return accumulator;

          // if the item select there are some amounts decrement
          return [...accumulator, { ...item, amount: item.amount - 1 }];
        } else {
          // return the accumulator and item.
          return [...accumulator, item];
        }
      }, [] as Product[]);

      setCartItems(removeItem);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart: data,
        isLoading,
        isError,
        cartItems,
        getTotalItems,
        addToCart,
        removeToCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useFakeStore() {
  const context = useContext(CartContext);
  return context;
}
