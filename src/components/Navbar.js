import { Disclosure } from '@headlessui/react'
import { NavLink } from 'react-router-dom';
import { UilBars, UilTimes } from '@iconscout/react-unicons'

const navigation = [
    {name:"Home", href:"/"},
    {name:"Events", href:"/events"},
    // {name:"Projects", href:'#'},
    // {name:"Dreamspark", href:"/dreamspark"},
    {name:"Members", href:"/members"},
    {name:"Contact Us", href:"/contact-us"}
]

export default function Navbar() {
  return (
    <Disclosure as="nav" className="px-4 backdrop-blur-3xl bg-blend-darken fixed top-0 rounded-b-xl text-gray-100 z-10 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-4">
            <div className="relative h-16 md:h-20 flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2 m-1 text-gray-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <UilTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <UilBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end md:justify-start">
                <div className="flex flex-1 items-center justify-end md:justify-start">
                  <img
                    className="block h-16 md:h-20 w-auto py-1 md:py-2"
                    src={process.env.PUBLIC_URL + "/images/mstc.png"}
                    alt="MSTC"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          isActive ? " text-white px-2 py-2 scale-105 rounded-md text-md font-bold text-underline" : 
                          'transition hover:ease-in-out duration-300 text-gray-100 hover:scale-105 hover:text-white px-2 py-2 rounded-md text-md font-medium'
                        }
                        //className='hover:bg-gray-700/[.5] hover:text-white px-2 py-2 rounded-lg text-md font-medium'
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="block md:hidden">
            <div className="space-y-2 px-4 pt-2 pb-3">
              {navigation.map((item) => (
                <div className='flex rounded-lg justify-center'>
                <Disclosure.Button 
                as={NavLink} 
                exact
                to={item.href}
                className='aria-[current="page"]:bg-gray-800/[0.5] hover:bg-gray-800/[0.5] hover:text-white px-2 py-2 w-full rounded-lg text-center text-md font-medium'
                //className='hover:bg-gray-700/[.5] hover:text-white px-2 py-2 w-full rounded-lg text-center text-md font-medium'
                >
                {item.name}
                </Disclosure.Button>  
                </div>
                          
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}