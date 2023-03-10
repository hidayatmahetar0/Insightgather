import React from 'react'
// import { ThemeProvider } from './ThemeContext';
// import Background from './Background';
// import Toggle from './ThemeToggle';


const Navbar = () => {

    const doLogout = () => {
        const username = localStorage.getItem("username");
        localStorage.removeItem("username");
        localStorage.removeItem("userID");
        // socket.disconnect();
        navigate("/login");
      };
    return (
        
        <nav className=' border-gray-200  px-2 py-2.5 rounded bg-slate-900'>
            <div className='container flex justify-between items-center mx-auto'>
                <div className='flex items-center mx-auto'>
                    <span  className='text-xl font-medium whitespace-nowrap dark:text-white'>
                        Welcome {localStorage.getItem("username")}
                    </span>
                </div>

                <div className='flex justify-end '>
            <span className="ml-4 font-bold hover:cursor-pointer text-white" onClick={doLogout}>Logout</span>

                    {/* <Toggle /> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar