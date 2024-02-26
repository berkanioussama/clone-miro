'use client'

import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <div className="flex items-center gap-x-4 p-5 bg-neutral-100">
            <div className="hidden lg:flex lg:flex-1">
                search
            </div>
            <UserButton/>
        </div>
    );
}
 
export default Navbar;