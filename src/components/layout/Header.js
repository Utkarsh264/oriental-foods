'use client';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName =userData?.name || userData?.email;
  if (userName && userName.includes(' ')){
    userName = userName.split(' ')[0];
  }

    return(
        <header className="flex text-center justify-between">
      <Link className= "text-primary font-semibold text-2xl" href='/'>Oriental Foods</Link>
      <nav className=" flex item-center gap-8 text-gray-500 font-semibold">
      
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
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
        
        </nav>
        </header>
    );
}