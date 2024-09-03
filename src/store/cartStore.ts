import { create } from "zustand";

export interface CartItemProps {
  id: string;
  name?: string;
  image?: string;
  price?: string;
  quantity?: number;
}

interface CartStore {
  cart: CartItemProps[];
  totalPrice: number;
  isAdded: (id: string) => boolean;
  addItem: (item: CartItemProps) => void;
  removeItem: (id: string, all?: boolean) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  cart: JSON.parse(localStorage.getItem("cart")!) || [],
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")!) || 0,

  isAdded: (id: string) => {
    const { cart } = get();
    return cart.some((cartItem) => cartItem.id === id);
  },

  addItem: (item: CartItemProps) => {
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id,
      );

      const updatedCart = existingItem
        ? state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity! + 1 }
              : cartItem,
          )
        : [item, ...state.cart];

      const updatedTotalPrice = updatedCart.reduce(
        (acc, cartItem) => acc + +cartItem.price! * cartItem.quantity!,
        0,
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      localStorage.setItem("totalPrice", JSON.stringify(updatedTotalPrice));

      return {
        cart: updatedCart,
        totalPrice: updatedTotalPrice,
      };
    });
  },

  removeItem: (id: string, all = false) => {
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        const updatedCart =
          existingItem.quantity! > 1 && !all
            ? state.cart.map((cartItem) =>
                cartItem.id === id
                  ? { ...cartItem, quantity: cartItem.quantity! - 1 }
                  : cartItem,
              )
            : state.cart.filter((cartItem) => cartItem.id !== id);

        const updatedTotalPrice = updatedCart.reduce(
          (acc, cartItem) => acc + +cartItem.price! * cartItem.quantity!,
          0,
        );

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        localStorage.setItem("totalPrice", JSON.stringify(updatedTotalPrice));

        return {
          cart: updatedCart,
          totalPrice: updatedTotalPrice,
        };
      }

      return state;
    });
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("totalPrice");

    set(() => ({
      cart: [],
      totalPrice: 0,
    }));
  },
}));
