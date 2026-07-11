import ProductProvider from "./product/ProductProvider";
import ToastProvider from "./toast/ToastProvider";
import CartProvider from "./cart/CartProvider";
import CheckoutProvider from "./checkout/CheckoutProvider";
import UIProvider from "./ui/UIProvider";
import ProfileProvider from "./profile/ProfileProvider";

// Order matters here:
// - CartProvider reads from ProductContext (productMap) and ToastContext (showToast),
//   so both must be ancestors of CartProvider.
// - CheckoutProvider reads from CartContext (cartItems), so CartProvider must be
//   its ancestor.
// - UIProvider and ProfileProvider have no dependencies, so their position
//   doesn't matter — kept outermost-adjacent for readability.
const ShopProvider = ({ children }) => {
  return (
    <UIProvider>
      <ProfileProvider>
        <ProductProvider>
          <ToastProvider>
            <CartProvider>
              <CheckoutProvider>{children}</CheckoutProvider>
            </CartProvider>
          </ToastProvider>
        </ProductProvider>
      </ProfileProvider>
    </UIProvider>
  );
};

export default ShopProvider;
