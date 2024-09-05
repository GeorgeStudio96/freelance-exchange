'use client';
import { createContext, useContext, ReactNode, useState } from 'react';

type FilterContextType = {
  filters: FiltersState;
  setFilters: (filters: FiltersState) => void;
};

interface FiltersState {
  searchValue: string;
  checkboxValue: number[];
  radioValue: string;
  toggleValue: boolean;
  selectValue: string;
  sortValue: string;
}

type ValueContextProviderType = {
  children: ReactNode;
};

const initialFilter: FiltersState = {
  searchValue: '',
  checkboxValue: [],
  radioValue: 'string',
  toggleValue: false,
  selectValue: 'string',
  sortValue: 'string',
};

const ValueContext = createContext<FilterContextType | undefined>(undefined);

export function ValueContextProvider({ children }: ValueContextProviderType) {
  const [filters, setFilters] = useState(initialFilter);

  return (
    <ValueContext.Provider value={{ filters, setFilters }}>
      {children}
    </ValueContext.Provider>
  );
}

// создали хук useContext чтобы использовать его
export function useValueContext() {
  const contextValue = useContext(ValueContext);
  if (!contextValue) {
    throw new Error(
      'мы должны использовать useValueContext всегда с провайдером ValueContextProvider'
    );
  }
  return contextValue;
}
