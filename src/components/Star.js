import { FaStar } from 'react-icons/fa';
function Star({ selected = false, onSelect = (f) => f, style }) {
    return (
        <FaStar
            color={selected === true ? 'gold' : 'grey'}
            size={15}
            onClick={onSelect}
            style={{...style}}
        ></FaStar>
    );
}
export default Star;
