import React from 'react';
import { Input } from 'antd'

type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
  initialValue?: string;
};

const { Search } = Input

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', onSearch }) => {
  return (
      <Search
        type="text"
        onSearch={onSearch}
        placeholder={placeholder}
      />
  );
};

export default SearchBar;
