/* This example requires Tailwind CSS v2.0+ */
import { XCircleIcon } from '@heroicons/react/solid'

export default function WithListAlert({
  icon = false,
  msg = 'This My Alert Example with List.',
  bgColor = 'bg-red',
  color = 'text-red',
  descriptionList=[
    'I used a normal html list here.',
    'And here too.'
  ],
  dark=false
}) {
  let bgOpacity = '50';
  let opacity = '700';
  if(dark) {
    bgOpacity = '900';
    opacity = '400';
  }
  if(!icon) icon = <XCircleIcon className={`h-5 w-5 ${color}-400`} aria-hidden="true" />;
  return (
    <div className={`rounded-md ${bgColor}-${bgOpacity} p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${color}-${opacity}`}>{msg}</h3>
          <div className={`mt-2 text-sm ${color}-${opacity}`}>
            <ul role="list" className="list-disc pl-5 space-y-1">
              {descriptionList.map((i, key) => <li key={key}>{i}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
