import { useData } from '../providers/DataProvider';
import CategoryFilter from './CategoryFilter';
import { useCheckedCategories } from '../providers/CheckedCategoriesProvider';

function SearchTools() {
    const { data } = useData();
    const { checkedCategories, onCategoryClick } = useCheckedCategories();
    var finalCategories = {};
    data.map((val, i) => {
        finalCategories[val['category']] =
            (checkedCategories.indexOf(val['category']) === -1)
                ? false
                : true;
    });
    return (
        <CategoryFilter
            name={'Product Type'}
            categories={finalCategories}
            onSelectCategroy={onCategoryClick}
        ></CategoryFilter>
    );
}
export default SearchTools;
