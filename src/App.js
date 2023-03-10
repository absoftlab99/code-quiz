import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Quiz from './components/Quiz/Quiz';

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
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
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
        },
        {
          path:'quiz/:id',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element: <Quiz></Quiz>
        },
        {
          path: '*',
          element: <NotFound></NotFound>
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
