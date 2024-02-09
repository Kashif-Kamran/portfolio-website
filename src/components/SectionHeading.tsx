import React from 'react'
import HorizentalLine from './HorizentalLine'
export default function SectionHeading({ className, children }: { className?: string, children?: React.ReactNode }) {
    return (
        <>
            <div className={"flex flex-row justify-center items-center text-[25px] font-medium w-full " + className} >
                <HorizentalLine />
                <div className='text-white px-2'>
                    <span className="text-[#C778DD]">#</span>{children}
                </div>
                <HorizentalLine />
            </div>
        </>
    )
}
