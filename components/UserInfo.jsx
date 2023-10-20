"use client";
import Image from "next/image";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const { status, data: session } = useSession();
  if (status === "authenticated") {
    return (
      <div className="p-8 rounded-md flex flex-col space-y-4 bg-slate-900">
        <Image className="rounded-full" src={session?.user?.image} width={60} height={60} />
        <div>
            Name: {session?.user?.name}
        </div>
        <div>
            Email: {session?.user?.email}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <SignInButton />
      </div>
    );
  }
};

export default UserInfo;
