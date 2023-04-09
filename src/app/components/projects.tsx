import React from 'react'

const Projects = () => {
    const projects = [
        {
            name: 'Matthew',
            link: 'https://github.com/kaushalrijal/Smart-Calculator',
            description: 'Github'
        },
        {
            name: 'KodePad',
            link: 'https://github.com/kaushalrijal/KodePad',
            description: 'Github'
        },
        {
            name: 'Khat',
            link: 'https://github.com/kaushalrijal/Khat',
            description: 'Github'
        },
        {
            name: 'FB Downloader',
            link: 'https://github.com/kaushalrijal/FB-Video-Downloader',
            description: 'Github'
        },
        {
            name: 'Mag Faram Calculator',
            link: 'https://github.com/kaushalrijal/Maag-Faram-Calculator',
            description: 'Github'
        },
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Projects</h2>
                <ul className="ist-inside">
                    {
                        projects.map((project, index) => (
                            <li key={index}>
                                <a href={project.link} target='_blank' className='text-primary underline italic'>
                                    <span>{project.name}</span>
                                </a> | <span>{project.description}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Projects