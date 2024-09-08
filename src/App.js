import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import CartScreen from './pages/CartScreen';

function App() {
    return (
        <>
            <Routes>
                <Route path="/BuzzBuy" element={<HomeScreen></HomeScreen>} />
                <Route path="/BuzzBuy/cart" element={<CartScreen></CartScreen>} />
            </Routes>
        </>
    );
}

export default App;
