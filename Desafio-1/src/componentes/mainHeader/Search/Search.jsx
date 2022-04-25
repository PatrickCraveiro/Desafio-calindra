import React, { useState } from "react";
import searchIcon from "./search-icon.svg";
import api from "../../../services/api";
import "./Search.scss";
import { useProduct } from "../../../context/Product";

const SearchInput = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { setProduct } = useProduct();

  const handleCheck = async (event) => {
    event.preventDefault();

    try {
      const request = await api(inputValue);
      setProduct(request["data"]["products"]);
    } catch (error) {
      setProduct([
        {
          name: "Não foram encontrados nenhum produto",
          _meta: {
            visitsClickCount: "",
            score: "",
          },
        },
      ]);
    }

    document
      .querySelector(".main-header")
      .style.setProperty("max-height", "30vh");
  };

  const handleChange = async (event) => {
    setInputValue(event.target.value);

    try {
      const request = await api(inputValue);
      setSuggestions(() => [...request["data"]["suggestions"]]);
    } catch (error) {
      console.log("não ha sugestões para o produto buscado");
    }
  };

  return (
    <form className="search" onSubmit={handleCheck}>
      <input
        className="search__input"
        type="text"
        placeholder="Buscar..."
        list="suggestions"
        onChange={handleChange}
      />
      <datalist id="suggestions">
        {suggestions.map((suggestion) => (
          <option value={suggestion.term} />
        ))}
      </datalist>
      <button
        style={{ backgroundImage: `url("${searchIcon}")` }}
        className="search__btn"
        title="Pesquisa"
      ></button>
    </form>
  );
};

export default SearchInput;
