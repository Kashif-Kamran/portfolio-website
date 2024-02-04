import React from 'react';

const Button = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
    return (
        <button className={"text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33] " + className} >
            {children}
        </button >
    )
};

export default Button;