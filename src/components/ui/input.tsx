import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, type, ...rest } = props; // Destructuring props to access className and type
  return <input type={type} {...rest} ref={ref} />;
});
Input.displayName = "Input";

export { Input };
