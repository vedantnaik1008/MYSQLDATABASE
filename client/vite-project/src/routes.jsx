import Books from './pages/Books.jsx';
import Add from './pages/Add.jsx';
import Update from './pages/Update.jsx';

export const router = [
    {
        path: '/',
        element: <Books />
    },
    {
        path: '/add',
        element: <Add />
    },
    {
        path: '/update/:id',
        element: <Update />
    }
];
