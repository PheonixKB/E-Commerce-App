import ProductProvider from "./product/ProductProvider";
import ToastProvider from "./toast/ToastProvider";
import CartProvider from "./cart/CartProvider";
import CheckoutProvider from "./checkout/CheckoutProvider";
import UIProvider from "./ui/UIProvider";

// Order matters here:
// - CartProvider reads from ProductContext (productMap) and ToastContext (showToast),
//   so both must be ancestors of CartProvider.
// - CheckoutProvider reads from CartContext (cartItems), so CartProvider must be
//   its ancestor.
// - UIProvider has no dependencies, so its position doesn't matter, but it's kept
//   outermost-adjacent for readability.
const ShopProvider = ({ children }) => {
  return (
    <UIProvider>
      <ProductProvider>
        <ToastProvider>
          <CartProvider>
            <CheckoutProvider>{children}</CheckoutProvider>
          </CartProvider>
        </ToastProvider>
      </ProductProvider>
    </UIProvider>
  );
};

export default ShopProvider;
