'use client';
import { useEffect, useState } from "react";
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/UseProfile";
import UserForm from "@/components/layout/UserForm";
import { useParams } from "next/navigation";


export default function EditUserPage(){
    const{loading, data} = useProfile();
    const{user, setUser} =useState(null);
    const{id} = useParams();

    useEffect(() => {
        fetch('/api/profile?_id='+id).then(res =>{
            res.json().then(user =>{
                
                setUser(user);
            });
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function handleSaveButtonClick(ev, data) {
        ev.preventDefault();
        const promise =new promise(async (resolve, reject) => {
            const res = await  fetch('/api/profile', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...data, _id:id}),
            });

            if (res.ok)
            resolve();
            else
            reject();

        });

        await toast.promise(promise,{
            loading: 'Saving User...',
            success: 'User Saved',
            error: 'An Error has occurred',
        });
       
    }


    if(loading){
        return 'Loading user profile...';
    }

    if(!data.admin){
        return 'Not an admin';
    }

    return(
        <section className="mt-8 mx-auto max-w-2xl">
            <UserTabs isAdmin={true} />
            <div className="mt-8">
                <UserForm user={user}  onSave ={handleSaveButtonClick} />
            </div>
        </section>
    )
}