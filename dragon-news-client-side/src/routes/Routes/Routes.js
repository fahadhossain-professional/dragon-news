import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../../components/Auth/SignIn/SignIn';
import SignUp from '../../components/Auth/SignUp/SignUp';
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
      {
        path: '/',
        loader: async () => {
          return fetch('http://localhost:5000/news');
        },
        element: <Home />
      },
      {
        path: '/category/:id',
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
        element: <Category />
      },
      {
        path: '/news/:id',
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/news/${params.id}`);
        },
        element: <News />
      },
      { path: '/signup', element: <SignUp /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/about', element: <About /> }
    ]
  }
]);

export default routes;
