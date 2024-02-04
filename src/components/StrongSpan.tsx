import React from 'react';

const StrongSpan = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
    return (
        <span className={"text-[#C778DD] font-semibold " + className}>
            {children}
        </span>
    )
};

export default StrongSpan;