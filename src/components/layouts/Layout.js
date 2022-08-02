
import { Fragment, useEffect, useState } from 'react'
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
        <Headers title="Popojitabal" menus={navMenu}/>
        <main className={style.main}>
          {children}
        </main>
      </div>
    </>
  )
}

const style = {
  main: "-mt-10 pt-10 h-screen overflow-y-auto"
}