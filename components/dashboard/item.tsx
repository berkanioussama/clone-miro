'use client'

import { cn } from "@/lib/utils"
import { useOrganizationList, useOrganization } from "@clerk/nextjs"
import Image from "next/image"
import Hint from "@/components/dashboard/hint"

interface ItemProps {
    id: string
    name: string
    imageUrl: string
}

const Item = ({id, name, imageUrl}: ItemProps) => {

    const { organization } = useOrganization()
    const { setActive } = useOrganizationList()

    const isActive = organization?.id === id

    const onClick = () => {
        if(!setActive) return;

        setActive({organization: id})
    }

    return (
        <div className="aspect-square relative">
            <Hint label={name} side="right" align="start" sideOffset={16}>
                <Image
                    fill
                    src={imageUrl}
                    alt={name}
                    onClick={onClick}
                    className={cn(
                        "rounded-md cursor-pointer opacity-60 hover:opacity-100 transition",
                        isActive && "opacity-100"
                    )}
                />
            </Hint>
        </div>
    );
}
 
export default Item;