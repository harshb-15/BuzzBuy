import { useData } from '../providers/DataProvider';
import ItemCard from './ItemCard';

function ItemCarousel({ filterFunction = (f) => f, sortFunction = (f) => f }) {
    const { data } = useData();
    var presentableData = filterFunction(data);
    presentableData = sortFunction(presentableData);
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
