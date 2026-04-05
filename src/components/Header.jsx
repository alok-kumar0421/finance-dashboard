import React from 'react';
import { Moon, Sun, Plus } from 'lucide-react';
import { RoleSelector } from './RoleSelector.jsx';
import { useFinance } from '../context/FinanceContext.jsx';

export const Header = ({
  onAddClick,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const { userRole } = useFinance();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 hover:shadow-lg flex-shrink-0">
              <span className="text-white font-bold text-sm sm:text-lg">$</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
                Finance Dashboard
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">Manage your finances</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
            {userRole === 'admin' && (
              <button
                onClick={onAddClick}
                className="btn-primary flex items-center gap-2 text-sm whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200"
                title="Add a new transaction"
              >
                <Plus size={18} />
                <span className="hidden sm:inline">Add Transaction</span>
                <span className="sm:hidden">Add</span>
              </button>
            )}

            <button
              onClick={onToggleDarkMode}
              className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 text-gray-600 dark:text-gray-300"
              title="Toggle dark mode"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-500 transition-transform duration-300" />
              ) : (
                <Moon size={20} className="transition-transform duration-300" />
              )}
            </button>

            <RoleSelector/>
          </div>
        </div>
      </div>
    </header>
  );
};
