import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export const SpendingByCategoryChart = ({ data }) => {
  return (
    <div className="card">
      <h3 className="text-sm sm:text-lg font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
        Spending by Category
      </h3>

      {data && data.length > 0 ? (
        <div className="w-full h-64 sm:h-72 md:h-80 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <Pie
                data={data}
                cx="50%"
                cy="45%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                animationDuration={500}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => `$${value.toLocaleString()}`}
                contentStyle={{
                  backgroundColor: 'rgb(31, 41, 55)',
                  border: '1px solid rgb(75, 85, 99)',
                  borderRadius: '8px',
                  color: 'rgb(243, 244, 246)',
                }}
                labelStyle={{ color: 'rgb(243, 244, 246)' }}
                cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
              />
              <Legend
                wrapperStyle={{ 
                  paddingTop: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '16px',
                  flexWrap: 'wrap' 
                }}
                verticalAlign="bottom"
                height={36}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="h-80 flex items-center justify-center text-gray-500 dark:text-gray-400">
          <p>No data available</p>
        </div>
      )}
    </div>
  );
};
