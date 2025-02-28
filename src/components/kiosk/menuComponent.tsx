
interface MenuComponentProps {

    menus: Menu[]

}

function MenuComponent( {menus} : MenuComponentProps) {

    const menuLis = menus.map( menu =>
        <div key={menu.mno} className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={menu.imgName} alt={menu.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">{menu.name}</h2>
                <p className="text-gray-600 mt-1 text-lg font-bold">${menu.price}</p>
            </div>
        </div>
    )

    return (
        <div>
            <div>Menus</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {menuLis}
            </div>
        </div>
    );
}

export default MenuComponent;