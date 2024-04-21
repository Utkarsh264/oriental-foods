'use client';
import { useContext, useEffect, useState } from "react";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";
import { CartContext, cartProductPrice } from "@/components/AppContext";
import Trash from "@/components/icons/Trash";
import AddressInputs from "@/components/layout/AddressInputs";
import {useProfile} from "@/components/UseProfile";

export default function CartPage(){

    const {cartProducts, removeCartProduct} = useContext(CartContext);
    const [address, setAddress] = useState({});
    const {data: profileData} = useProfile();


    useEffect(() =>{
        if (profileData?.city) {
            const {phone, streetAddress, city, pinCode, state} = profileData;
            const addressFromProfile = {phone, streetAddress, city, pinCode, state};
            setAddress(addressFromProfile);
        }
    }, [profileData]);



    let subtotal = 0;
    for ( const p of cartProducts){
        subtotal += cartProductPrice(p);
    }

    function handleAddressChange(propName, value){
        setAddress(prevAddress => ({...prevAddress, [propName]: value}));
    }

    async function proceedToCheckout(ev){
        ev.preventDefault();
        const response = await fetch('/api/checkout',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                address,
                cartProducts,
        }),
    });
    // const link = await response.json();
    // window.location = link;

    }
    return(
        <section className="mt-8">
            <div className="text-center">
                <SectionHeaders mainHeader ="Cart" />
            </div>
            <div className="mt-8 grid gap-8 grid-cols-2">
                <div>
                    {cartProducts?. length ===0 && (
                        <div> No Products in your cart </div>
                    )}
                    {cartProducts?.length > 0 && cartProducts.map((product, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className=" flex items-center gap-4  border-b py-4">
                            <div className="w-24">
                                <Image width ={240} height= {240} src={product.image} alt={''} />
                            </div>
                            <div className="grow">
                                <h3 className="font-semibold">
                                {product.name}
                                </h3>
                                {product.size && (
                                    <div className="text-sm">Size: <span>{product.size.name}</span></div>
                                )}
                                {product.extras?.length > 0 && (
                                    <div className="text-sm text-gray-500">
                                        {product.extras.map ( extra => (
                                            // eslint-disable-next-line react/jsx-key
                                            <div> {extra.name} ₹{extra.price} </div>
                                        ))}
                                        </div>
                                )}
                                </div>
                                <div className="text-lg font-semibold">
                                    ₹{cartProductPrice(product)}
                                    </div>
                                < div className="ml-2">
                                    <button type="button" onClick={()=> removeCartProduct(index)}
                                    className="p-2"> <Trash /> </button>
                                
                               
                            </div>
                            </div>        
                    ))}
                    <div className=" py-2 flex justify-end items-center pr-16 ">
                        <div className="text-gray-500 ">Subtotal:<br/> Delivery:<br /> Total Amount:<br /></div>
                        
                        <div className="font-semibold text-base pl-2 text-right">₹{subtotal}<br />₹5<br />₹{subtotal + 5}</div>
                    </div>
                    
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-primary font-bold text-lg mb-4">Checkout</h2>
                    <form onSubmit={proceedToCheckout}>
                    <AddressInputs
                          addressProps={address}
                        setAddressProp={handleAddressChange}
                    />
                        <button type="submit"> Pay ₹{subtotal + 5}</button>
                    </form>
                </div>

            </div>
        </section>
    )
}