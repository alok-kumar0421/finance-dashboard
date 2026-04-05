import React, { createContext, useState, useContext } from 'react';
import { mockTransactions } from '../data/mockData.js';

const FinanceContext = createContext(undefined);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    if (saved) {
      return JSON.parse(saved);
    }
    return mockTransactions;
  });

  const [userRole, setUserRole] = useState('viewer');
  const [filters, setFilters] = useState({
    searchCategory: '',
    filterType: 'all',
    sortBy: 'date',
  });

  // Save transactions to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const updateTransaction = (id, updatedData) => {
    setTransactions(
      transactions.map(t =>
        t.id === id ? { ...t, ...updatedData } : t
      )
    );
  };

  const getFilteredAndSortedTransactions = () => {
    let filtered = [...transactions];

    // Apply category filter
    if (filters.searchCategory) {
      filtered = filtered.filter(
        t => t.category.toLowerCase() === filters.searchCategory.toLowerCase()
      );
    }

    // Apply type filter
    if (filters.filterType !== 'all') {
      filtered = filtered.filter(t => t.type === filters.filterType);
    }

    // Apply sorting
    if (filters.sortBy === 'amount') {
      filtered.sort((a, b) => b.amount - a.amount);
    } else if (filters.sortBy === 'category') {
      filtered.sort((a, b) => a.category.localeCompare(b.category));
    } else if (filters.sortBy === 'date') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return filtered;
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        userRole,
        filters,
        setUserRole,
        setFilters: updateFilters,
        addTransaction,
        deleteTransaction,
        updateTransaction,
        getFilteredAndSortedTransactions,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (context === undefined) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
};
