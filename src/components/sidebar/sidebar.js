import React from 'react'
import IconText from '../icon-text/iconText'
import Section from '../section/section'
import SkillSquare from '../skill-squares/skillSquares'
import colors from '../../colors'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoMdMail,
  IoMdLocate,
  IoMdPhonePortrait
} from 'react-icons/io'
import profileImg from '../../assets/profile.jpg'

const Sidebar = ({ completeName, backgroundColor = colors.PRIMARY }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor,
        color: 'white',
        padding: 8,
        maxWidth: 260
      }}
    >
      <div>
        <img
          style={{ width: 160, borderRadius: 70 }}
          src={profileImg}
          alt="Profile"
        />
      </div>
      <div
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: '22px',
          margin: '10px 0'
        }}
      >
        {completeName}
      </div>
      <div>
        <IconText icon={<IoMdLocate />} text="La Paz, Bolivia" />
        <IconText icon={<IoMdPhonePortrait />} text="+591 76789545" />
        <IconText icon={<IoMdMail />} text="omarcspds@gmail.com" />
        <IconText icon={<IoLogoTwitter />} text="@omarcspds" />
        <IconText icon={<IoLogoGithub />} text="/omarcespedes" />
      </div>
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
