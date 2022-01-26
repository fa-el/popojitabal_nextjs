/* This example requires Tailwind CSS v2.0+ */
import { InformationCircleIcon } from '@heroicons/react/solid'

export default function DefaultAlert({
  icon= false,
  msg="This is default alert example",
  bgColor='bg-blue',
  color='text-blue',
  dark = true
}) {
  let bgOpacity = '50';
  let opacity = '700';
  if(dark) {
    bgOpacity = '900';
    opacity = '400';
  }
  if(!icon) icon = <InformationCircleIcon className={`h-5 w-5 ${color}-400`} aria-hidden="true" />;
  return (
    <div className={`rounded-md ${bgColor}-${bgOpacity} p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className={`text-sm ${color}-${opacity}`}>{msg}</p>
        </div>
      </div>
    </div>
  )
}
