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
    <div style={{ display: 'flex', padding: '10px 0' }}>
      <div style={{ width: 110 }}>{fromTo}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 'bold' }}>{role}</div>
        <div style={{ fontWeight: 'bold' }}>{companyName}</div>
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
          <div>
            <strong>Technologies:</strong> {technologies.join(', ')}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default WorkHistory
