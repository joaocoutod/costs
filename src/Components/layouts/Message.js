import { useEffect, useState } from 'react'
import sty from './Message.module.css'

function Message({type, text}){

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        if(!text){
            setVisible(false)
            return
        }

        setVisible(true)
        const timer = setTimeout(() => {setVisible(false)}, 3000)

        return ()=>clearTimeout(timer)
        
    }, [text])

    return (
        <>
        {visible && (
            <div className={`${sty.message} ${sty[type]}`}>{text}</div>
        )}
        </>

    )
}

export default Message