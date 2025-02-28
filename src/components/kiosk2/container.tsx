import Menus from "./menus.tsx";
import Cart from "./cart.tsx";
import {useState} from "react";

function Container() {

    const menuArr: Menu[] = [
        {mno: 1, name:'Drip Coffee', price: 4000, imgName:'M1.jpg', category:'C'},
        {mno: 2, name:'Latte', price: 5000, imgName:'M2.jpg', category:'C'},
        {mno: 3, name:'Apple Cake', price: 7000, imgName:'M3.jpg', category:'D'},
        {mno: 4, name:'Key Ring', price: 3000, imgName:'M4.jpg', category:'G'},
        {mno: 5, name:'Cake', price: 7000, imgName:'M3.jpg', category:'D'},
        {mno: 6, name:'Drip Bag', price: 3000, imgName:'M4.jpg', category:'G'},
    ]

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addCart = (mno:number) => {
        console.log(mno)

        const targetMenu = menuArr.filter(m => m.mno === mno)[0]

        //이미 담겨있나?
        const filterResultArr = cartItems.filter(item => item.menu.mno === mno)

        if(filterResultArr.length === 0){
            const item:CartItem = {menu: targetMenu, qty:1}
            setCartItems([...cartItems, item])
        }else {
            const item:CartItem =  filterResultArr[0]
            item.qty += 1
            setCartItems([...cartItems])
        }

    }

    return (
        <div>
            <Menus menus={menuArr} addCart={addCart}></Menus>
            <Cart items={cartItems} ></Cart>
        </div>
    );
}

export default Container;