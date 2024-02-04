import React from 'react'

export default function HorizentalLine({ className }: { className?: string }) {
    return (
        <div className={"line w-1/6 h-px bg-[#C778DD] " + className}></div>
    )
}
