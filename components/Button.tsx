import Image from 'next/image';
import { MouseEventHandler } from 'react';

type Props = {
  type: 'button' | 'submit';
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  isSubmitting?: boolean;
  handleClick?: MouseEventHandler;
  bgColor?: string;
  textColor?: string;
};

const Button = ({
  type,
  title,
  leftIcon,
  rightIcon,
  isSubmitting,
  handleClick,
  bgColor,
  textColor,
}: Props) => {
  return (
    <button
      type={type || 'button'}
      className={`flexCenter gap-3 px-4 py-3
      ${textColor ? textColor : 'text-white'}
      ${
        isSubmitting ? 'bg-black/50' : bgColor ? bgColor : 'bg-primary-purple'
      } rounded-xl text-sm font-medium max-md:w-full
      `}
      onClick={handleClick}
      disabled={isSubmitting}
    >
      {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left icon" />}
      {title}
      {rightIcon && <Image src={rightIcon} width={14} height={14} alt="left icon" />}
    </button>
  );
};

export default Button;
