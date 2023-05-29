import React, { memo, ReactElement } from 'react';

type ButtonProps = {
    type: string,
    classname?: string,
    children: ReactElement[] | string,
    handleClick?: () => void
}

function Button(props: ButtonProps) {
    const { type, children, classname, handleClick } = props;

    let classes = "";

    if (type === 'primary') {
        classes =  'bg-black font-small text-white py-1 px-8 border border-black hover:bg-white hover:border hover:border-[#e5e5e5] hover:text-black';
    }

    if (type === 'disabled') {
        classes =  'bg-white font-small text-[#A6A6A6] border border-[#e5e5e5] rounded-full py-1 px-8 strikethrough';
    }

    if (type === 'inactive') {
        classes =  'bg-white font-small text-block border border-[#e5e5e5] rounded-full py-1 px-8 hover:bg-black hover:border hover:border-[#e5e5e5] hover:text-white';
    }

    return (
        <button className={`${classes} rounded-full font-small ${classname}`} disabled={type === 'disabled'} onClick={handleClick}>{children}</button>
    )
}

export default memo(Button);
