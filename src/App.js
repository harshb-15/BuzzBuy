import Navbar from './components/Navbar';
import CheckedCategoriesProvider from './providers/CheckedCategoriesProvider';
import MainBody from './components/MainBody';

function App() {
    return (
        <>
            <Navbar></Navbar>
            <CheckedCategoriesProvider>
                <MainBody></MainBody>
            </CheckedCategoriesProvider>
        </>
    );
}

export default App;
