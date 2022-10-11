import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }, 
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'topics',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
