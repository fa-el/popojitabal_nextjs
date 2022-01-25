export default function DefaultButton({label, className="", onClick=() => {}, ...props}){
  return (
    <button className={`${className}`} onClick={onClick} {...props}>
      {label}
    </button>
  )
}