import { useCheckedCategories } from '../providers/CheckedCategoriesProvider';
import ItemCarousel from './ItemCarousel';
import SearchTools from './SearchTools';

function MainBody() {
    const { checkedCategories } = useCheckedCategories();
    
    const filterFunction = (data) => {
        if (checkedCategories.length === 0) {
            return [...data];
        } else {
            return data.filter(
                (val) => checkedCategories.indexOf(val['category']) !== -1
            );
        }
    };
    const sortFunction = (data, order) =>
    {
        if (order === 'l2h')
        {
            data.sort((a, b) => a.price - b.price);
        } else if (order === 'h2l')
        {
            data.sort((a, b) => b.price - a.price );
        } else if (order === 'r')
        {
            data.sort((a, b) => b.rating.rate - a.rating.rate);
        }
    }
    return (
        <div className="columns">
            <SearchTools></SearchTools>
            <ItemCarousel filterFunction={filterFunction} sortFunction={sortFunction}></ItemCarousel>
        </div>
    );
}
export default MainBody;
