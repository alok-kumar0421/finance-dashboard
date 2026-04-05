import React from 'react';
import { Shield, Eye } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

export const RoleSelector = () => {
  const { userRole, setUserRole } = useFinance();

  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700/50 rounded-full p-1 transition-colors duration-300">
      <button
        onClick={() => setUserRole('viewer')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-sm transition-all duration-300 ${
          userRole === 'viewer'
            ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-md'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
        title="Switch to Viewer mode (read-only)"
      >
        <Eye size={16} />
        <span className="hidden sm:inline">Viewer</span>
      </button>
      <button
        onClick={() => setUserRole('admin')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-sm transition-all duration-300 ${
          userRole === 'admin'
            ? 'bg-white dark:bg-gray-600 text-green-600 dark:text-green-400 shadow-md'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
        title="Switch to Admin mode (full access)"
      >
        <Shield size={16} />
        <span className="hidden sm:inline">Admin</span>
      </button>
    </div>
  );
};
