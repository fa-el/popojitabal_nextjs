export default function DefaultButton({label, className="", onClick=() => {}, ...props}){
  return (
    <button className={className ?? 'text-white'} onClick={onClick} {...props}>
      {label}
    </button>
  )
}