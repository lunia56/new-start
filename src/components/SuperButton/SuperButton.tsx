import {FC, } from 'react'
import { cnSuperButton } from './SuperButton.classname';
import './SuperButton.css';
import {Theme} from '../../App.tsx'

type SuperButtonProps = {
    title:string,
    theme: Theme,
    disabled:boolean,
    isSecondary:boolean,
}



export const SuperButton:FC<SuperButtonProps> = ({title,theme,isSecondary,disabled}) => {

    const onClickHandle =(event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log('Hello world'+event)
    }

    return (
        <button
            className={cnSuperButton({theme,isSecondary,disabled})}
            onClick={(event)=>onClickHandle(event)}
            disabled={!disabled}
        >{title}</button>
    )
}
