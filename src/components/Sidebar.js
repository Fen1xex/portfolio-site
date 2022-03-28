import { links } from '../utils/constants'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import SwitchTheme from './SwitchTheme'

const Sidebar = () => {
  return (
    <Wrapper>
      <aside>
        {/* nav links */}
        <div className='sidebar-links'>
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
        {/* close sidebar btn */}
        <button className='close-btn'>
          <MdClose className='icon' />
        </button>
        {/* end of close sidebar btn */}
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: all 0.3s linear;
    background: rgba(0, 0, 0, 0.85);
    display: grid;
    place-items: center;
  }
  .show-sidebar {
    transform: translateX(0);
  }
  h3 {
    color: var(--white);
  }
  .sidebar-links {
    display: grid;
    row-gap: 2.5rem;
  }
  a {
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    text-transform: uppercase;
    color: var(--white);
    margin: 0 1rem;
    &:hover {
      transition: var(--transition);
      color: var(--blueColor);
    }
  }
  .close-btn {
    position: fixed;
    font-size: 2.25rem;
    top: 5%;
    right: 5%;
    cursor: pointer;
    background: transparent;
    border: transparent;
    color: var(--white);
    &:hover {
      transition: var(--transition);
      scale: 1.1;
    }
  }
`

export default Sidebar
