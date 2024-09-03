import { useCart } from '../providers/CartProvider';
import { useData } from '../providers/DataProvider';

function CartScreen() {
    const { cart, addItemToCart } = useCart();
    const { getItemFromId } = useData();
    return (
        <section class="section">
            <div class="container">
                <h1 class="title">Shopping Cart</h1>
                <div class="box">
                    {cart['items'].map((value, i) =>
                    {
                        const itemFromId = getItemFromId(value["id"]);
                        // console.log(itemFromId);
                        return (
                            <div class="columns is-vcentered" key={i}>
                                <div class="column is-4">
                                    <p class="subtitle">
                                        {itemFromId['title']}
                                    </p>
                                </div>
                                <div class="column is-2 has-text-centered">
                                    <p>${itemFromId['price']}</p>
                                </div>
                                <div class="column is-2 has-text-centered">
                                    <input
                                        class="input is-small"
                                        type="number"
                                        value={value['quantity']}
                                        min="1"
                                        onChange={(e) => {addItemToCart(value["id"], e.target.value)}}
                                    ></input>
                                </div>
                                <div class="column is-2 has-text-centered">
                                    <p>${value['itemTotal']}</p>
                                </div>
                                <div class="column is-2 has-text-centered">
                                    <button class="button is-danger is-small">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <hr></hr>
                <div class="columns">
                    <div class="column is-offset-8 is-4 has-text-right">
                        <p class="title is-5">Total: ${cart['cartTotal']}</p>
                        <button class="button is-primary is-fullwidth">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CartScreen;
