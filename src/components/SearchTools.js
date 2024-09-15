import { useData } from '../providers/DataProvider';
import CategoryFilter from './CategoryFilter';
import SortFilter from './SortFilter';
import { useCheckedCategories } from '../providers/CheckedCategoriesProvider';
import { useSortOrder } from '../providers/SortOrderProvider';

function SearchTools() {
    const { data } = useData();
    const { checkedCategories, onCategoryClick } = useCheckedCategories();
    const { setNewSortOrder } = useSortOrder();
    var finalCategories = {};
    data.map((val, i) => {
        finalCategories[val['category']] =
            (checkedCategories.indexOf(val['category']) === -1)
                ? false
                : true;
    });

    return (
        <div className="rows p-4 pl-5 pr-0 is-justify-content-center">
            <CategoryFilter
                name={'Product Type'}
                categories={finalCategories}
                onSelectCategroy={onCategoryClick}
            ></CategoryFilter>
            <SortFilter onSelectSort={setNewSortOrder}></SortFilter>
        </div>
    );
}
export default SearchTools;
