import { ChangeEvent, useEffect, useState } from "react";
import { cnApp } from "../App.classname.tsx";
import { SuperButton } from "./SuperButton/SuperButton.tsx";
import {
  ECustomButtonState,
  EButtonTheme,
} from "./constants/SuperButtonStates.ts";

export type TSuperButtonTheme = EButtonTheme.WHITE | EButtonTheme.BLACK;

export const CustomButton = () => {
  const [theme, setTheme] = useState<TSuperButtonTheme>(EButtonTheme.WHITE);
  const [isSecondary, setIsSecondary] = useState<boolean>(false);
  const [customButtonState, setCustomButtonState] = useState(
    ECustomButtonState.NORMAL,
  );
  const ButtonTitle = "Супер Кнопка";
  useEffect(() => {
    document.body.style.backgroundColor = theme;
    document.body.style.color =
      theme === EButtonTheme.WHITE ? EButtonTheme.BLACK : EButtonTheme.WHITE;
  }, [theme]);

  const selectHandleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value as ECustomButtonState;
    setCustomButtonState(value);
  };
  const onChangeInputHandler = () => {
    setTheme(
      theme === EButtonTheme.WHITE ? EButtonTheme.BLACK : EButtonTheme.WHITE,
    );
  };
  return (
    <>
      <div className={cnApp("superButton")}>
        <SuperButton
          title={ButtonTitle}
          theme={theme}
          isSecondary={isSecondary}
          customButtonState={customButtonState}
        />
      </div>
      <div className={cnApp("container")}>
        <div className={cnApp("box")}>
          <label htmlFor="toggle">Dark Theme:</label>
          <input
            type={"checkbox"}
            id="toggle"
            onChange={onChangeInputHandler}
          />
        </div>

        <div className={cnApp("box")}>
          <label htmlFor="toggle">Secondary:</label>
          <input
            type={"checkbox"}
            id="toggle"
            onChange={() => setIsSecondary((prevState) => !prevState)}
          />
        </div>
        <div className={cnApp("box")}>
          <label htmlFor="dropdown">State:</label>
          <select id="dropdown" onChange={selectHandleChange}>
            <option value="normal">normal</option>
            <option value="hovered">hovered</option>
            <option value="disabled">disabled</option>
          </select>
        </div>
      </div>
    </>
  );
};
