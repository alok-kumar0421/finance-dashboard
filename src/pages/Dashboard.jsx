import React, { useState } from 'react';
import {
  SummaryCard,
  BalanceTrendChart,
  SpendingByCategoryChart,
  TransactionsTable,
  InsightsSection,
  Header,
  AddTransactionModal,
} from '../components';
import { useFinance } from '../context/FinanceContext.jsx';
import { useTheme } from '../hooks/useTheme.js';
import {
  balanceTrendData,
  spendingByCategoryData,
} from '../data/mockData.js';

export const Dashboard = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    transactions,
    getFilteredAndSortedTransactions,
    deleteTransaction,
  } = useFinance();
  const calculateSummary = () => {
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    const balance = income - expenses;

    return { balance, income, expenses };
  };
  const summary = calculateSummary();
  const filteredTransactions = getFilteredAndSortedTransactions();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100">
      <Header
        onAddClick={() => setIsModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleTheme}
      />
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <SummaryCard
            title="Total Balance"
            amount={summary.balance}
            type="balance"
          />
          <SummaryCard
            title="Total Income"
            amount={summary.income}
            type="income"
          />
          <SummaryCard
            title="Total Expenses"
            amount={summary.expenses}
            type="expense"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <BalanceTrendChart data={balanceTrendData} />
          <SpendingByCategoryChart data={spendingByCategoryData} />
        </div>
        <div className="mb-6 sm:mb-8">
          <InsightsSection transactions={transactions} />
        </div>
        <div className="mb-6 sm:mb-8">
          <TransactionsTable
            transactions={filteredTransactions}
            onDelete={deleteTransaction}
          />
        </div>
        <footer className="text-center py-6 sm:py-8 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-8 sm:mt-12">
          <p className="text-sm">
            &copy; 2026 Finance Dashboard. Built with ❤️ by Alok - React, Tailwind CSS, and Recharts.
          </p>
        </footer>
      </main>
      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
