import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { InputContainer } from "./styled";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export const InputForm = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <InputContainer>
        <label htmlFor={props.name}>{props.label}</label>
        <input ref={ref} id={props.name} {...props} />
        <p>Erro</p>
      </InputContainer>
    );
  }
);
