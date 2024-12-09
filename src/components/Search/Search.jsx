import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "@contexts/ProductContext.jsx";
import PropTypes from "prop-types";
import searchIcon from "@assets/svg/search-icon.svg";
import styles from "./Search.module.css";

export default function Search({ onClose }) {
  const { products } = useProduct();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (value) => {
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = products
        .filter((product) => product.title.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleNavigateToProduct = (product) => {
    navigate(`/products/${product.sku}`);
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={searchRef} className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <img src={searchIcon} alt="search icon" role="presentation" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search product..."
          className={styles.searchInput}
        />
      </div>
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((product) => (
            <li key={product.id} className={styles.suggestionItem} onClick={() => handleNavigateToProduct(product)}>
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Search.propTypes = {
  onClose: PropTypes.func.isRequired,
};
