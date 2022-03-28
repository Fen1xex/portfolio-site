import { links } from '../utils/constants'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import SwitchTheme from './SwitchTheme'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? 'show-sidebar' : null}>
        {/* nav links */}
        <div className='sidebar-links'>
          {links.map((link) => {
            const { id, url, name } = link
            return (
              <Link to={url} key={id} className='link' onClick={closeSidebar}>
                {name}
              </Link>
            )
          })}
        </div>
        <SwitchTheme />
        {/* end of nav links */}
        {/* close sidebar btn */}
        <button className='close-btn' onClick={closeSidebar}>
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
    background: var(--white);
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
    margin-bottom: -15rem;
  }
  a {
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    text-transform: uppercase;
    color: var(--black);
    margin: 0 1rem;
    &:hover {
      transition: all 0.15s linear;
      color: var(--blueColor);
    }
  }
  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    font-size: 2.25rem;
    top: 5%;
    right: 5%;
    cursor: pointer;
    background: transparent;
    border-radius: 5px;
    padding: 0.25rem 0.35rem;
    border: transparent;
    color: var(--black);
    &:hover {
      transition: all 0.15s linear;
      background: red;
    }
  }
`

export default Sidebar
