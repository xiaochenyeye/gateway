import Home from "../page/home";
import Detail from "../page/detail";
import Login from "../page/login";
const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: '/detail',
        element: <Detail />
    }
]

export default routes