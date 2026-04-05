import React from 'react';
import { Brain, TrendingDown, PieChart, Clock, Activity, BarChart3 } from 'lucide-react';

export const InsightsSection = ({ transactions }) => {
  // Calculate insights
  const calculateInsights = () => {
    const expenses = transactions.filter(t => t.type === 'expense');
    const income = transactions.filter(t => t.type === 'income');

    // Highest spending category
    const categorySpending = {};
    expenses.forEach(exp => {
      categorySpending[exp.category] = (categorySpending[exp.category] || 0) + exp.amount;
    });
    const highestCategory = Object.entries(categorySpending).sort(
      ([, a], [, b]) => b - a
    )[0];

    // Monthly totals
    const expenseTotal = expenses.reduce((sum, t) => sum + t.amount, 0);
    const incomeTotal = income.reduce((sum, t) => sum + t.amount, 0);
    const balance = incomeTotal - expenseTotal;

    // Average transaction
    const avgExpense = expenses.length > 0 ? expenseTotal / expenses.length : 0;

    // Recent trend
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const recentExpenses = expenses.filter(
      t => new Date(t.date) >= weekAgo
    ).reduce((sum, t) => sum + t.amount, 0);

    return {
      highestCategory,
      expenseTotal,
      incomeTotal,
      balance,
      avgExpense,
      recentExpenses,
      transactionCount: transactions.length,
    };
  };

  const insights = calculateInsights();
  const expenseRatio = insights.incomeTotal > 0
    ? Math.round((insights.expenseTotal / insights.incomeTotal) * 100)
    : 0;

  const cards = [
    {
      icon: <TrendingDown size={24} />,
      label: 'Highest Spending',
      value: insights.highestCategory?.[0] || 'N/A',
      subtext: insights.highestCategory ? `$${insights.highestCategory[1].toLocaleString('en-US', { minimumFractionDigits: 2 })}` : 'No data',
      gradient: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
    },
    {
      icon: <PieChart size={24} />,
      label: 'Monthly Balance',
      value: `$${Math.abs(insights.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      subtext: insights.balance >= 0 ? 'Surplus' : 'Deficit',
      gradient: insights.balance >= 0 ? 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20' : 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20',
      borderColor: insights.balance >= 0 ? 'border-green-200 dark:border-green-800' : 'border-red-200 dark:border-red-800',
    },
    {
      icon: <BarChart3 size={24} />,
      label: 'Expense Ratio',
      value: `${expenseRatio}%`,
      subtext: 'of income spent',
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    {
      icon: <Activity size={24} />,
      label: 'Average Expense',
      value: `$${insights.avgExpense.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      subtext: 'per transaction',
      gradient: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
    },
    {
      icon: <Clock size={24} />,
      label: 'Last 7 Days',
      value: `$${insights.recentExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      subtext: 'spending',
      gradient: 'from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20',
      borderColor: 'border-pink-200 dark:border-pink-800',
    },
    {
      icon: <Brain size={24} />,
      label: 'Total Transactions',
      value: insights.transactionCount,
      subtext: 'in your account',
      gradient: 'from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
    },
  ];

  return (
    <div className="card">
      <h3 className="text-sm sm:text-lg font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6 flex items-center gap-2">
        <Brain size={20} className="sm:w-6 sm:h-6" />
        Financial Insights
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${card.gradient} p-4 sm:p-5 rounded-lg border ${card.borderColor} hover:shadow-md transition-all duration-300 cursor-default`}
          >
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div>
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                  {card.label}
                </p>
              </div>
              <div className="text-gray-500 dark:text-gray-400 opacity-70 w-5 h-5 sm:w-6 sm:h-6">
                {card.icon}
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {card.value}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {card.subtext}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
