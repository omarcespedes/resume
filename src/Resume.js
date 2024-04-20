import React from 'react'
import Section from './components/section/section'
import Sidebar from './components/sidebar/sidebar'
import ExperienceEntry from './components/experience-entry/experienceEntry'

import './sass/index.scss'

const workHistory = [
  {
    fromTo: '2019 - Present',
    role: 'Senior Fronted Team Lead',
    companyName: 'Booz Allen Hamilton (through BairesDev)',
    responsibilities: [
      'In charge of the Camping Frontend team',
      'Focused on web performance',
      'Participated actively in UX process to provide the best experience to the user',
      'Enforced React best practices to ensure code maintainability and scalability',
      'Provided creative ideas to address complex user interfaces'
    ],
    technologies: [
      'React',
      'Redux',
      'NodeJS',
      'Storybook',
      'Jest',
      'Sass',
      'UX',
      'Analytics',
      'React Testing Library',
      'Responsive Design',
    ]
  },
  {
    fromTo: '2019',
    role: 'FullStack Javascript Developer',
    companyName: 'Team Software',
    responsibilities: [
      'Creation and maintenance of reusable components with React.',
      'Creation of REST endpoints with Node.js and Express.',
      'Creation of pixel perfect components.',
      'Creation of custom hooks in React to abstract away the business logic.'
    ],
    technologies: [
      'React',
      'NodeJS',
      'C#',
      'Redux',
      'Azure Functions',
      'Jest'
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
          Javascript developer with more than 10 years of experience. Currently
          specializing in React. Passionate learner and always trying out the
          latest technologies.
        </Section>
        <Section className="work-container" bigTitle title="Work History">
          {workHistory.map((job) => (
            <ExperienceEntry
              key={job.fromTo}
              fromTo={job.fromTo}
              title={job.role}
              subtitle={job.companyName}
              list={job.responsibilities}
              badges={job.technologies}
            />
          ))}
        </Section>
        <Section bigTitle title="Education">
          {educationHistory.map((education) => (
            <ExperienceEntry
              key={education.fromTo}
              fromTo={education.fromTo}
              title={education.career}
              subtitle={education.institution}
              list={education.skills}
            />
          ))}
        </Section>
      </div>
    </div>
  )
}

export default Resume
