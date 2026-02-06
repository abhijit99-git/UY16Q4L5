import React, { useState } from 'react';
import { SearchContainer, SearchInputWrapper, SearchInput, FilterContainer, Button } from './styles/StyledComponents';

const SearchBar = ({ onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
    onFilter(status);
  };

  return (
    <SearchContainer>
      <SearchInputWrapper>
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <SearchInput
          type="text"
          placeholder="Search todos..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </SearchInputWrapper>
      
      <FilterContainer>
        <Button
          type="button"
          filter
          active={filterStatus === 'all'}
          onClick={() => handleFilterChange('all')}
        >
          All Todos
        </Button>
        <Button
          type="button"
          filter
          active={filterStatus === 'active'}
          onClick={() => handleFilterChange('active')}
        >
          Active
        </Button>
        <Button
          type="button"
          filter
          active={filterStatus === 'completed'}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </Button>
      </FilterContainer>
    </SearchContainer>
  );
};

export default SearchBar;
