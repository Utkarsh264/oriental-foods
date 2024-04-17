'use client';
import Image from "next/image"; 
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [ email, setEmail]= useState('');
    const [ password, setPassword]= useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev){
        ev.preventDefault();
        setLoginInProgress(true);

        await signIn ('credentials', {email , password, callbackUrl: '/'});

        setLoginInProgress(false);

    }
    return(
        <section className="mt-8">
             <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
             <form className="max-w-xs mx-auto " onSubmit={handleFormSubmit}>
             <input type="email" name= "email" placeholder="email" value={email}
                    disabled = {loginInProgress}
                    onChange={ev => setEmail(ev.target.value)}/>
            <input type="password" name = "password" placeholder="password" value={password}
                    disabled = {loginInProgress}
                    onChange={ev => setPassword(ev.target.value)} />
            <button type="submit" disabled = {loginInProgress} >
                         Login
            </button>
                    <div className="my-4 text-center text-gray-500">or login with provider
                    </div>
                    <button className=" flex gap-2 justify-center  text-center w-full  border border-gray-500 rounded-xl px-2 py-2
                     text-gray-700 font-semibold " type = "button" onClick={()=> signIn('google',{callbackUrl: '/'})}>
                        <Image className="mx-0"src={'/google icon.png'} alt={''} width={25} height={25}/>
                        Login with  Google
                    </button>
             </form>
        </section>
    )
    
}