

const Input = ({ type = "text", label, placeholder, className, Icon = null, iconClassName, handlerChange, value }) => {
    return (
        <div className="flex flex-col p-2 justify-center">
            <label htmlFor={label} className=" label pl-1">{label}</label>
            <input type={type} name={label} placeholder={placeholder} value={value} onChange={handlerChange} id={label} className={`${className}`} />
            {Icon && <div className={iconClassName}><Icon  /></div>}
        </div>
    )
}

export default Input
