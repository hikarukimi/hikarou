import React, { useState, createContext } from 'react';
import classNames from 'classnames';
export type MenuMode = 'horizontal' | 'vertical';

export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (index: number) => void;
    children?: React.ReactNode;
}
export interface IMenuItemContext{
    currentIndex:number,
    onSelect?: (index: number) => void;
}

export const MenuContext=createContext<IMenuItemContext>({currentIndex:0,onSelect:()=>{}})
const Menu = (props: MenuProps) => {
    const {
        defaultIndex,
        className,
        mode,
        style,
        onSelect,
        children
    } = props;
    const [currentActive, setCurrentActive] = useState(defaultIndex?defaultIndex:0);
   
    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    const handleClick=(index:number)=>{
        setCurrentActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passedContext = {currentIndex: currentActive, onSelect: handleClick}
    return (
        <MenuContext.Provider value={passedContext}>
            <ul className={classes} style={style}>
                {children}
            </ul>  
        </MenuContext.Provider>
    )
};

