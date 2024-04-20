import React from 'react'

const ExperienceEntry = ({
  fromTo,
  title,
  subtitle,
  list,
  badges
}) => {
  return (
    <div className="experience-entry">
        <div className="time-container">
            {fromTo}
        </div>
        <div className="content-container">
            <h3 className="title">{title}</h3>
            <h4 className="sub-title">{subtitle}</h4>
            {list?.length > 0 && (
                <ul className="list">
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
                </ul>
            )}
            {badges?.length > 0 && (
                <div className="badge-container">
                    {badges.sort().map((item, i) => (
                        <span className="badge" key={i}>{item}</span>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default ExperienceEntry
