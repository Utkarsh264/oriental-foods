'use client';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../AppContext";
import Cart from "../icons/Cart";
export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName =userData?.name || userData?.email;
  const {cartProducts} = useContext(CartContext);
  if (userName && userName.includes(' ')){
    userName = userName.split(' ')[0];
  }

    return(
        <header className="flex text-center justify-between">
      <Link className= "text-primary font-semibold text-2xl" href='/'>Oriental Foods</Link>
      <nav className=" flex item-center gap-8 text-gray-500 font-semibold">
      
        <Link href={'/'}>Home</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        
        </nav>
        <nav className="flex item-center gap-4 text-gray-500 font-semibold">
          {status === 'authenticated' && (
            <>
            <Link href={'/profile'} className="whitespace-nowrap">Hi, {userName}</Link>
            <button onClick={() => signOut()} className="bg-primary text-white px-6 py-1 rounded-full">
              Log Out
              </button>
            </>
          )}
          { status === 'unauthenticated' && (
            <>
            <Link href={'/login'}>Login</Link>
            <Link href={'/register'} className="bg-primary text-white px-6 py-1 rounded-full">Register</Link>
            </>
          )}

          
            <Link href={'/cart'} className="relative"><Cart /><span className="absolute -top-2 -right-4
             bg-primary text-white text-xs py-1 px-1.5 rounded-full leading-3">
              {cartProducts.length}</span></Link>
          
        
        </nav>
        </header>
    );
}