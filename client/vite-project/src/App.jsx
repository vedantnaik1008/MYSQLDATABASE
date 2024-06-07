import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { router } from './routes';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    {router.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
