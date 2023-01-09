import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styled";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export function ButtonForm(props: ButtonProps) {
  return <ButtonContainer {...props}>{props.label}</ButtonContainer>;
}
