import React from 'react'
import IconText from '../icon-text/iconText'
import Section from '../section/section'
import SkillSquare from '../skill-squares/skillSquares'
import colors from '../../colors'

const Sidebar = ({ completeName, backgroundColor = colors.PRIMARY }) => {
  return (
    <div style={{ backgroundColor, color: 'white' }}>
      <div>Avatar</div>
      <div style={{ textTransform: 'uppercase' }}>{completeName}</div>
      <IconText text="@omarcspds" />
      <IconText text="github/omarcespedes" />
      <Section title="Languages" titleColor="white" lineColor="white">
        <ul>
          <li>
            <strong>Spanish</strong> (Main Tongue)
          </li>
          <li>
            <strong>English</strong> (Advanced)
          </li>
          <li>
            <strong>Portuguese</strong> (Basic)
          </li>
        </ul>
      </Section>
      <Section title="Skills" titleColor="white" lineColor="white">
        <SkillSquare skillName="JavaScript" number={10} />
        <SkillSquare skillName="Node.js" number={7} />
        <SkillSquare skillName="React" number={10} />
      </Section>
    </div>
  )
}

export default Sidebar
