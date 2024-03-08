import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { ErroMessage, InputContainer } from "./styled";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  name: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

export function InputForm({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}: InputProps) {
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
