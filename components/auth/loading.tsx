import Image from "next/image";

const Loading = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Image
                src="/logo.svg"
                alt="logo"
                width={128}
                height={128}
                className="animate-pulse duration-700"
            />
        </div>
    );
}
 
export default Loading;