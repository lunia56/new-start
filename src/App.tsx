import './App.css'
import {SuperButton} from './components/SuperButton/SuperButton.tsx'
import {useEffect, useState} from 'react'

export type Theme = 'white' | 'black'

function App() {

    const [theme,setTheme]=useState<Theme>('white')
    const [secondary,setSecondary]=useState<boolean>(false)


    useEffect(() => {
        document.body.style.backgroundColor = theme;
    }, [theme]);

  return (
      <>

          <div>hello world</div>
          <SuperButton title={'супер кнопка'} theme={theme} disabled={true} isSecondary={secondary}/>
          <input
              type={'checkbox'}
              id="toggle"
              onChange={() => setTheme(theme === 'white' ? 'black' : 'white')}/>
          <label htmlFor="toggle">Dark Theme</label>
          <input
              type={'checkbox'}
              id="toggle"
              onChange={() => setSecondary(prevState => !prevState)}/>
          <label htmlFor="toggle">Secondary</label>
      </>
  )
}

export default App
