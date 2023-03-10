import React, { useState } from 'react';
import Menu from '../data.js'
import { Link } from 'react-router-dom';


const Home = () => {

  const [fname, setFname] = useState('')
  console.log(fname)
  const handleChange = e => {
    setFname(e.target.value)

  }
  const [visible, setVisible] = React.useState(false);
  const [menuData, setMenuData] = useState(Menu);

  return (
    <div className="bg-slate-50 overflow-y-auto">
      <div className="container m-6 h-screen ">
        <div class="flex flex-col items-center">
          <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative px-5  mx-auto">
            <div class="absolute inset-y-0 left-5 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="search" onClick={() => setVisible(visible => !visible)} value={fname} onChange={handleChange} placeholder="Domain name" required class="block w-80 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

          </div>



        </div>

        <div class="flex flex-col items-center">
          <h3 className='font-bold text-lg'>" Search the any <a class="text-green-600"> "Domain Name" </a></h3>
          <p className='font-bold max-w-[388px] py-6 text-center text-gray-800'>
            Click the search button to show option to and search
          </p>
          {/* <a
          className='font-bold text-blue-300 text-blue'
          href='https://meshgradient.com/'
        >
          https://meshgradient.com/
        </a> */}
        </div>



        <div class="grid grid-cols-3 gap-3">
          {menuData.map((curElem) => {
            const { name, img, link } = curElem;
            const newstring = link.replace(/domainname/gi, `${fname}`);
            // console.log(fname)

            return (
              <div className='card m-6 shadow-slate-900/60  shadow-[-1px_6px_17px_2px] compact text-black side bg-green-800'>
                <Link to={`${newstring}`} target="_blank">
                  <div className='flex-row items-center space-x-4 card-body'>

                    <div>
                      <div className='avatar '>
                        <div className='rounded-full shadow w-14 h-14'>
                          <img class="w-10 h-10 rounded-full" src={img} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className='card-title'>{name}</h2>
                      {/* <Link to={`/user/${login}`} className='text-base-content text-indigo-700'>Visit Profile</Link> */}
                    </div>

                  </div>
                </Link>
              </div>

            )
          })}


        </div>




      </div>


    </div>

  )

}



export default Home;