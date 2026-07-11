import { useProductContext } from "./product/ProductContext";
import { useToastContext } from "./toast/ToastContext";
import { useCartContext } from "./cart/CartContext";
import { useCheckoutContext } from "./checkout/CheckoutContext";
import { useUIContext } from "./ui/UIContext";

// Optional migration bridge: mirrors the shape of the old combined
// ShopContext so existing components can switch with a single import
// change (useContext(ShopContext) -> useShop()) instead of a full rewrite.
//
// This is a stepping stone, not the end state — once a component is
// touched again, prefer pulling only the specific hook(s) it actually
// needs (e.g. just useCartContext()) so it only re-renders when that
// slice of state changes.
const useShop = () => {
  return {
    ...useProductContext(),
    ...useToastContext(),
    ...useCartContext(),
    ...useCheckoutContext(),
    ...useUIContext(),
  };
};

export default useShop;
