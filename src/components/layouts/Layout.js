
import { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Headers from './Header';
import { navMenu, rightNavMenu } from '../../data/menus';
export default function Layout ({children, ...props}) {

  useEffect(() => {

  }, []);
   
  return (
    <>
      <div className="relative overflow-hidden">
        <Headers title="Popojitabal" navMenu={navMenu} rightMenu={rightNavMenu}/>
        <main className="-mt-10 pt-10 bg-gray-900 h-screen overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  )
}