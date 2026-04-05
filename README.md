# Finance Dashboard

A personal finance dashboard built with React and Vite. Helps you track spending, see where your money goes, and understand your financial habits at a glance.

## What It Does

- Track income and expenses with a simple transaction table
- See your balance over time with a line chart
- Visualize spending by category with a pie chart
- Get useful insights (highest spending, expense ratio, average amounts)
- Switch between admin and viewer roles
- Toggle dark mode for comfortable viewing
- Everything saves to your browser (localStorage), so you don't lose data when you refresh

## Features

- **Dashboard overview**: Summary cards showing total balance, income, and expenses
- **Charts**: Line chart for balance trends + pie chart for spending breakdown
- **Transaction management**: Add, delete, and filter transactions
- **Smart filtering**: Filter by category or type, sort by date/amount
- **Role-based access**: Viewer mode (read-only) and Admin mode (can add/delete)
- **Financial insights**: Shows highest spending, expense ratio, 7-day summary, etc.
- **Dark mode**: Toggle between light and dark themes (saves your preference)
- **Responsive design**: Works on phone, tablet, and desktop
- **Data persistence**: All your transactions are saved in the browser

## Tech Stack

- React 19 - for building the UI
- Vite - bundler and dev server
- Tailwind CSS - for styling
- Recharts - for charts
- Lucide React - for icons
- Context API - for state management
- localStorage - for saving data

## How to Run

**Install dependencies:**
```bash
npm install
```

**Start the dev server:**
```bash
npm run dev
```

Then open http://localhost:5173 in your browser. You should see the dashboard load up.

**Build for production:**
```bash
npm run build
```

This creates an optimized version in the `dist/` folder.

## File Structure

```
src/
├── main.jsx                 # Entry point
├── App.jsx                  # Root component
├── components/              # UI components
│   ├── Header.jsx          # Top bar with logo and controls
│   ├── SummaryCard.jsx     # Balance/Income/Expense cards
│   ├── BalanceTrendChart.jsx    # Line chart
│   ├── SpendingByCategoryChart.jsx # Pie chart
│   ├── TransactionsTable.jsx     # Transactions list
│   ├── AddTransactionModal.jsx   # Form for adding transactions
│   ├── InsightsSection.jsx       # Financial insights cards
│   └── RoleSelector.jsx    # Admin/Viewer toggle
├── context/
│   └── FinanceContext.jsx   # State management (transactions, role, filters)
├── hooks/
│   └── useTheme.js         # Dark mode hook
├── data/
│   └── mockData.js         # Sample transaction data
└── App.css                 # Styles
```

## How to Use

1. **Add a transaction**: Click "Add Transaction" button (only visible in Admin mode)
2. **Switch roles**: Use the Viewer/Admin pills in the header
3. **Filter transactions**: Use the filter and sort controls in the table
4. **Toggle dark mode**: Click the sun/moon icon in the header
5. **Delete transactions**: Click the delete button on any transaction (Admin mode only)

## Future Ideas

- Connect to a real backend API instead of localStorage
- Add categories and the ability to create custom ones
- Monthly budgets and alerts when you go over
- Export transactions to CSV
- More detailed reports and analytics
- Multi-currency support
- User authentication and accounts

## Notes

- The project is written in plain JavaScript (not TypeScript)
- All data is stored locally in your browser - nothing goes to a server
- Mock data is pre-loaded, so you have something to see when you start
- The app works offline since it uses localStorage

That's it. It's a simple finance tracker that actually works and looks decent. Feel free to modify it for your own needs.
