import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const SummaryCard = ({
  title,
  amount,
  type,
  icon,
}) => {
  const isPositive = type === 'income' || type === 'balance';
  
  const bgColor = {
    balance: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800 hover:shadow-lg dark:hover:shadow-blue-900/50',
    income: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800 hover:shadow-lg dark:hover:shadow-green-900/50',
    expense: 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800 hover:shadow-lg dark:hover:shadow-red-900/50',
  };

  const textColor = {
    balance: 'text-blue-600 dark:text-blue-400',
    income: 'text-green-600 dark:text-green-400',
    expense: 'text-red-600 dark:text-red-400',
  };

  const iconBgColor = {
    balance: 'bg-blue-200 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300',
    income: 'bg-green-200 dark:bg-green-900/50 text-green-600 dark:text-green-300',
    expense: 'bg-red-200 dark:bg-red-900/50 text-red-600 dark:text-red-300',
  };

  const defaultIcon = {
    balance: <DollarSign size={24} />,
    income: <TrendingUp size={24} />,
    expense: <TrendingDown size={24} />,
  };

  return (
    <div className={`card p-4 sm:p-5 md:p-6 border ${bgColor[type]} transition-all duration-300 cursor-default`}>
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wide">
          {title}
        </h3>
        <div className={`${iconBgColor[type]} p-2 sm:p-3 rounded-lg transition-transform duration-300 group-hover:scale-110`}>
          {icon || defaultIcon[type]}
        </div>
      </div>
      
      <div className="flex items-baseline gap-2">
        <p className={`text-2xl sm:text-3xl font-bold ${textColor[type]} transition-colors duration-300`}>
          ${Math.abs(amount).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        {!isPositive && (
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">Spent</span>
        )}
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 sm:mt-3">
        {type === 'balance' && 'Current balance'}
        {type === 'income' && 'Total income this month'}
        {type === 'expense' && 'Total expenses this month'}
      </p>
    </div>
  );
};
