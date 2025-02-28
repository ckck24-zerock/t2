import {useState} from "react";

interface MenusProps{

    menus: Menu[],
    addCart: (mno:number) => void

}

function Menus( { menus, addCart }:MenusProps ) {

    const [cat, setCat] = useState('A')

    const changeCat = (cat:string) => {
        setCat(cat)
    }

    const filteredMenus = menus.filter(menu => {
        if(cat === 'A'){
            return true
        }else {
            return menu.category === cat
        }
    })

    const handleClick = (mno:number)=> {
        if(confirm("장바구니에 추가하실래요?")) {
            addCart(mno)
        }
    }


    return (
        <div>
            <div className={'flex border-1 m-4' }>
                <div onClick={() => changeCat('A')} >ALL</div>
                <div onClick={() => changeCat('C')}>Coffee</div>
                <div onClick={() => changeCat('D')}>Desserts</div>
                <div onClick={() => changeCat('G')}>Goods</div>
            </div>

            <ul>
                {filteredMenus.map(menu =>
                    <li key={menu.mno} onClick={() => handleClick(menu.mno)}>
                        {menu.name} - {menu.price}
                    </li>
                )}

            </ul>

        </div>
    );
}

export default Menus;