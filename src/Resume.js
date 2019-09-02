import React from 'react'
import Section from './components/section/section'
import WorkHistory from './components/work-history/workHistory'
import EducationHistory from './components/education-history/educationHistory'
import Sidebar from './components/sidebar/sidebar'

const workHistory = [
  {
    fromTo: '2019 - Present',
    role: 'Software Engineer',
    companyName: 'Team Software',
    responsibilities: [
      'Creation and maintenance of reusable components with React.',
      'Creation of REST endpoints with Node.js and Express.',
      'Creation of pixel perfect components.',
      'Creation of custom hooks in React to abstract away the business logic.'
    ],
    technologies: [
      'React',
      'React Native',
      'NodeJS',
      'C#',
      'Redux',
      'Azure Functions'
    ]
  },
  {
    fromTo: '2015 - 2019',
    role: 'Senior Frontend Developer',
    companyName: 'Xtime',
    responsibilities: [
      'Wrote templates and React components to be reused across the whole web app.',
      'Styling of application with Sass.',
      'Assisted in Backend with Java creating REST endpoints.',
      'Migrated legacy ExtJS app to React.'
    ],
    technologies: [
      'React',
      'ExtJS',
      'NodeJS',
      'Java',
      'Redux',
      'AWS S3',
      'Docker',
      'Oracle DB'
    ]
  },
  {
    fromTo: '2014 - 2015',
    role: 'Junior Developer',
    companyName: 'eSoft',
    responsibilities: [
      'Desktop application development with VB.Net',
      'Customization with VB.net in the POS module adding visual feedback to the user.'
    ],
    technologies: ['VB.Net', 'SQL Server']
  },
  {
    fromTo: '2013 - 2014',
    role: 'Junior Developer',
    companyName: 'Dao Systems LA',
    responsibilities: [
      'Application development in OpenERP (Odoo).',
      'Working with JavaScript, JQuery and Backbone to customize the POS module.'
    ],
    technologies: ['Odoo', 'Python', 'JQuery', 'JavaScript']
  }
]

const educationHistory = [
  {
    fromTo: '2011 - 2015',
    career: 'Computer Science',
    institution: 'Universidad Privada Boliviana',
    skills: [
      'Software Development',
      'Database Management',
      'Agile Methodologies',
      'Infrastructure'
    ]
  }
]

function Resume() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar completeName="Omar Rodolfo Cespedes Daza" />
      <div id="content">
        <Section bigTitle title="Intro">
          Javascript developer with more than 5 years of experience. Currently
          specializing in React. Passionate learner and always trying out the
          latest technologies.
        </Section>
        <Section bigTitle title="Work History">
          {workHistory.map(job => (
            <WorkHistory key={job.fromTo} {...job} />
          ))}
        </Section>
        <Section bigTitle title="Education">
          {educationHistory.map(education => (
            <EducationHistory key={education.fromTo} {...education} />
          ))}
        </Section>
      </div>
    </div>
  )
}

export default Resume
