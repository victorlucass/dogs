import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { ErroMessage, InputContainer } from "./styled";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error?: string | undefined;
};

export function InputForm({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}: any) {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <ErroMessage>{error}</ErroMessage>}
    </InputContainer>
  );
}
