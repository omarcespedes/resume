import React from 'react'
import colors from '../../colors'

const defaultColor = colors.PRIMARY

const Section = ({
  title,
  children,
  bigTitle,
  titleColor = defaultColor,
  lineColor = defaultColor
}) => {
  return (
    <div style={{ padding: 10 }}>
      <div style={{ display: 'flex', margin: '10px 0', alignItems: 'center' }}>
        <span
          style={{ color: titleColor, fontSize: bigTitle ? '22px' : '16px' }}
        >
          {title}
        </span>
        <div
          style={{
            flex: 1,
            height: 2,
            backgroundColor: lineColor,
            marginLeft: 10
          }}
        ></div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Section
