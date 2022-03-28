import styled from 'styled-components'
import { social_media } from '../utils/constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Wrapper>
      <footer className='section-center'>
        <h3>Follow my media</h3>
        <div className='footer-links'>
          {social_media.map((link) => {
            const { name: id, url, icon } = link
            return (
              <a href={url} key={id} target='_blank'>
                {icon}
              </a>
            )
          })}
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 5rem;
  background: var(--white);
  display: flex;
  align-items: center;
  box-shadow: 0px 15px 15px 10px rgba(0, 0, 0, 0.5);
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-links {
    display: flex;
    gap: 2rem;
  }
  a {
    color: var(--black);
    font-size: 2.25rem;
    &:hover {
      color: var(--blueColor);
      transition: all 0.15s linear;
    }
  }
  h3 {
    text-transform: uppercase;
  }
`

export default Footer
