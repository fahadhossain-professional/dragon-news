import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/Pages/About/About';
import Category from '../../components/Pages/Category/Category';
import Home from '../../components/Pages/Home/Home';
import News from '../../components/Pages/News/News';
import Main from '../../layout/Main';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/category/:id', element: <Category /> },
      { path: '/news/:id', element: <News /> },
      { path: '/about', element: <About /> }
    ]
  }
]);

export default routes;
