import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Root from './routes/root'
import Main from './routes/main/Main'
import Card from './routes/card/Card'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Main />} />
      <Route path='/card' element={<Card />} />
    </Route>
  )
)

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
