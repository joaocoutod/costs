import sty from "./Select.module.css"

function Select({name, text, options, handleOnChenge, value}){
    return (

        <div className={sty.form_control}>
            <label htmlFor={name}>{text}</label>
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChenge} 
                valor={value || ''}
                >

                <option disabled selected>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>

    )
}

export default Select