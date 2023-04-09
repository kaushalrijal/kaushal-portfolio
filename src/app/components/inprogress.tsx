import React from 'react'

const Inprogress = () => {
    const inProgress = [
        {
            name: 'Kash App',
            description: 'Android Application'
        },
        {
            name: 'Khat',
            description: 'Android Application'
        },
        {
            name: 'Kong',
            description: 'Desktop Application'
        },
        {
            name: 'Klappy Bird',
            description: 'Mobile Game'
        },
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Work in Progress</h2>
                <ul className="list-inside">
                    {
                        inProgress.map((project, index) => (
                            <li key={index}>
                                <span className="font-medium">{project.name}</span> <span>({project.description})</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Inprogress