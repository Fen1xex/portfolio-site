import { links } from '../utils/constants'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import SwitchTheme from './SwitchTheme'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { openSidebar } = useGlobalContext()

  return (
    <Wrapper>
      <nav className='section-center'>
        {/* nav title */}
        <div className='nav-title'>
          <h2>
            KIRILL <span>F.</span>
          </h2>
          <button className='toggle' onClick={openSidebar}>
            <FaBars className='toggle-btn' />
          </button>
        </div>
        {/* end of nav title */}
        {/* nav links */}
        <div className='nav-links'>
          {links.map((link) => {
            const { id, url, name } = link
            return (
              <Link to={url} key={id} className='link'>
                {name}
              </Link>
            )
          })}
        </div>
        {/* end of nav links */}
        {/* switch theme btn */}
        <SwitchTheme />
        {/* end of switch theme btn */}
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: var(--white);
  box-shadow: var(--shadow);
  nav {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    margin-bottom: 0;
  }
  span {
    color: red;
  }
  .toggle {
    display: none;
  }
  a {
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    text-transform: uppercase;
    color: var(--black);
    margin: 0 1rem;
    &:hover {
      transition: var(--transition);
      border-bottom: 2px solid var(--black);
    }
  }

  @media screen and (max-width: 992px) {
    .nav-links {
      display: none;
    }
    .switch {
      display: none;
    }
    .toggle {
      display: block;
      background: none;
      border: none;
      font-size: 1.75rem;
    }
    .toggle-btn {
      cursor: pointer;
      &:hover {
        transition: all 0.3s linear;
        transform: rotate(-180deg);
      }
    }
    .nav-title {
      width: 85vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export default Navbar
