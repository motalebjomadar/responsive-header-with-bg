import { useState } from "react";
import Links from "./Links";
import { IoMenu } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";


const Header = ({handleBgColor}) => {
    const [open, setOpen] = useState(false);

    const routes = [
        {
            id: 1,
            path: "/dashboard",
            name: "Dashboard"
        },
        {
            id: 2,
            path: "/profile",
            name: "Profile"
        },
        {
            id: 3,
            path: "/settings",
            name: "Settings"
        },
        {
            id: 4,
            path: "/notifications",
            name: "Notifications"
        },
        {
            id: 5,
            path: "/help",
            name: "Help"
        }
    ];

    return (
        <nav className='md:flex items-center h-9'>
            <div onClick={()=> setOpen(!open, handleBgColor(!open))} className='md:hidden text-4xl'>
            {
                open === true? <RiCloseLargeFill /> : <IoMenu />
            }
                
            </div>
            <ul className={`md:flex font-bold absolute md:static duration-1000
            ${open? 'top-9' : '-top-60'}`}>
                {
                    routes.map(route => <Links key={route.id} links={route}></Links>)
                }
            </ul>
        </nav>
    );
};

export default Header;