import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export const BalanceTrendChart = ({ data }) => {
  return (
    <div className="card">
      <h3 className="text-sm sm:text-lg font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
        Balance Trend
      </h3>
      
      {data && data.length > 0 ? (
        <div className="w-full h-64 sm:h-72 md:h-80 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgb(209, 213, 219)"
                opacity={0.3}
              />
              <XAxis
                dataKey="month"
                stroke="rgb(107, 114, 128)"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke="rgb(107, 114, 128)"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgb(31, 41, 55)',
                  border: '1px solid rgb(75, 85, 99)',
                  borderRadius: '8px',
                  color: 'rgb(243, 244, 246)',
                }}
                formatter={(value) => `$${value.toLocaleString()}`}
                labelStyle={{ color: 'rgb(243, 244, 246)' }}
              />
              <Legend
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="line"
              />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="rgb(59, 130, 246)"
                strokeWidth={3}
                dot={{ fill: 'rgb(59, 130, 246)', r: 6 }}
                activeDot={{ r: 8 }}
                name="Balance"
                animationDuration={500}
              />
            </LineChart>
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
