import { FinanceProvider } from './context/FinanceContext';
import { Dashboard } from './pages/Dashboard';
import './index.css';

function App() {
  return (
    <FinanceProvider>
      <Dashboard />
    </FinanceProvider>
  );
}
export default App;
