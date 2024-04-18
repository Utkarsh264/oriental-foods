'use client';
import { CartContext } from "@/components/AppContext";
import Image from "next/image";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import MenuItemTile from "./MenuItemTile";


export default function MenuItem(menuItem){

    const {image, name, description, category , basePrice, sizes, extraAddOnPrices} =menuItem;

    const [showPopup, setShowPopup] = useState(false); 

    const {addToCart} = useContext(CartContext);

    function handleAddToCartButtonClick(){
        if( sizes.length ===0 && extraAddOnPrices.length === 0){
            
            addToCart(menuItem);
            toast.success('Added to cart!');
        }else{
            setShowPopup(true);
        }

    }
    return(
        <>
           {showPopup && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg max-w-md">
                    <Image src ={image} alt ={name} width={300} height ={200} className ="mx-auto" />
                    <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
                    <p className="text-center text-gray-500 text-sm mb-2">{description}</p>
                    {sizes?.length > 0 && (
                        <div className="bg-gray-200 rounded-md p-2">
                            <h3>Pick your size</h3>{
                                sizes.map(size => (
                                    // eslint-disable-next-line react/jsx-key
                                    <label>
                                        <input type = "radio" /> {size.name} {size.price}
                                    </label>
                                )) }
                                </div>
                    )}
                     </div>
            </div>
           )}

           <MenuItemTile  onAddToCart={handleAddToCartButtonClick} 
           {...menuItem} />
            

    </>

    );
}