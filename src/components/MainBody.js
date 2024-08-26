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
    return (
        <div className="columns">
            <SearchTools></SearchTools>
            <ItemCarousel filterFunction={filterFunction}></ItemCarousel>
        </div>
    );
}
export default MainBody;
