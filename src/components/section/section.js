import React from 'react'

const Section = ({
  title,
  children,
  bigTitle,
  isSecondary,
  className
}) => {
  return (
    <div className={`section ${className || ''}`}>
      <div className={`title-container ${isSecondary ? 'secondary' : ''}`}>
        <span className={`title ${bigTitle ? 'big' : ''}`}
        >
          {title}
        </span>
        <div className="line" />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Section
