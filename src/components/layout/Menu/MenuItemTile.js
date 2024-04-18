import Cart from "../../icons/Cart"
import Rupee from "../../icons/Rupee";

export default function MenuItemTile({onAddToCart, ... item}){
    const {image, description, name, basePrice} = item;
    return (
        <div className="bg-gray-100 p-2 rounded-md text-left hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <img className="rounded-md border side-4"src={image} alt="shrimp"/>
                <h4 className="text-black text-xl font-extrabold  my-2 text-center">{name}</h4>
                <p className="text-center text-gray-500 line-clamp-3">{description}</p>
                <div className="flex gap-12 my-3">
                    <button type="button" onClick={onAddToCart} className="bg-primary text-white text-sm px-5 py-3 rounded-full flex gap-1">Add to cart <Cart />
                </button>
                <h4 className="flex gap-1 py-2 font-bold"><Rupee /> {basePrice}</h4>
                </div>
        
            </div>
    )
}