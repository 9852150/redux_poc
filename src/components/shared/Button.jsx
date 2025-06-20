import cx from 'classnames';
import React from 'react';

const Button = ({
  label = '',
  onClick = () => null,
  type = 'button',
  className = '',
  disabled = false,
  color = '',
  children,
  variant = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cx(
        `bg-transparent border border-[#FF6B35] text-[#FF6B35] text-ligth-bg px-4 py-2 rounded-lg  text-sm font-medium`,
        {
          'border border-primary !bg-transparent !text-primary':
            variant === 'outlined' && color !== 'error',
          '!bg-[#ff0000] !text-white':
            color === 'error' && variant !== 'outlined',
          'border !bg-transparent !text-[#ff0000] !border-[#ff0000] ':
            color === 'error' && variant === 'outlined',
          'cursor-not-allowed !bg-opacity-50': disabled,
          [className]: className,
        }
      )}
    >
      {label || children}
    </button>
  );
};

export default Button;
