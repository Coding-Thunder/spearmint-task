import React, { useState } from 'react'
import { HeaderItem } from './Header.interfaces'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../../utils/ROUTES'

const Header: React.FC = () => {
    const [active, setActive] = useState(0)
    const navigate = useNavigate();

    const headerItems = [
        {
            label: "Area Chart",
            function: () => { 
                navigate(ROUTES.root)
             }
        },
        {
            label: "Line Chart",
            function: () => {
                navigate(ROUTES.line)
             }
        },
        {
            label: "Go Back",
            function: () => {
                navigate(ROUTES.root)
             }
        },
    ]
    return (
        <div className='flex w-1/3 gap-2  bg-blue-500  rounded-md p-2'>
            {headerItems.map((item: HeaderItem,num:number) => (
                <div onClick={() => {
                    item.function()
                    setActive(num)
                }} 
                className={` hover:bg-firebaseYellow p-4 font-semibold text-2xl text-white  cursor-pointer ${active === num && 'bg-firebaseYellow'} transition-all rounded-md`}>{item.label}</div>
            ))}
        </div>
    )
}

export default Header
