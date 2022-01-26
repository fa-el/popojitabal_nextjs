import { ChevronRightIcon, DotsVerticalIcon } from "@heroicons/react/solid";

export default function SimpleCard({bgColor="", icon="SC", title="Simple Card", subtitle="Example of Simple Card", onClick = () => {}, optionOnClick = () => {}, ...props}){
  return (
    <div className={`flex shadow-sm rounded-md`} onClick={onClick}>
      <div
        className={`${bgColor} flex-shrink-0 flex items-center justify-center w-16 text-white text-md font-medium rounded-l-md`}
      >
        {icon}
      </div>
      <div className="flex-1 flex items-center justify-between border-t border-r border-b bg-gray-200 border-gray-200 rounded-r-md truncate">
        <div onClick={onClick} className="flex-1 px-4 py-2 text-sm truncate">
          <b className="text-gray-900 text-lg font-medium hover:text-gray-600">
            {title}
          </b>
          <p className="text-gray-500">{subtitle}</p>
        </div>
        <div className="flex-shrink-0 pr-2">
          <button
            type="button"
            className="w-8 h-8 inline-flex items-center justify-center bg-gray-200 text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={optionOnClick}
          >
            <span className="sr-only">Open options</span>
            <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}