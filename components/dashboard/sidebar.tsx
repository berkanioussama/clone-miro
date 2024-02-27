import NewButton from "@/components/dashboard/new-button";
import List from "@/components/dashboard/list";

const Sidebar = () => {
    return (
        <aside className="fixed left-0 flex flex-col gap-y-4 p-3 w-16 h-full bg-neutral-600 text-white z-10 ">
            <List/>
            <NewButton/>
        </aside>
    );
}
 
export default Sidebar;