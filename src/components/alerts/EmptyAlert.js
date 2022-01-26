/* This example requires Tailwind CSS v2.0+ */

export default function EmptyAlert({
  msg="This is default alert example",
  bgColor='bg-blue',
  color='text-blue',
  children,
  dark=false
}) {
  let bgOpacity = '50';
  let opacity = '700';
  if(dark) {
    bgOpacity = '900';
    opacity = '400';
  }
  return (
    <div className={`rounded-md ${bgColor}-${bgOpacity} p-4`}>
      <div className="flex">
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className={`text-sm ${color}-${opacity}`}>{msg}</p>
        </div>
        {children}
      </div>
    </div>
  )
}
