/* This example requires Tailwind CSS v2.0+ */
import { forwardRef, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { classNames } from '../../helpers/theme'
export default forwardRef(function DropDownButton({
    children,
    menuBtnLabel = "",
    menuBtnIcon = <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />,
    ...props
}, ref) {
    const {theme} = useTheme();
    console.log(children);
    return (
        <Menu as="div" className="relative inline-block text-left">
            {({open}) => (<>
                <div>
                    <Menu.Button className={classNames(
                        "inline-flex justify-center w-full rounded-md shadow-sm px-3 py-2 text-sm font-medium border-0 outline-none ",
                        theme == 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200 hover:text-gray-900'
                    )}>
                        {menuBtnLabel}
                        {menuBtnIcon}
                    </Menu.Button>
                </div>

                {/* <Transition
                    as={'div'}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    show={open}
                > */}
                    {open && (<Menu.Items className={classNames(
                        "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none",
                        theme == 'dark' ? 'bg-gray-800' : 'bg-gray-100 text-gray-900'
                    )} static>
                        {typeof children === 'array' ? children.map((item, index) => <Menu.Item as={'div'} key={index}>
                            <div className='w-full'>{item}</div>
                        </Menu.Item>) : <Menu.Item>
                            <div className='w-full'>{children}</div>
                        </Menu.Item>}
                    </Menu.Items>)}
                {/* </Transition> */}
            </>)}
            
        </Menu>
    )
})
