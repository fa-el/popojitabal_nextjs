import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'

export default function ToggleButton({
    className, 
    toggle=(e) => {
        console.log(e)
    }, 
    iconOn = null,
    iconOff = null,
    label = 'Swicth',
    value = false
}) {


    return (
        <div className={["h-full", className].join(' ')}>
            <Switch
            as='button'
            checked={value}
            onChange={() => toggle(!value)}
            className={[
                style.switch, 
                value ? style.switchOn : style.switchOff
            ].join(' ')}
            >
                <span className="sr-only">{label}</span>
                <span
                    className={[
                        style.handle, 
                        value ? style.handleOn : style.handleOff
                    ].join(' ')}
                >{value ? iconOn : iconOff}</span>
            </Switch>
        </div>
    )
}

const style = {
    switch: 'relative inline-flex h-6 w-11 items-center rounded-full shrink-0 cursor-pointer border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
    handle: 'inline-block h-4 w-4 transform rounded-full pointer-events-none shadow-lg ring-0 transition duration-200 ease-in-out', 
    switchOn: 'bg-gray-300',
    switchOff: 'bg-gray-800',
    handleOn: 'translate-x-5 bg-gray-600',
    handleOff: 'bg-gray-200 translate-x-1 text-gray-600'
}
