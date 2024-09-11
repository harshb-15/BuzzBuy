import { useCart } from '../providers/CartProvider';
import './../css/styles.css';
import StarRating from './StarRating';
function ItemCard({ id, title, price, description, category, image, rating }) {
    const { addItemToCart, checkItemInCart, removeItemFromCart } = useCart();
    const inCart = checkItemInCart(id) !== -1;
    return (
        <div class="card">
            <div class="card-image p-4">
                <figure class="image is-4by3">
                    <img src={image} alt="item-photo" />
                </figure>
            </div>
            <div class="card-content has-text-centered px-6">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-6">{title}</p>
                        <p class="subtitle is-6">{'$' + price}</p>
                    </div>
                </div>

                <div class="content">
                    {description.split(' ').slice(0, 6).join(' ') + '...'}
                    <br />
                    <StarRating
                        selectedStars={Math.round(rating['rate'])}
                    ></StarRating>
                    <br></br>
                    {inCart === true ? (
                        <button
                            class="button is-primary"
                            onClick={() => removeItemFromCart(id)}
                        >
                            Remove from Cart
                        </button>
                    ) : (
                        <button
                            class="button is-primary"
                            onClick={() => addItemToCart(id)}
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
export default ItemCard;
