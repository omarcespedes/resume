import React from 'react'

const EducationHistory = ({ fromTo, career, institution, skills }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ minWidth: 110 }}>{fromTo}</div>
      <div style={{ flex: 1 }}>
        <div>
          <strong>{career}</strong>
        </div>
        <div>
          <strong>{institution}</strong>
        </div>
        {skills.length ? (
          <div>
            <ul>
              {skills.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default EducationHistory
