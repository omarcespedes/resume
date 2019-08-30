import React from 'react'
import IconText from '../icon-text/iconText'
import Section from '../section/section'

const Sidebar = ({ completeName }) => {
  return (
    <div>
      <div>Avatar</div>
      <div style={{ textDecoration: 'uppercase' }}>{completeName}</div>
      <IconText text="@omarcspds" />
      <IconText text="github/omarcespedes" />
      <Section title="Languages">
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
