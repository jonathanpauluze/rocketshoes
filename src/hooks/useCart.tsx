import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const tempCart = [...cart];
      const { data: productStock } = await api.get<Stock>(`/stock/${productId}`);

      const productInCart = tempCart.find(({ id }) => id === productId);
      
      if (productInCart) {
        const updatedProductAmount = productInCart.amount + 1

        if (updatedProductAmount > productStock.amount) {
          toast.error('Quantidade solicitada fora de estoque');

          return;
        }
        
        productInCart.amount = updatedProductAmount;

        localStorage.setItem('@RocketShoes:cart', JSON.stringify(tempCart));
        setCart(tempCart);
      } else {
        const { data: product } = await api.get<Product>(`/products/${productId}`);

        const newProduct = {
          ...product,
          amount: 1
        };
        
        const updatedCart = [...tempCart, newProduct];

        localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
      }
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productInCart = cart.find(({ id }) => id === productId);

      if (!productInCart) {
        toast.error('Erro na remoção do produto');

        return;
      }

      const updatedCart = cart.filter(({ id }) => id !== productId);

      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) return;

      const { data: productStock } = await api.get<Stock>(`/stock/${productId}`);
      
      if (productStock.amount < amount) {
        toast.error('Quantidade solicitada fora de estoque');

        return;
      }

      const tempCart = [...cart];
      const updatedCart = tempCart.map(product => {
        if (product.id === productId) {
            product.amount = amount;
        }

        return product;
      })
      
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
