/* This example requires Tailwind CSS v2.0+ */
import { ExclamationIcon } from '@heroicons/react/solid'

export default function DescriptionAlert({
  icon = false, 
  msg = 'Alert with Description', 
  description = 'This is example of description inside alert',
  bgColor='bg-yellow',
  color='text-yellow',
  dark=false
}) {
  let bgOpacity = '50';
  let opacity = '700';
  if(dark) {
    bgOpacity = '900';
    opacity = '400';
  }
  if(!icon) icon = <ExclamationIcon className={`h-5 w-5 ${color}-400`} aria-hidden="true" />
  return (
    <div className={`${bgColor}-${bgOpacity} rounded-md p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${color}-${opacity}`}>{msg}</h3>
          <div className={`mt-2 text-sm ${color}-${opacity}`}>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
