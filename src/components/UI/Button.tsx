import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  specialProp?: string;
}

const Button = (props: ButtonProps) => {
  const { specialProp, ...rest } = props;
  return <button {...rest} />;
};

export default Button;
