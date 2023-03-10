import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { GoLogoGithub } from 'react-icons/go'
import { SiIconfinder } from 'react-icons/si'
// import { SiOpenaccess } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
// import Logo from '../assets/images/logo.svg'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    const Menus = [
        { title: 'GitHub Search', path: '/home', src: <GoLogoGithub/> },
        { title: 'InsighGather', path: '/Dashboard', src: <SiIconfinder /> },
        // { title: 'Whois', path: '/whois', src: <CgProfile /> },
        // { title : 'Logout', path: '/login', src: <SiOpenaccess />, gap: 'true' },
    ]

    return (
        <>
            <div
                className={`${
                    open ? 'w-60' : 'w-fit'
                } hidden sm:block relative  duration-300 border-r border-gray-200   p-5 bg-slate-900`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl  rounded-full cursor-pointer top-9 -right-4 fill-white bg-slate-900`}
                    onClick={() => setOpen(!open)}
                />
                <Link to='/'>
                    <div className={`flex ${open && 'gap-x-4'} items-center`}>
                        {/* <img src={Logo} alt='' className='pl-2' /> */}
                        {open && (
                            <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                                Goal Quest
                            </span>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer bg-black text-white hover:text-white  
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    ' bg-green-800'
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
