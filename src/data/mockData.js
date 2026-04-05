// Mock transactions data
export const mockTransactions = [
  {
    id: "1",
    date: "2026-04-01",
    amount: 5000,
    category: "Salary",
    type: "income",
    description: "Monthly salary"
  },
  {
    id: "2",
    date: "2026-04-02",
    amount: 120,
    category: "Groceries",
    type: "expense",
    description: "Weekly groceries"
  },
  {
    id: "3",
    date: "2026-04-03",
    amount: 50,
    category: "Utilities",
    type: "expense",
    description: "Internet bill"
  },
  {
    id: "4",
    date: "2026-04-05",
    amount: 200,
    category: "Entertainment",
    type: "expense",
    description: "Movie tickets and dinner"
  },
  {
    id: "5",
    date: "2026-04-07",
    amount: 1200,
    category: "Rent",
    type: "expense",
    description: "Monthly rent"
  },
  {
    id: "6",
    date: "2026-04-10",
    amount: 80,
    category: "Transportation",
    type: "expense",
    description: "Gas and parking"
  },
  {
    id: "7",
    date: "2026-04-12",
    amount: 300,
    category: "Healthcare",
    type: "expense",
    description: "Medical appointment and pharmacy"
  },
  {
    id: "8",
    date: "2026-04-15",
    amount: 1500,
    category: "Freelance",
    type: "income",
    description: "Freelance project payment"
  },
  {
    id: "9",
    date: "2026-04-18",
    amount: 45,
    category: "Dining",
    type: "expense",
    description: "Restaurant lunch"
  },
  {
    id: "10",
    date: "2026-04-20",
    amount: 150,
    category: "Shopping",
    type: "expense",
    description: "Clothing purchases"
  },
  {
    id: "11",
    date: "2026-04-22",
    amount: 60,
    category: "Dining",
    type: "expense",
    description: "Coffee and snacks"
  },
  {
    id: "12",
    date: "2026-04-25",
    amount: 200,
    category: "Entertainment",
    type: "expense",
    description: "Gaming subscription"
  },
  {
    id: "13",
    date: "2026-04-27",
    amount: 500,
    category: "Education",
    type: "expense",
    description: "Online course fees"
  },
  {
    id: "14",
    date: "2026-04-28",
    amount: 75,
    category: "Utilities",
    type: "expense",
    description: "Electricity bill"
  },
  {
    id: "15",
    date: "2026-04-30",
    amount: 2000,
    category: "Investment",
    type: "income",
    description: "Dividend payment"
  },
];

// Balance trend data for chart
export const balanceTrendData = [
  { month: "Jan", balance: 15000 },
  { month: "Feb", balance: 16200 },
  { month: "Mar", balance: 14800 },
  { month: "Apr", balance: 18500 },
  { month: "May", balance: 19200 },
  { month: "Jun", balance: 21000 },
];

// Spending by category for pie chart
export const spendingByCategoryData = [
  { name: "Rent", value: 1200, color: "#ef4444" },
  { name: "Groceries", value: 120, color: "#f59e0b" },
  { name: "Entertainment", value: 500, color: "#8b5cf6" },
  { name: "Healthcare", value: 300, color: "#10b981" },
  { name: "Transportation", value: 80, color: "#3b82f6" },
  { name: "Utilities", value: 125, color: "#06b6d4" },
  { name: "Dining", value: 105, color: "#ec4899" },
  { name: "Shopping", value: 150, color: "#f97316" },
  { name: "Education", value: 500, color: "#6366f1" },
];

// Category colors for consistency
export const categoryColors = {
  Salary: "#10b981",
  Rent: "#ef4444",
  Groceries: "#f59e0b",
  Entertainment: "#8b5cf6",
  Healthcare: "#10b981",
  Transportation: "#3b82f6",
  Utilities: "#06b6d4",
  Dining: "#ec4899",
  Shopping: "#f97316",
  Education: "#6366f1",
  Freelance: "#14b8a6",
  Investment: "#8b5cf6",
};

// All unique categories
export const allCategories = Array.from(
  new Set(mockTransactions.map(t => t.category))
);
