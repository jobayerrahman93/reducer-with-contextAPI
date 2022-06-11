import './App.css';
import CompontentA from './component/CompontentA';
import ContextProvider from './component/useCountContext';

function App() {
  return (
    <div className="App">

      <ContextProvider>
      <CompontentA/>
      </ContextProvider>
    
    </div>
  );
}

export default App;
