import React from 'react';
import { Trash2, Search, Filter } from 'lucide-react';
import { allCategories } from '../data/mockData';
import { useFinance } from '../context/FinanceContext';

export const TransactionsTable = ({ transactions, onDelete }) => {
  const { filters, setFilters, userRole } = useFinance();
  const [searchCategory, setSearchCategory] = React.useState(filters.searchCategory);

  const handleCategoryChange = (category) => {
    setSearchCategory(category);
    setFilters({ searchCategory: category });
  };

  const handleTypeFilter = (type) => {
    setFilters({ filterType: type });
  };

  const handleSort = (sortBy) => {
    setFilters({ sortBy });
  };

  const getTypeStyles = (type) => {
    if (type === 'income') {
      return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800';
    }
    return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="card">
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <h3 className="text-sm sm:text-lg font-bold text-gray-800 dark:text-gray-100">
            Transactions
          </h3>
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
            {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
          {/* Search Category */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 uppercase tracking-wide">
              <Search size={12} className="inline mr-1" />
              Category
            </label>
            <select
              value={searchCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="input-field text-xs sm:text-sm"
            >
              <option value="">All Categories</option>
              {allCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Filter by Type */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 uppercase tracking-wide">
              <Filter size={12} className="inline mr-1" />
              Type
            </label>
            <select
              value={filters.filterType}
              onChange={(e) => handleTypeFilter(e.target.value)}
              className="input-field text-xs sm:text-sm"
            >
              <option value="all">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 uppercase tracking-wide">
              Sort By
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="input-field text-xs sm:text-sm"
            >
              <option value="date">Date (Newest)</option>
              <option value="amount">Amount (Highest)</option>
              <option value="category">Category (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      {transactions.length > 0 ? (
        <div className="overflow-x-auto -mx-4 sm:-mx-0 sm:rounded-lg">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-bold text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                  Date
                </th>
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-bold text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                  Category
                </th>
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-bold text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                  Description
                </th>
                <th className="text-right py-2 sm:py-3 px-3 sm:px-4 font-bold text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                  Amount
                </th>
                <th className="text-center py-2 sm:py-3 px-3 sm:px-4 font-bold text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                  Type
                </th>
                {userRole === 'admin' && (
                  <th className="text-center py-2 sm:py-3 px-3 sm:px-4 font-bold text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={transaction.id}
                  className={`border-b border-gray-100 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 ${
                    index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/50 dark:bg-gray-800/50'
                  }`}
                >
                  <td className="py-2 sm:py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100 font-medium text-xs sm:text-sm">
                    {formatDate(transaction.date)}
                  </td>
                  <td className="py-2 sm:py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100 font-medium text-xs sm:text-sm">
                    {transaction.category}
                  </td>
                  <td className="py-2 sm:py-3 px-3 sm:px-4 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    {transaction.description}
                  </td>
                  <td className="py-2 sm:py-3 px-3 sm:px-4 text-right font-bold text-gray-900 dark:text-gray-100 text-xs sm:text-sm">
                    ${transaction.amount.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="py-2 sm:py-3 px-3 sm:px-4">
                    <div className="flex justify-center">
                      <span
                        className={`badge text-xs font-bold px-2 sm:px-3 py-1 rounded-full ${getTypeStyles(
                          transaction.type
                        )}`}
                      >
                        {transaction.type.charAt(0).toUpperCase() +
                          transaction.type.slice(1)}
                      </span>
                    </div>
                  </td>
                  {userRole === 'admin' && (
                    <td className="py-2 sm:py-3 px-3 sm:px-4 text-center">
                      <button
                        onClick={() => onDelete?.(transaction.id)}
                        className="text-red-500 hover:text-red-700 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 p-1.5 sm:p-2 rounded-lg transition-all duration-200 inline-block"
                        title="Delete transaction"
                        aria-label="Delete transaction"
                      >
                        <Trash2 size={16} className="sm:w-5 sm:h-5 w-4 h-4" />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            No transactions found. Try adjusting your filters.
          </p>
        </div>
      )}
    </div>
  );
};
