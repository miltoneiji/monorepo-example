import React from 'react';

type ButtonProps = {
  onClick(e: React.MouseEvent<HTMLElement>): void;
  title: string;
}

const Button = (props: ButtonProps) => {
  const { onClick, title } = props;

  return (
    <button
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
