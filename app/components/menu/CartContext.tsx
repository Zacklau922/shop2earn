import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

// Define the type for your items
interface Item {
  id: number;
  name: string;
  description: string; // Include this property
  quantity: number;
  // Add other properties as needed
}

interface CartContextType {
  cartItems: Item[];
  addToCart: (item: Item) => void;
}

// Create the context with an initial empty state and types
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Item[]>(() => {
    // Retrieve cart data from local storage when the app loads
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Item) => {
    // Logic to add item to cart
    setCartItems((prevItems) => {
      // Check if item already exists in the cart
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        // If item exists, increase its quantity
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // If item doesn't exist, add it to the cart
        return [...prevItems, item];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
