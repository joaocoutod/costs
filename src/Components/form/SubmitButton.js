import sty from "./SubmitButton.module.css"

function SubmitButton({type, text}){
    return (

        <div>
            <button className={sty.btn} type={type}>{text}</button>
        </div>

    )
}

export default SubmitButton