import { useState } from "react";
import { UIContext } from "./UIContext";

const UIProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const value = {
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    searchQuery,
    setSearchQuery,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIProvider;
