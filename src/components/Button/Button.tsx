import classNames from 'classnames';
import React from 'react'

export enum ButtonSize {
  Small = 'sm',
  Medium = 'medium',
  Large = 'lg',
}

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Danger = 'danger',
  Link = 'link',
} 

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export default function Button(props: ButtonProps) {
  const { className, disabled, size, btnType, children, href, ...restProps } = props;
  const classes = classNames('btn', className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    'disabled': (btnType === ButtonType.Link) && disabled,
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>{children}</a>
    )
  } else {
    return <button className={classes} disabled={disabled} {...restProps}>{children}</button>
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
  size: ButtonSize.Medium,
}
