'use client'

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Hint from "@/components/dashboard/hint";

const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint label={"Create Organization"} side="right" align="start" sideOffset={16}>
                        <button className="flex justify-center items-center h-full w-full bg-white/25 rounded-md opacity-60 hover:opacity-100 transition">
                            <Plus className="text-white"/>
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[30rem]">
                <CreateOrganization/>
            </DialogContent>
        </Dialog>
    );
}
 
export default NewButton;