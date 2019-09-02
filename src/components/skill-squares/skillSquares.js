import React from 'react'

const SkillSquare = ({ skillName, number }) => {
  const squares = []
  for (let i = 0; i < 10; i++) {
    squares.push(
      <span
        key={i}
        style={{
          display: 'inline-block',
          height: 13,
          width: 13,
          margin: '0 2px',
          backgroundColor: i <= number - 1 ? 'white' : '#ccc'
        }}
      ></span>
    )
  }
  return (
    <div>
      <div>{skillName}</div>
      <div>{squares}</div>
    </div>
  )
}

export default SkillSquare
