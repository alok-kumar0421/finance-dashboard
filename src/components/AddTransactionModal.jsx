import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import { allCategories } from '../data/mockData';

export const AddTransactionModal = ({ isOpen, onClose }) => {
  const { addTransaction } = useFinance();
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    amount: '',
    category: allCategories[0] || 'Salary',
    type: 'expense',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    addTransaction({
      date: formData.date,
      amount: parseFloat(formData.amount),
      category: formData.category,
      type: formData.type,
      description: formData.description,
    });

    // Reset form
    setFormData({
      date: new Date().toISOString().split('T')[0],
      amount: '',
      category: allCategories[0] || 'Salary',
      type: 'expense',
      description: '',
    });
    setErrors({});
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4 transition-opacity duration-300"
      onClick={handleOverlayClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Add New Transaction
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex-shrink-0"
            aria-label="Close modal"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          {/* Date */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`input-field text-xs sm:text-sm ${
                errors.date ? 'border-red-500 dark:border-red-500' : ''
              }`}
              required
            />
            {errors.date && (
              <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} className="w-3 h-3 sm:w-4 sm:h-4" />
                {errors.date}
              </p>
            )}
          </div>

          {/* Type */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Type *
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="input-field text-xs sm:text-sm"
              required
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Amount ($) *
            </label>
            <input
              type="number"
              name="amount"
              placeholder="0.00"
              step="0.01"
              min="0"
              value={formData.amount}
              onChange={handleChange}
              className={`input-field text-xs sm:text-sm ${
                errors.amount ? 'border-red-500 dark:border-red-500' : ''
              }`}
              required
            />
            {errors.amount && (
              <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} className="w-3 h-3 sm:w-4 sm:h-4" />
                {errors.amount}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`input-field text-xs sm:text-sm ${
                errors.category ? 'border-red-500 dark:border-red-500' : ''
              }`}
              required
            >
              {allCategories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} className="w-3 h-3 sm:w-4 sm:h-4" />
                {errors.category}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              placeholder="Enter transaction details"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className={`input-field text-xs sm:text-sm resize-none ${
                errors.description ? 'border-red-500 dark:border-red-500' : ''
              }`}
              required
            />
            {errors.description && (
              <p className="text-red-500 dark:text-red-400 text-xs sm:text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} className="w-3 h-3 sm:w-4 sm:h-4" />
                {errors.description}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1 text-xs sm:text-sm transition-all duration-200 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary flex-1 text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg py-2"
            >
              Add Transaction
            </button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center pt-2">
            * Required fields
          </p>
        </form>
      </div>
    </div>
  );
};
