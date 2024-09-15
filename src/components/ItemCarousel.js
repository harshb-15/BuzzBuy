import { useData } from '../providers/DataProvider';
import { useSearch } from '../providers/SearchProvider';
import { useSortOrder } from '../providers/SortOrderProvider';
import ItemCard from './ItemCard';

function ItemCarousel({ filterFunction = (f) => f, sortFunction = (f) => f }) {
    const { data } = useData();
    const { sortOrder } = useSortOrder();
    const { search } = useSearch();
    var presentableData = filterFunction(data);
    sortFunction(presentableData, sortOrder);
    presentableData = presentableData.filter((item) => {
        if (item.title.toLowerCase().includes(search.toLowerCase()))
        {
            return item;
        } 
        return null;
    });
    
    return (
        <div className="column columns is-multiline">
            {presentableData.map((value, i) => (
                <div className="column is-one-quarter-desktop" key={i}>
                    <ItemCard {...value}></ItemCard>
                </div>
            ))}
        </div>
    );
}
export default ItemCarousel;
