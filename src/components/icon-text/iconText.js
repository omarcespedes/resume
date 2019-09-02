import React from 'react'

const IconText = ({ icon, text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: 5 }}>
      <span
        style={{
          height: 16,
          width: 16,
          fontSize: '16px',
          paddingRight: 5,
          display: 'inline-block'
        }}
      >
        {icon}
      </span>
      <span>{text}</span>
    </div>
  )
}

export default IconText
