# Context Refactor — Migration Guide

## 1. Drop in the new files

Copy this whole `context/` folder over your existing `src/context/` folder,
matching this structure:

```
src/context/
├── product/
│   ├── ProductContext.js
│   └── ProductProvider.jsx
├── toast/
│   ├── ToastContext.js
│   └── ToastProvider.jsx
├── cart/
│   ├── CartContext.js
│   └── CartProvider.jsx
├── checkout/
│   ├── CheckoutContext.js
│   └── CheckoutProvider.jsx
├── ui/
│   ├── UIContext.js
│   └── UIProvider.jsx
├── ShopProvider.jsx
└── useShop.js
```

Delete the old `ShopContext.jsx` and `ShopContextDefinition.js` once
everything below is working.

## 2. Update `main.jsx` (or wherever the provider is mounted)

Old:
```jsx
import ShopContextProvider from "./context/ShopContext";
// ...
<ShopContextProvider>
  <App />
</ShopContextProvider>
```

New:
```jsx
import ShopProvider from "./context/ShopProvider";
// ...
<ShopProvider>
  <App />
</ShopProvider>
```

## 3. Update consuming components — two options

**Option A: fastest, minimal-risk migration (do this first)**

Anywhere you currently have:
```jsx
import { useContext } from "react";
import { ShopContext } from "../context/ShopContextDefinition";

const { addToCart, cartItems, products } = useContext(ShopContext);
```

Replace with:
```jsx
import useShop from "../context/useShop";

const { addToCart, cartItems, products } = useShop();
```

Same shape, same values, nothing else changes. This gets you off the old
file immediately without touching component logic.

**Option B: proper split (do this gradually, component by component)**

Next time you're already editing a component, swap the bridge hook for
only the specific hook(s) it needs:

```jsx
import { useCartContext } from "../context/cart/CartContext";

const { addToCart, cartItems } = useCartContext();
```

This is the actual payoff of the refactor: a component that only reads
cart state won't re-render when, say, someone types in the search box,
because it's no longer subscribed to a context that also holds search
state.

Rough guide to which hook has what you need:
- `useProductContext()` → `products`, `productMap`
- `useCartContext()` → `cartItems`, `setCartItems`, `addToCart`, `removeFromCart`, `getCartCount`
- `useCheckoutContext()` → `checkout`, `setCheckout`, `orders`, `setOrders`, `startCartCheckout`, `startBuyNowCheckout`
- `useUIContext()` → `currency`, `delivery_fee`, `search`, `setSearch`, `showSearch`, `setShowSearch`, `searchQuery`, `setSearchQuery`
- `useToastContext()` → `toast`, `setToast`, `showToast`

## 4. Your hooks folder doesn't need any changes

`useFilteredProducts.jsx` and `useProduct.jsx` already receive `products`
as a parameter rather than pulling it from context directly, so they're
unaffected by this refactor.

## Why this shape

- Each provider only owns state and logic for one concern, so it's easier
  to reason about and test.
- Dependencies are explicit and one-directional: Cart depends on
  Product + Toast; Checkout depends on Cart. No circular imports.
- Every context throws a clear error if used outside its provider,
  instead of silently returning `undefined`.
- This is also the exact seam where an `AuthProvider` should be added next
  — it has no dependency on shop state, so it can sit anywhere in the
  provider tree without disturbing this structure.
