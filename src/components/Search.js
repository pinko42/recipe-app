import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBox = (props) => {
  return (
    <div className="search">
      <Search
        placeholder="search for recipe"
        onSearch={(value) => props.getData(value)}
        style={{ width: 400 }}
      />
    </div>
  );
};

export default SearchBox;
