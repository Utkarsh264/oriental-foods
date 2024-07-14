'use client';
import EditableImage from "@/components/layout/EditableImage";
import { useEffect, useState } from "react";
import MenuItemPriceProps from "@/components/layout/MenuItemPriceProps";
import { Category } from "@/app/models/Category";
import DeleteButton from "@/components/DeleteButton";
import { redirect, useParams } from "next/navigation";
import toast from "react-hot-toast";


export default function MenuItemForm({onSubmit,menuItem}){

    const [image,setImage] =useState(menuItem?.image || '');
    const [name, setName] = useState(menuItem?.name || '');
    const [description, setDescription] = useState(menuItem?.description || '');
    const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
    const [sizes, setSizes] = useState(menuItem?.sizes || []);
    const [category, setCategory] =useState(menuItem?.category || '');
    const [categories, setCategories] = useState([]);
    const [extraAddOnPrices, setExtraAddOnPrices] = useState(menuItem?.extraAddOnPrices || []);

    const {id} = useParams();
    const [redirectToItems, setRedirectToItems]= useState(false);
    


    useEffect(() => {
        fetch('/api/categories').then(res => {
            res.json().then(categories => {
                setCategories(categories);
            });
        });
    }, []);

    async function handleDeleteClick(){
        const promise = new Promise (async(resolve, reject)=>{
            const res = await fetch('/api/menu-items?_id='+id,{
                method:'DELETE',
            });
            if(res.ok)
              resolve();
            else
            reject();


        });
       await toast.promise (promise, {
        loading: 'Deleting...',
        success: 'Deleted',
        error:'Error',
       }) ;


       setRedirectToItems(true);


    }
    if(redirectToItems){
        return redirect('/menu-items');
    }

   

    return(
        <form
         onSubmit={ ev => onSubmit(ev, {image, name, description, basePrice, sizes, extraAddOnPrices, category})}
         className="mt-8 max-w-2xl mx-auto">
        <div className="md:grid items-start gap-4"
            style = {{gridTemplateColumns : '.3fr .7fr'}}>
            <div >
                <EditableImage link={image} setLink={setImage}/>
            </div>
            <div className="grow">
                <label>Item name</label>
                <input type="text" value={name} onChange={ev=> setName(ev.target.value)} />
                <label>Description</label>
                <input type="text"  value={description} onChange={ev=> setDescription(ev.target.value)}/>
                <label>Category</label>
                <select value={category} onChange={ev => setCategory(ev.target.value)}>
                    {categories?.length >0 && categories.map(c => (
                        
                        <option key={c._id} value = {c._id}>{c.name}</option>
                    ))}
                </select>
                <label>Price</label>
                <input type="text"  value={basePrice} onChange={ev=> setBasePrice(ev.target.value)}/>
                <MenuItemPriceProps  name={'Sizes'} addLabel={'Add item size'}props={sizes} setProps={setSizes} />  
                <MenuItemPriceProps name={'Extra Add Ons'} addLabel={'Extra Add On Prices'}
                 props={extraAddOnPrices} setProps={setExtraAddOnPrices}/> 
                 <button type="submit">Save</button>
                 <div className="max-w-md mx-auto mt-2">
                <div className="max-w-md ml-auto pl-4">
                
                    <DeleteButton  label ="Delete this item" onDelete={handleDeleteClick} />
                    
                </div>
            </div>
               

            </div>
        </div>
    </form>
    )
}