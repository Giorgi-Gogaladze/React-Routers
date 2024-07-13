
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import router from './pages/router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;
