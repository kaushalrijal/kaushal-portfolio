import React from 'react'

const Social = () => {
    const social = [
        {
            name: 'Github',
            link: 'https://github.com/kaushalrijal'
        },
        {
            name: 'Twitter',
            link: 'https://twitter.com/kaushalrijal',
        },
        {
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/kaushalrijal',
        },
        {
            name: 'Instagram',
            link: 'https://instagram.com/kaushalsym',
        },
        {
            name: 'Facebook',
            link: 'https://facebook.com/kaushalsym',
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Social</h2>
                <ul className="list-inside">
                    <li>
                        <a href='https://blogsofkaushal.wordpress.com' target='_blank' className='text-primary underline italic'>
                            <span>Blog</span>
                        </a>
                    </li>
                    {
                        social.map((social, index) => (
                            <li key={index}>
                                <a href={social.link} target='_blank' className='text-primary underline italic'>
                                    <span>{social.link}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Social
