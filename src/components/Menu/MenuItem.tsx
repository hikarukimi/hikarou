import React, { useContext } from 'react'
import classNames from 'classnames';
import { MenuContext } from './Menu';

export interface MenuItemProps {
    index: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export default function MenuItem(props: MenuItemProps) {
    const {
        index,
        disabled,
        className,
        style,
        children
    } = props;
    const context = useContext(MenuContext);
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.currentIndex === index
    });
    const handleClick=()=>{
        if(context.onSelect&&!disabled&&typeof index==='number'){
            context.onSelect(index)
        }
    }

    return (
        <li className={classes} style={style} data-index={index} data-disabled={disabled} onClick={handleClick}>
            {
                children
            }
    </li>
  )
}
