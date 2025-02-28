
interface CartProps{
    items: CartItem[]
}

function Cart({ items } : CartProps) {

    console.log(items)

    return (
        <div className={'border-2 bg-blue-400 h-100'}>
            Cart

            <ul>
                {items.map(item => {
                    const {menu,qty} = item

                    return (
                        <li key={menu.mno}>
                            {menu.name} -- {qty}
                        </li>
                    )

                } )}

            </ul>

        </div>
    );
}

export default Cart;