import Abute from "./pages/abute/Abute";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Register from "./pages/auth/Register";
import Index from "./pages/home/Index";
import Post from "./pages/post/Post";
import User from "./pages/user/User"
const routes = [
    { path: "/", element: <Index /> },
    { path: "/abute", element: <Abute /> },
    { path: "/user", element: <User /> },
    { path: "/post", element: <Post /> },
    { path: "/user/login", element: <Login /> },
    { path: "/user/logout", element: <Logout /> },
    { path: "/user/register", element: <Register /> },
];

export default routes;