import React from 'react'
import IconText from '../icon-text/iconText'
import Section from '../section/section'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoMdMail,
  IoMdLocate,
} from 'react-icons/io'
import profileImg from '../../assets/profile.jpg'

const Sidebar = ({ completeName }) => {
  return (
    <div className="sidebar">
      <div>
        <img className="profile-pic"
          src={profileImg}
          alt="Profile"
        />
      </div>
      <div className="full-name">
        {completeName}
      </div>
      <div>
        <IconText icon={<IoMdLocate />} text="Santa Cruz, Bolivia" />
        <IconText icon={<IoMdMail />} text="omarcspds@gmail.com" />
        <IconText icon={<IoLogoTwitter />} text="@omarcspds" />
        <IconText icon={<IoLogoGithub />} text="omarcespedes" />
      </div>
      <Section title="Languages" isSecondary>
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
    </div>
  )
}

export default Sidebar
