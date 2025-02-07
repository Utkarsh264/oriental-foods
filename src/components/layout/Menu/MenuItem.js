'use client';
import { CartContext } from "@/components/AppContext";
import Image from "next/image";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import MenuItemTile from "./MenuItemTile";
import Rupee from "@/components/icons/Rupee";


export default function MenuItem(menuItem){

    const {image, name, description, basePrice, sizes, extraAddOnPrices} =menuItem;

    const [showPopup, setShowPopup] = useState(false); 

    const [selectedSize, setSelectedSize] = useState(sizes?.[0] || null);

    const [selectedExtras, setSelectedExtras] = useState([]);

    const {addToCart} = useContext(CartContext);

    function handleAddToCartButtonClick(){
        const hasOptions =  sizes.length > 0 || extraAddOnPrices.length > 0;
        if(hasOptions && !showPopup){
            setShowPopup(true);
            return;
           
        }
        addToCart(menuItem,selectedSize, selectedExtras );
        setShowPopup(false);
        toast.success('Added to cart!');
    }

    function handleExtraThingClick(ev, extraThing) {
        const checked = ev.target.checked;
        if(checked) {
            setSelectedExtras( prev => [...prev, extraThing]);
        }else {
            setSelectedExtras (prev => {
                return prev.filter ( e => e.name !== extraThing.name);

            });
        }
    }

    let selectedPrice = basePrice;
    if (selectedSize){
        selectedPrice += selectedSize.price;
    }
    if (selectedExtras?. length > 0){
        for (const extra of selectedExtras){
            selectedPrice += extra.price;
        }
    }

    return(
        <>
           {showPopup && (
            <div onClick={() => setShowPopup(false)} className="fixed inset-0 bg-black/80 flex items-center justify-center">
                <div onClick={ev => ev.stopPropagation()} className="my-8 bg-white p-2 rounded-lg max-w-md">
                    <div className="overflow-y-scroll p-2" style={{maxHeight: 'calc(100vh - 100px)'}}>
                    <Image src ={image} alt ={name} width={300} height ={200} className ="mx-auto" />
                    <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
                    <p className="text-center text-gray-500 text-sm mb-2">{description}</p>
                    {sizes?.length > 0 && (
                        <div className="py-2">
                            <h3 className="text-center text-gray-900 mb-2"><b><u>Pick your size</u></b></h3>{
                                sizes.map(size => (
                                    
                                    <label key={size._id} className="flex items-center gap-2 p-4 border rounded-md mb-1">
                                        <input type = "radio" onChange={() => setSelectedSize(size)}
                                         checked= {selectedSize?.name === size.name} name ="size"/> {size.name} :   ₹ {basePrice + size.price}
                                    </label>
                                )) }
                                </div>
                    )}
                    {extraAddOnPrices?.length > 0 && (
                        <div className="py-2">
                            <h3 className="text-center text-gray-900 mb-2"><b><u>Pick your Extra Add On</u></b></h3>{
                                extraAddOnPrices.map(extraThing => (
                                    
                                    <label key={extraThing._id} className="flex items-center gap-2 p-4 border rounded-md mb-1">
                                        <input type = "checkbox" onChange={ev => handleExtraThingClick(ev, extraThing)}
                                        checked={selectedExtras.map( e => e._id).includes(extraThing._id)}
                                         name ={extraThing.name}/> 
                                        {extraThing.name}: + ₹ {extraThing.price}
                                    </label>
                                )) }
                                </div>
                    )}
                    <button className="primary sticky bottom-2"type="button" onClick={handleAddToCartButtonClick} >Add to cart ₹{selectedPrice}</button>
                    <button className="mt-2" type="button" onClick={() => setShowPopup(false)}>Cancel</button>
                     </div>
            </div>
            </div>
           )}

           <MenuItemTile  onAddToCart={handleAddToCartButtonClick} 
           {...menuItem} />
            

    </>

    );
}