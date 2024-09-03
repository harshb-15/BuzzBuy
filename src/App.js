import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import CartScreen from './pages/CartScreen';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeScreen></HomeScreen>} />
                <Route path="/cart" element={<CartScreen></CartScreen>} />
            </Routes>
        </>
    );
}

export default App;
