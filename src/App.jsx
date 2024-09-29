
import './App.css'
import { useRoutes ,BrowserRouter} from 'react-router-dom'
import routes from './routers/index'
function App() {
  const GetRoutes = ()=> useRoutes(routes)
  return (
    <BrowserRouter>
      <GetRoutes ></GetRoutes>
    </BrowserRouter>
  )
}

export default App
