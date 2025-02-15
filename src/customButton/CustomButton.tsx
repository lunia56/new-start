import { ChangeEvent, useEffect, useState } from 'react';
import { cnApp } from '../App.classname.tsx';
import { SuperButton } from './SuperButton/SuperButton.tsx';
import {
  ECustomButtonState,
  EButtonTheme,
} from './constants/SuperButtonStates.ts';

export type TSuperButtonTheme = EButtonTheme.WHITE | EButtonTheme.BLACK;

export const CustomButton = () => {
  const buttonTitle = 'Супер Кнопка';

  const [theme, setTheme] = useState<TSuperButtonTheme>(EButtonTheme.WHITE);
  const [isSecondary, setIsSecondary] = useState<boolean>(false);
  const [customButtonState, setCustomButtonState] = useState(
    ECustomButtonState.NORMAL,
  );

  useEffect(() => {
    document.body.style.backgroundColor = theme;
    document.body.style.color =
      theme === EButtonTheme.WHITE ? EButtonTheme.BLACK : EButtonTheme.WHITE;
  }, [theme]);

  const selectHandleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value as ECustomButtonState;
    setCustomButtonState(value);
    console.log();
  };

  const handleThemeToggle = () => {
    setTheme(
      theme === EButtonTheme.WHITE ? EButtonTheme.BLACK : EButtonTheme.WHITE,
    );
  };
  return (
    <div className={cnApp('superButton')}>
      <div>
        <SuperButton
          title={buttonTitle}
          theme={theme}
          isSecondary={isSecondary}
          customButtonState={customButtonState}
        />
      </div>
      <div className={cnApp('container')}>
        <div className={cnApp('box')}>
          <label htmlFor="theme-toggle">Dark Theme:</label>
          <input
            type={'checkbox'}
            id="theme-toggle"
            onChange={handleThemeToggle}
          />
        </div>
        <div className={cnApp('box')}>
          <label htmlFor="secondary-toggle">Secondary:</label>
          <input
            type={'checkbox'}
            id="secondary-toggle"
            onChange={() => setIsSecondary((prevState) => !prevState)}
          />
        </div>
        <div className={cnApp('box')}>
          <label htmlFor="dropdown">State:</label>
          <select id="dropdown" onChange={selectHandleChange}>
            {Object.values(ECustomButtonState).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
