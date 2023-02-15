import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { ErroMessage, InputContainer } from "./styled";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error: string | undefined;
};

export const InputForm = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <InputContainer>
        <label htmlFor={props.name}>{props.label}</label>
        <input ref={ref} id={props.name} {...props} />
        {props.error && <ErroMessage>{props.error}</ErroMessage>}
      </InputContainer>
    );
  }
);
