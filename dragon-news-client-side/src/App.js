import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/Routes/Routes';

const App = () => {
  return (
    <RouterProvider router={routes} />
  );
};

export default App;
