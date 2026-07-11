import { useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUIContext } from "../context/ui/UIContext";

const SearchBar = () => {
  const {
    search,
    setSearch,
    showSearch,
    setShowSearch,
    searchQuery,
    setSearchQuery,
  } = useUIContext();
  const navigate = useNavigate();

  const handleSearch = () => {
    setShowSearch(true);
    navigate("/collection");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(search);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search, setSearchQuery]);
  if (!showSearch) return null;

  return (
    <div className="border-y border-gray-200 bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-5 flex justify-center">
        <div className="flex items-center w-full max-w-2xl border border-gray-300 rounded-full bg-white px-5 py-3 shadow-sm">
          <Search className="w-5 h-5 text-gray-500" />

          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none px-3 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearchQuery(search);
                handleSearch();
              }
            }}
          />

          <X
            className="w-5 h-5 text-gray-500 cursor-pointer hover:text-black transition-colors"
            onClick={() => {
              setSearch("");
              setSearchQuery("");
              setShowSearch(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
