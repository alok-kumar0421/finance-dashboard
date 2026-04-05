# Finance Dashboard

A simple finance dashboard built with React and Vite. It helps track income and expenses, visualize spending, and get a quick overview of financial activity.

## What It Does

* Track income and expenses in one place
* See balance trends over time
* Understand where money is being spent
* Get basic insights from transactions
* Switch between viewer and admin modes
* Toggle dark mode
* Data stays saved in the browser (localStorage)

## Features

* Summary cards for balance, income, and expenses
* Line chart for balance trend
* Pie chart for spending by category
* Transactions table with search, filter, and sorting
* Add and delete transactions (Admin only)
* Role-based UI (Viewer / Admin)
* Insights section (highest spending, ratios, etc.)
* Dark mode toggle
* Responsive layout (works on mobile and desktop)
* Data persistence using localStorage

## Tech Stack

* React
* Vite
* Tailwind CSS
* Recharts
* Context API
* localStorage

## How to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
├── context/
├── data/
├── hooks/
├── pages/
├── App.jsx
├── main.jsx
```

## How to Use

* Use the role toggle to switch between Viewer and Admin
* Add transactions in Admin mode
* Filter and sort transactions from the table
* Toggle dark mode from the top bar

## Future Improvements

* Connect to a backend API
* Add custom categories
* Budget tracking
* Export data (CSV/JSON)
* More detailed analytics

## Notes

* Built using plain React (no TypeScript)
* Uses mock data initially
* Data is stored in localStorage
* No backend is used

---

This is a basic but functional finance dashboard. It focuses on clean UI and simple interactions rather than complexity.
