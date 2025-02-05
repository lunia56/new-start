import { cnSuperButton } from './SuperButton.classname.ts'
import './SuperButton.css'
import { ECustomButtonState, EButtonTheme } from '../constants/SuperButtonStates.ts'

type TProps = {
    title: string,
    theme: EButtonTheme,
    isSecondary: boolean,
    customButtonState: ECustomButtonState,
}

export const SuperButton = ({ title, theme, isSecondary, customButtonState }: TProps) => {
    const onClickHandle = () => {
        console.log('Hello world')
    }
    const disabled = customButtonState === ECustomButtonState.DISABLED
    const hovered = customButtonState === ECustomButtonState.HOVERED
    return (
        <button
            className={cnSuperButton({ theme, isSecondary, disabled, hovered })}
            onClick={() => onClickHandle()}
            disabled={disabled}
        >{title}</button>
    )
}
