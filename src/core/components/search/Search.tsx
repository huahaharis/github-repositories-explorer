import React from 'react';
import { Input } from 'antd'

type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
  initialValue?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', onSearch }) => {
  return (
      <Input
        type="text"
        onChange={(e:any)=> onSearch(e)}
        placeholder={placeholder}
      />
  );
};

export default SearchBar;
