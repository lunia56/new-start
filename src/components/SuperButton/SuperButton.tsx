import {FC,} from 'react'
import {cnSuperButton} from './SuperButton.classname'
import './SuperButton.css'
import {State, Theme} from '../../App.tsx'

type SuperButtonProps = {
    title: string,
    theme: Theme,
    isSecondary: boolean,
    state: State,
}


export const SuperButton: FC<SuperButtonProps> = ({title, theme, isSecondary, state}) => {

    const onClickHandle = () => {
        console.log('Hello world')
    }
    const disabled = state === 'disabled'
    const hovered = state === 'hovered'

    return (
        <button
            className={cnSuperButton({theme, isSecondary, disabled, hovered})}
            onClick={() => onClickHandle()}
            disabled={state === 'disabled'}
        >{title}</button>
    )
}
