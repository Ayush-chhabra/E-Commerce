import React from 'react'


export default function Heading({title,className}) {
    return (
        <div className="row">
            <div className="col text-center mb-4">
                <h1 className={className}>{title}</h1>
            </div>
        </div>
    )
}
