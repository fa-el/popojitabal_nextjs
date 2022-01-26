/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/solid'

export default function ActionAlert({
  icon = false,
  msg = 'Alert here',
  description= 'My alert with action button',
  bgColor = 'bg-green',
  color = 'text-green',
  actionList=[
    <button
      type="button"
      className="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
    >
      First Button
    </button>,
    <button
      type="button"
      className="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
    >
      Second Button
    </button>
  ],
  dark = false
}) {
  if(!icon) icon = <CheckCircleIcon className={`h-5 w-5 ${color}-400`} aria-hidden="true" />
  let bgOpacity = '50';
  let opacity = '700';
  if(dark) {
    bgOpacity = '900';
    opacity = '400';
  }
  return (
    <div className={`rounded-md ${bgColor}-${bgOpacity} p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${color}-${opacity}`}>{msg}</h3>
          <div className={`mt-2 text-sm ${color}-${opacity}`}>
            <p>{description}</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              {actionList.map((i, key) => i)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
