import React from 'react'

const Education = () => {
    const education = [
        {
            degree: 'Bachelors',
            institution: 'Tribhuwan University IOE, BCT',
            date: '2023 - present'
        },
        {
            degree: 'Higher Secondary Education',
            institution: 'National Examination Board',
            date: '2021 - 2023'
        },
        {
            degree: 'Secondary Education Examination',
            institution: 'National Examination Board',
            date: '2020'
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Education</h2>
                <ul className="list-inside">
                    {
                        education.map((degree, index) => (
                            <li key={index}>
                                <span className="font-medium">{degree.degree}</span> | <span>{degree.institution}</span> | <span>{degree.date}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Education
