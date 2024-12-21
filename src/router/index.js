import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/about";
import Home from "../pages/home";
import BlogDetail from "../pages/BlogDetail";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children :[
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: '/blogs/:id',
                element: <BlogDetail/>
            }
        ]
    }
])

export default router;