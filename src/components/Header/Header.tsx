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
            label: "Bar Chart",
            function: () => {
                navigate(ROUTES.bar)
             }
        },
        {
            label: "Scatter Chart",
            function: () => {
                navigate(ROUTES.scatter)
             }
        }
    ]
    return (
        <div className='desktop:laptop:gap-2 desktop:laptop:justify-start flex desktop:laptop:w-fit  gap-2  bg-blue-500  rounded-md p-2 tablet:w-full tablet:justify-between tablet:gap-0 tablet:p-4'>
            {headerItems.map((item: HeaderItem,num:number) => (
                <div key={`#${item.label}${num}`} onClick={() => {
                    item.function()
                    setActive(num)
                }} 
                className={` hover:bg-firebaseYellow desktop:laptop:p-4 p-2 font-semibold desktop:laptop:text-2xl tablet:text-xl text-white  cursor-pointer ${active === num && 'bg-firebaseYellow'} transition-all rounded-md`}>{item.label}</div>
            ))}
        </div>
    )
}

export default Header
