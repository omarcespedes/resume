import React from 'react'

const WorkHistory = ({
  fromTo,
  role,
  companyName,
  companyDesc,
  responsibilities = [],
  technologies = []
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>{fromTo}</div>
      <div style={{ flex: 1 }}>
        <div>{role}</div>
        <div>{companyName}</div>
        {companyDesc && <div>{companyDesc}</div>}
        {responsibilities.length ? (
          <div>
            <ul>
              {responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {technologies.length ? (
          <div>Technologies: {technologies.join(', ')}</div>
        ) : null}
      </div>
    </div>
  )
}

export default WorkHistory
