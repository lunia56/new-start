import './App.css'
import {SuperButton} from './components/SuperButton/SuperButton.tsx'
import {useEffect, useState} from 'react'
import {cnApp} from './App.classname.tsx'

export type Theme = 'white' | 'black'
export type State = 'normal' | 'hovered' | 'disabled'

function App() {

    const [theme, setTheme] = useState<Theme>('white')
    const [secondary, setSecondary] = useState<boolean>(false)
    const [state, setState] = useState<State>('normal')

    useEffect(() => {
        document.body.style.backgroundColor = theme
        document.body.style.color = theme === 'white' ? 'black' : 'white'

    }, [theme])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.currentTarget.value as State
        setState(value)
    }

    return (
        <>
            <div className={cnApp('superButton')}>
                <SuperButton title={'супер кнопка'} theme={theme} isSecondary={secondary} state={state}/>
            </div>


            <div className={cnApp('container')}>
                <div className={cnApp('box')}>
                    <label htmlFor="toggle">Dark Theme:</label>
                    <input
                        type={'checkbox'}
                        id="toggle"
                        onChange={() => setTheme(theme === 'white' ? 'black' : 'white')}/>
                </div>

                <div className={cnApp('box')}>
                    <label htmlFor="toggle">Secondary:</label>
                    <input
                        type={'checkbox'}
                        id="toggle"
                        onChange={() => setSecondary(prevState => !prevState)}/>
                </div>


                <div className={cnApp('box')}>
                    <label htmlFor="dropdown">State:</label>
                    <select id="dropdown" onChange={handleChange}>
                        <option value="normal">normal</option>
                        <option value="hovered">hovered</option>
                        <option value="disabled">disabled</option>
                    </select>

                </div>
            </div>
        </>
    )
}

export default App
