import sty from "./Input.module.css";

function Input({type, text, name, placeholder, hendleOnChenge, value}){
    return (
        <div className={sty.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                value={value} 
                onChange={hendleOnChenge}/>
        </div>
    )
}

export default Input