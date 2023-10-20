"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();
  return (
    <div className="flex justify-between p-4 items-center bg-slate-900">
      <Link className="font-bold text-lg text-neutral-300" href={"/"}>
        NextAuth
      </Link>
      {status === "authenticated" ? (
        <button onClick={()=>signOut()} className="bg-neutral-300 text-black px-2 py-1 rounded-md">
          Sign Out
        </button>
      ) : (
        <button onClick={()=>signIn('google')} className="bg-neutral-300 text-black px-2 py-1 rounded-md">
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;
