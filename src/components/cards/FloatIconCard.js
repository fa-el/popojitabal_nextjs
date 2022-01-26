import { CodeIcon } from "@heroicons/react/outline";

export default function FloatIconCard({
  children,
  icon = <CodeIcon  className="h-6 w-6 text-white" aria-hidden="true"/>,
}){
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-xl mt-10">
      <div className="flex flex-row-reverse relative pt-8 px-6 pb-8 md:px-8">
        <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
          {icon}
        </div>
      </div>
      {children}
    </div>
  )
}