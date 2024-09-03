import MainBody from '../components/MainBody';
import Navbar from '../components/Navbar';
import CheckedCategoriesProvider from '../providers/CheckedCategoriesProvider';

function HomeScreen() {
    return (
        <>
            <Navbar></Navbar>
            <CheckedCategoriesProvider>
                <MainBody></MainBody>
            </CheckedCategoriesProvider>
        </>
    );
}
export default HomeScreen;
