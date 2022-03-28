import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BsMoonStars } from 'react-icons/bs'

const SwitchTheme = () => {
  const getStorageTheme = () => {
    let theme = 'light-theme'
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme')
    }
    return theme
  }

  const [theme, setTheme] = useState(getStorageTheme())

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <Wrapper>
      <button className='switch' onClick={toggleTheme}>
        <h4>
          switch <br />
          theme
        </h4>
        <BsMoonStars />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .switch {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    background: transparent;
    border: 2px solid var(--black);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    color: var(--black);
    &:hover {
      background: var(--blueColor);
      transition: all 0.15s linear;
    }
  }
  h4 {
    font-size: 1rem;
  }
`

export default SwitchTheme
