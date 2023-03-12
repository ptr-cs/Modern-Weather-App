import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Settings } from "./components/Settings";
import { About } from "./components/About";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/settings',
        element: <Settings />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    }
];

export default AppRoutes;
